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
              <button className="welcome-page-client-button"><Link to="/cliente">CLIENTE</Link></button>
              <button className="welcome-page-kitchen-button"><Link to="/cocina">COCINA</Link></button>
           </div>
      </div>
    </div>
    <Switch>
          <Route path="/cliente">
            <ClientPage/>
          </Route>
          <Route path="/cocina">
            <KitchenPage />
          </Route>
    </Switch>
    </Router>
  );
}

export default WelcomePage;