import React from 'react';
import {
  BrowserRouter as Router, 
  Switch, 
  Route,
  } from 'react-router-dom';
import HomePage from "../pages/HomePage";
import CashPage from "../pages/CashPage";
import CustomerBill from "../pages/CustomerBillPage";  
import MarkNumberContext from "../context/MarkNumberContext";
import {useState} from 'react';

function App() {
  

  let markNumberList = [];

  for (let i = 1; i <= 20; i++) 
  {
      markNumberList.push(i);
  }
  
  const [markNumbers, setMarkNumbers]= useState(markNumberList)

  return (

      <Router>

        <MarkNumberContext.Provider value={{markNumbers, setMarkNumbers}}>
        
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
        
        </MarkNumberContext.Provider> 
     
      </Router>

  );

}

export default App;
