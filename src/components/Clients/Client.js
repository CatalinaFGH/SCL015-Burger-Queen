import './Client.css';
import logo from '../Images/logosushi.jpg';
// import Breakfast from './Components/Breakfast';
// import LunchAndDinner from './Components/LunchAndDinner';
// import Drinks from './Components/Drinks';
// import Appetizers from './Components/Appetizers'

function BreakfastBtn(){
console.log("desayuno");
}

const ClientPage = () => {
  return (
    <div className="clientPageContainer">
      <header className="headerClientPage">
        <div className="logoContainer">
          <p className="logoName">SUSHI <br/> QUEEN</p>
          <img src={logo} className="logoHeader" alt="logosushi"/>
        </div> <a href="/cocina" className="headerButton">COCINA</a>
      </header>

<div className="clientPageContent">

      <div className="menu-buttons-container">
        <div className= "menu-buttons">
          <button onClick={BreakfastBtn} className="menuOptionsBtn">Desayuno</button><button className="menuOptionsBtn">Almuerzo y cena</button>
        </div>
        <div>
          <button className="menuOptionsBtn">Líquidos</button><button className="menuOptionsBtn">Aperitivos</button>
        </div> 
              
      </div>
  <div className="printed-order-container">
     <aside className="clientPageAside">
     <p>NOMBRE:</p>
      <input type="text" placeholder="Ingrese nombre" className="client-name-input"/>
     <p className="tableTitle">MESA:</p>
      <input type="text" placeholder="Ingrese mesa" className="table-number-input"/>
      <div className="order-container">
        <hr className="black-line"></hr>
        <p>PEDIDO</p>
        <hr className="black-line"></hr>
      </div>
      <div>
         {/* Aqui va el pedido */}
      </div>
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
}

export default ClientPage;