import React from 'react';

import {
  BrowserRouter as Router, 
  Switch, 
  Route,
  } from 'react-router-dom';
  
import HomePage from "../pages/HomePage";
import CashPage from "../pages/CashPage";
import CustomerBill from "../pages/CustomerBillPage";  



function App() {
  return (
      <Router>
        <Switch>
            <Route exact path="/">
                <HomePage />
            </Route>

            <Route path="/cashier">
                <CashPage />
            </Route>

            <Route path="/bill">
                <CustomerBill />
            </Route>
        </Switch>
      </Router>
  );
}

export default App;
