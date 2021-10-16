import React from 'react';
import '../style/Navbar.css';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { LogoutInitiate } from '../Redux/ActionCreator';

const Navbar = () => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const handleLogout = (e) => {
    if (currentUser) {
      dispatch(LogoutInitiate());
    }
    console.log(e)
  };
  return (
    <div className="container1">
      <h1 className="header">Keynius</h1>
      <div className="list">
        <a href="#" className="navbar_anchor">
          1
        </a>
        <a href="#" className="navbar_anchor">
          2
        </a>
        <a href="#" className="navbar_anchor">
          3
        </a>
        <button onClick={handleLogout} className="navbar_anchor">logout</button>
      </div>
    </div>
  );
};

export default Navbar;
