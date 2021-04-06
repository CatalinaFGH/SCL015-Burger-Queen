import "./Client.css";
import logo from "../Images/logosushi.jpg";
import React, { useState } from "react";
import Breakfast from './Components/Breakfast';
import LunchAndDinner from './Components/LunchAndDinner';
import Drinks from './Components/Drinks';
import Appetizers from './Components/Appetizers';
import { useFirebaseApp } from 'reactfire'; 
import 'firebase/firestore';


const ClientPage = () => {
  const firebase = useFirebaseApp();
  // console.log(firebase);
  
  const [menu, setMenu] = useState('');
  const [orderList, setOrderList] = useState([]);
  const [name, setName] = useState('');
  const [table, setTable] = useState('');
    
  let total = 0;
  orderList.map(item=>(total += item.price));

function addColection() {
  firebase.firestore()
              .collection("pedidos")
              .add({
                name: name,
                table: table,
                orderList: orderList,
              })
              .then(() => {
              console.log('guardado esxitosamente')
              }).catch(() => {console.log('no se guardo esxitosamente') })
}
 


const DisplayFunction = () =>{
if (menu === 'BreakfastFood') {
return <Breakfast orderList={orderList} setOrderList={setOrderList}/>}
else if (menu === 'LunchAndDinnerFood'){
return <LunchAndDinner orderList={orderList} setOrderList={setOrderList}/>}
else if (menu === 'Appetizers'){
  return <Appetizers orderList={orderList} setOrderList={setOrderList}/>}
else if (menu === 'Drinks'){
  return <Drinks orderList={orderList} setOrderList={setOrderList}/>}
else return ' ' ;
};

  return (
    <div className="clientPageContainer">
      <header className="headerClientPage">
        <div className="logoContainer">
          <p className="logoName">
            SUSHI <br /> QUEEN
          </p>
          <img src={logo} className="logoHeader" alt="logosushi" />
        </div>{" "}
        <a href="/cocina" className="headerButton">
          COCINA
        </a>
      </header>

      <div className="clientPageContent">
        <div className="menu-buttons-container">
                <div className="menu-buttons">
                <button onClick={()=>{setMenu('BreakfastFood')}} className="menuOptionsBtn">
                  Desayuno
                </button>
                 <button onClick={()=>setMenu('LunchAndDinnerFood')} className="menuOptionsBtn">
                  Almuerzo y cena
                </button>
              </div>
              <div>
                <button onClick={()=>setMenu('Drinks')} className="menuOptionsBtn">Líquidos</button>
                <button onClick={()=>setMenu('Appetizers')} className="menuOptionsBtn">Aperitivos</button>
              </div> 
              <br />
              <div className="foodBtnsContainer">
              {DisplayFunction()}
              </div>
        </div>
        <div className="printed-order-container">
          <aside className="clientPageAside">
            <div className="nameAndTableContainer">
            <p>NOMBRE:</p>
            <input
              type="text"
              placeholder="Nombre de cliente"
              className="client-name-input"
              onChange={(ev) => setName(ev.target.value)}
            />
            <p className="tableTitle">MESA:</p>
            <input
              type="text"
              placeholder="N° Mesa"
              className="table-number-input"
              onChange={(ev) => setTable(ev.target.value)}
            />
            </div>
            <div className="order-container">
              <hr className="black-line"></hr>
              <p>PEDIDO</p>
              <hr className="black-line"></hr>
            </div>
            <ul className="orderList">
              {orderList.map(item=>(
              <p key={item.id}>{item.name + ' $' + item.price}</p>
            ))}
            </ul>
            <div>
              <hr className="black-line"></hr>
              <p>{'TOTAL: $' + total}</p>
              <hr className="black-line"></hr>
            </div>
            <div className="printed-order-buttons-container">
              <button onClick={()=> addColection()} className="send-order-button">ENVIAR</button>
              <button className="cancel-order-button">CANCELAR</button>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default ClientPage;
