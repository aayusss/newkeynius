import React from 'react';
import '../style/LockerRental.css';
import '../style/ExitFestival.css';
import image from '../image/image.png';
import images from '../image/images.png'
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import { NavLink } from 'react-router-dom';

const ExitFestival = () => {
 
  return (
    <>
      <Sidebar />
      <Navbar />
      <div className="container2">
        <div className="locker rental">
          <div className="horiz-div">
            <h2 className="header">
              <span>&#x2190;</span>Exit festival
            </h2>
            <ul className="horiz-list">
              <li className="list1">Configuration</li>
              <li>Locker rental</li>
              <li>Configuration name</li>
            </ul>
          </div>
          <NavLink activeClassName="active" to="/WebConfiguration">
            <button className="btn btn-primary">save</button>
          </NavLink>
        </div>
        <hr />
        <div className="festival">
          <h3>Mobile web configuration</h3>
          <select name="" id="" className="level1 select">
            <option>Select site</option>
          </select>
          <select name="" id="" className="level2 select">
            <option>Select lockerwall</option>
          </select>
        </div>
        <div className="head_class">
          <div className="my_class">
            <div className="website">
              <li className="list">Is the website online?</li>
              <label className="label label2">
                Yes
                <input className="check" type="checkbox" name="" id="" />
                No
              </label>
            </div>
            <div className="website">
              <li className="list">What if there more price per size?</li>
              <div>
                <label className="radio">
                  <input
                    className="input_radio"
                    type="radio"
                    name=""
                    id="leave"
                  />
                  Choose cheapest
                </label>
                <br />
                <label className="radio">
                  <input
                    className="input_radio"
                    type="radio"
                    name=""
                    id="pay_extra"
                  />
                  Choose the most expensive
                </label>
              </div>
            </div>
            <div className="website">
              <li className="list">Price model</li>
              <div>
                <label className="radio1">
                  <input
                    className="input_radio"
                    type="radio"
                    name=""
                    id="leave"
                  />
                  Per hour
                </label>
                <br />
                <label className="radio1">
                  <input
                    className="input_radio"
                    type="radio"
                    name=""
                    id="pay_extra"
                  />
                  Fixed
                </label>
              </div>
            </div>
          </div>
          <div className="block">
            <h4>Price per hour:</h4>
            <ul className="order">
              <li className="list">
                Size S <span className="span1">10$</span>
              </li>
              <li className="list">
                Size M <span className="span2">15$</span>
              </li>
              <li className="list">
                Size L <span className="span3">20$</span>
              </li>
              <li className="list">
                Size XL <span className="span4">25$</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="head_class">
          <div className="website">
            <li className="list">
              Is the user allowed to reserve the locker in future?
            </li>
            <label className="label label1">
              Yes
              <input className="check" type="checkbox" name="" id="" />
              No
            </label>
          </div>
        </div>
        <div className="image">
          <div className="logo">
            <h4 className="header">Upload logo of your company</h4>
            <div className="border">
              <img className="img" src={image} alt="upload image" />
              <br />
              <button className="btn_btn">Upload image</button>
              <p>Or drag and drop here</p>
            </div>
          </div>
          <div className="logo">
            <h4 className="header">Upload background for the app</h4>
            <div className="border">
              <img className="img" src={image} alt="upload image" />
              <br />
              <button className="btn_btn">Upload image</button>
              <p>Or drag and drop here</p>
            </div>
          </div>
          <div className="logo">
            <h4 className="header">Generate QR code</h4>
            <div className="border border_1">
              <img className="img img1" src={images} alt="upload image" />
              <br />
              <button className="btn_btn btn">Generate</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExitFestival;
