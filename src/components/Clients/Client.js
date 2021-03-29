import "./Client.css";
import logo from "../Images/logosushi.jpg";
import React, { useState } from "react";
// import Breakfast from './Components/Breakfast';
// import LunchAndDinner from './Components/LunchAndDinner';
// import Drinks from './Components/Drinks';
// import Appetizers from './Components/Appetizers'

const useOrderList = () => {
  const [orderList, setOrderList] = useState([]);
 
  const addItem = (comida) => {
    console.log(orderList);
    setOrderList(orderList.concat({
      id: orderList.length,
      name: comida.nombre,
    }));
  }
return { orderList, addItem }
}


const ClientPage = () => {
  
  const [menu, setMenu] = useState('');
  const { orderList, addItem } = useOrderList([]);

  let clase = '';
  if(menu===''){
    clase = '';
  }

  else(clase = 'selectFoodItemBtn');

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
                <button onClick={()=> setMenu('Sandwich jamón y queso $1000')} className="menuOptionsBtn">
                  Desayuno
                </button>
                <button onClick={()=>setMenu('Sushi de salmón $3000')} className="menuOptionsBtn">
                  Almuerzo y cena
                </button>
              </div>
              <div>
                <button onClick={()=>setMenu('Sprite 500ml $1500')} className="menuOptionsBtn">Líquidos</button>
                <button onClick={()=>setMenu('Gyozas $3000')} className="menuOptionsBtn">Aperitivos</button>
              </div>
              <br />
              <span onClick={() => addItem({nombre:menu})} className={clase}>{menu}</span>
        </div>
        <div className="printed-order-container">
          <aside className="clientPageAside">
            <p>NOMBRE:</p>
            <input
              type="text"
              placeholder="Ingrese nombre"
              className="client-name-input"
            />
            <p className="tableTitle">MESA:</p>
            <input
              type="text"
              placeholder="Ingrese mesa"
              className="table-number-input"
            />
            <div className="order-container">
              <hr className="black-line"></hr>
              <p>PEDIDO</p>
              <hr className="black-line"></hr>
            </div>
            <ul>
              {orderList.map(item=>(
              <p key={item.id}>{item.name}</p>
            ))}
            </ul>
            <div>
              <hr className="black-line"></hr>
              <p>TOTAL:</p>
              <hr className="black-line"></hr>
            </div>
            <div className="printed-order-buttons-container">
              <button className="send-order-button">ENVIAR</button>
              <button className="cancel-order-button">CANCELAR</button>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default ClientPage;