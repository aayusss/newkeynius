import React, { useEffect } from 'react'
import { BrowserRouter,Switch,Route } from 'react-router-dom'
import ExitFestival from './Keynius/ExitFestival'
import Login from './Keynius/Login'
import LockerRental from './Keynius/LockerRental'
import Configuration from './Keynius/Configuration'
import WebConfiguration from './Keynius/WebConfiguration'
import CreateAccount from './Keynius/CreateAccount'
import { auth } from './firebase/firebase'
import { useDispatch } from 'react-redux'
import { setUser } from './Redux/ActionCreator'
import Navbar from './Keynius/Navbar'
import Logout from './Keynius/Logout'


const App = () => {
  const dispatch= useDispatch();
  
  useEffect(()=>{
    auth.onAuthStateChanged((authUser)=>{
      if(authUser){
        dispatch(setUser(authUser))
      } else {
        dispatch(setUser(null));
      }
    })
  },[dispatch])
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/Login" component={Login} />
          <Logout exact path="/" component={Configuration} />
          <Route exact path="/LockerRental" component={LockerRental} />
          <Route exact path="/WebConfiguration" component={WebConfiguration} />
          <Route exact path="/ExitFestival" component={ExitFestival} />
          <Route exact path="/register" component={CreateAccount} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App
