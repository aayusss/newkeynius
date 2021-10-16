import React from 'react'
import Redirect from './Redirect';
import { Route } from 'react-router';
import { useSelector } from 'react-redux';

const Logout = ({children,...rest}) => {
    const {currentUser}=useSelector((state)=>state.user)
    return currentUser?<Route {...rest}/>:<Redirect/>;
};

export default Logout
