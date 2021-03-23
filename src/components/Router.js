import './Home/Home.css';
import React from "react";
import ClientPage from './Clients/Client';
import Home from './Home/Home';
import KitchenPage from './Kitchen/Kitchen';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const TheRouter = () => {
  return (
    <Router>

    <Switch>
          <Route exact path="/cliente">
            <ClientPage/>
          </Route>
          <Route exact path="/cocina">
            <KitchenPage />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
    </Switch>

    </Router>   
  );

}


export default TheRouter;