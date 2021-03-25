import logo from '../Images/logosushi.jpg';
import {
Link 
 } from "react-router-dom";

const Home = () => {
    return (
        <div className="welcome-page-container">
           <div className="elements-container">
              <img src={logo} alt="logo" className="logo-sushi"/>
              <h1 className="title">SUSHI<br></br>QUEEN</h1>
           <div className="buttons-container">
              <Link to="/cliente"><button className="welcome-page-client-button">CLIENTE</button></Link>
              <Link to="/cocina"><button className="welcome-page-kitchen-button">COCINA</button></Link>
           </div>
           </div>

        </div>
    );
}

export default Home;