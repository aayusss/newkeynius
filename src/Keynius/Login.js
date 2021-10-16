
import React, { useEffect, useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import '../style/Login.css';
import { LoginInitiate } from '../Redux/ActionCreator';
import { NavLink } from 'react-router-dom';

const Login = () => {

  const [state,setState]=useState({
    email:'',
    password:'',
  })
  const {email,password}=state;

  const dispatch=useDispatch();
  const {currentUser} =useSelector((state)=>state.user)
  const history=useHistory();
  
  useEffect(()=>{
    if(currentUser){
      history.push('/')
    }
  },[currentUser,history])


  const onSubmitHandler = (e) => {
    e.preventDefault();
    if(!email||!password){
      return
    }
    dispatch(LoginInitiate(email,password));
    setState({email:"",password:""})
  }
    

  const handleChange = (e) => {
    const {name,value}=e.target;
    setState({...state,[name]:value});
  };

  return (
    <div className="new_login">
      <h1 className="header_1">Keynius</h1>
      <form onSubmit={onSubmitHandler}>
        <div className="login_page">
          <input
            className="input input3"
            type="submit"
            value="login with email/facebook"
          />
          <h4 className="header">Or</h4>
          <input
            className="input input1"
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            placeholder="email"
            required
          />
          <input
            className="input input2"
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            placeholder="password"
            required
          />
          <button type="submit" className="btn">
            login
          </button>
          <NavLink activeClassName="active" to="/register">
          <button className="btn button">Create an account</button>
          </NavLink>
        </div>
      </form>
    </div>
  );
};

export default Login;
