import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import { NavLink } from 'react-router-dom';
import '../style/LockerRental.css';
import '../style/WebConfiguration.css';
import PopUp from './PopUp';
import axios from 'axios';

const WebConfiguration = () => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopUp = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const getData = async (id) => {
      const res = await axios.get(`api/EventConfiguration/${id}`);
      console.log(res.data);
    };
    getData();
  });
  return (
    <>
      <Sidebar />
      <Navbar />
      <div className="container2">
        <div className="locker rental">
          <div className="horiz-div">
            <h2 className="header">
              <span>&#x2190;</span>Locker rental
            </h2>
            <ul className="horiz-list">
              <li className="list1">Configuration</li>
              <li>Locker rental</li>
            </ul>
          </div>
          <div className="pop_up1">
            <button onClick={togglePopUp} className="btn btn-primary">
              Add configuration
            </button>
            {isOpen && (
              <PopUp
                content={
                  <div className="pop_up2">
                    <h4 className="h4_head">Add configuration</h4>
                    <div className="exit_box">
                      <p className="para_11">configuration name</p>
                      <b>Exit festival</b>
                    </div>
                    <NavLink activeClassName="active" to="/ExitFestival">
                      <button className="btn new_btn">save</button>
                    </NavLink>
                  </div>
                }
              />
            )}
          </div>
        </div>
        <hr />
        <div className="main_container">
          <div className="listing sideview">
            <ol className="order_list">
              <li className="list1 list">
                <NavLink activeClassName="active" to="/LockerRental">
                  1. General configuration
                </NavLink>
              </li>
              <li className="list2 list">
                <a href="#">2. Pricing overview</a>
              </li>
              <li className="list3 list">
                <a href="#">3. Web configuration</a>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </>
  );
};

export default WebConfiguration;
