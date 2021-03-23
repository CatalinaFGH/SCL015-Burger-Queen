import './WelcomePage.css';
import logo from './WelcomePageImages/logosushi.jpg';
import React from "react";
import ClientPage from '../Clients/Client';
import KitchenPage from '../Kitchen/Kitchen';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const WelcomePage = () => {
  return (
    <Router>

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
    <Switch>
          <Route exact path="/cliente">
            <ClientPage/>
          </Route>
          <Route exact path="/cocina">
            <KitchenPage />
          </Route>
    </Switch>

    </Router>   
  );

}


export default WelcomePage;