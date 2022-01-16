import React, { useEffect } from 'react';
// import { Router } from 'react-router';
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login';
import Payment from './Payment';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';

function App() {

  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // Will Only run Once When App Component id loaded.
    auth.onAuthStateChanged(
      authUser => {
        console.log("The User is:", authUser);

        if(authUser){
          //user just logged in / user was logged in
          dispatch({
            type: "SET_USER",
            user: authUser,
          })
        }else{
          // user logged out
          dispatch({
            type: "SET_USER",
            user: null,
          })
        }

      }
    )
  },[])

  return (
    <Router>
    <div className="App">
      <Switch>

       <Route path='/login'>
          <Login />
        </Route>
        
        <Route path='/checkout'>
          <Header />
          <Checkout />
        </Route>

        <Route path='/payment'>
          <Header />
          <Payment />
        </Route>

        <Route path='/'>
          <Header />
          <Home />
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
