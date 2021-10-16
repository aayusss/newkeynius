import React from 'react';
import '../style/LockerRental.css';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import { NavLink } from 'react-router-dom';

const LockerRental = () => {
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
          <NavLink activeClassName="active" to='/'>
            <button className="btn btn-primary">save</button>
          </NavLink>
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
                <NavLink activeClassName="active" to="/WebConfiguration">
                  3. Web configuration
                </NavLink>
              </li>
            </ol>
          </div>
          <div className="locker_list">
            <h2 className="header2">Locker rental</h2>
            <ol>
              <div className="center">
                <li className="list2 list4">
                  Is there a default usage duration?
                </li>
                <label className="label label_days">
                  Yes
                  <input
                    className="check"
                    type="checkbox"
                    name=""
                    id="checkbox"
                  />
                </label>
                No
                <input
                  className="days hours"
                  type="text"
                  name=""
                  placeholder="Enter days"
                />
                <input
                  className="days hours"
                  type="text"
                  name=""
                  placeholder="Enter hours"
                />
              </div>
              <div className="center">
                <li className="list2 list5">Is there an endtime?</li>
                <label className="label label_select">
                  Yes
                  <input
                    className="check"
                    type="checkbox"
                    name=""
                    id="checkbox"
                  />
                  No
                </label>
                <select className="select">
                  <option value="">choose time</option>
                </select>
              </div>
              <div className="center">
                <li className="list2 list6">
                  Is there maximum usage time of locker?
                </li>
                <label className="label label_1">
                  Yes
                  <input
                    className="check"
                    type="checkbox"
                    name=""
                    id="checkbox"
                  />
                  No
                </label>
                <input
                  type="text"
                  name=""
                  className="days"
                  placeholder="Enter days"
                />
                <input
                  type="text"
                  name=""
                  className="days"
                  placeholder="Enter hours"
                />
              </div>
              <div className="center">
                <li className="list2 list7">What is the Grey time period? </li>
                <input
                  className="minute minute_1"
                  type="text"
                  name=""
                  id="minutes"
                  placeholder="Enter minutes"
                />
              </div>

              <div className="center">
                <li className="list2 list8">
                  what is the reservation margin on top of the reservation?
                </li>
                <input
                  className="minute minute_2"
                  type="text"
                  name=""
                  id="reserve_minutes"
                  placeholder="Enter minutes"
                />
              </div>

              <div className="center">
                <li className="list2 list9">
                  what happens if the user did not leave the locker on time?
                </li>
                <label className="label radio">
                  <input
                    className="input_radio"
                    type="radio"
                    name=""
                    id="leave"
                  />
                  Only leave available
                </label>
                <br />
                <label className="label radio_1">
                  <input
                    className="input_radio"
                    type="radio"
                    name=""
                    id="pay_extra"
                  />
                  User has to pay extra
                </label>
              </div>

              <div className="center">
                <li className="list2 list10">
                  After how much time user has to pay extra?
                </li>
                <input
                  className="minute new"
                  type="text"
                  name=""
                  id="time"
                  placeholder="Enter minutes"
                />
              </div>
              <div className="center">
                <li className="list2 list11">
                  Is there a time that all users will be deassigned from the
                  locker?
                </li>
                <label className="last_label">
                  Yes
                  <input
                    className="check"
                    type="checkbox"
                    name=""
                    id="checkbox"
                  />
                  No
                </label>
                <select className="select one">
                  <option value="">choose time</option>
                </select>
              </div>
              <div className="center">
                <li className="list2 list12">What is the currency?</li>
                <select className="select two">
                  <option value="">choose currency</option>
                </select>
              </div>
              <div className="center">
                <li className="list2 list13">
                  What is the minimum rental time?
                </li>
                <input
                  className="minute old_new"
                  type="number"
                  name=""
                  id=""
                  placeholder="Enter minutes"
                />
              </div>
            </ol>
          </div>
        </div>
      </div>
    </>
  );
};

export default LockerRental;
