import logo from '../Images/logosushi.jpg'
import './Kitchen.css'

function KitchenPage() {
    return (
      <div className="kitchen-page-container">
    
    <div className="container">
      <header className="headerClientPage">
        <div className="logoContainer">
          <p className="logoName">SUSHI <br/> QUEEN</p>
          <img src={logo} className="logoHeader" alt="logosushi"/>
          </div>
          <a href="/cliente"className="headerButton">CLIENTE</a>
          </header>
          <div>
            <div className="order-header-container">
              <h2 className="order-header-title">
                PEDIDOS
              </h2>
            </div>
          </div>
    </div>
      </div>
    );
  }
  
  export default KitchenPage;
  