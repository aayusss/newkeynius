import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from './Navbar'
import '../style/Configuration.css';
import Sidebar from './Sidebar'


const Configuration = () => {
  
  return (
    <>
      <Sidebar />
      <Navbar />
      <div className="container_config">
        <div className="header">
          <h4 className="header_4">Configuration</h4>
          <hr />
        </div>
        <p className="paragraph">Scenario</p>
        <div className="box_grid grid_box1">
          <div className="box">
            <p className="paragraph1">Assigned</p>
            <a href="#" className="list">
              CONFIGURE <span className="span_tag">{' > '}</span>
            </a>
          </div>
          <div className="box">
            <p className="paragraph1">Flex</p>
            <a href="#" className="list">
              CONFIGURE <span className="span_tag">{' > '}</span>
            </a>
          </div>
          <div className="box">
            <p className="paragraph1">Flex anonymous</p>
            <a href="#" className="list">
              CONFIGURE <span className="span_tag">{' > '}</span>
            </a>
          </div>
          <div className="box">
            <p className="paragraph1">Locker rental</p>
            <NavLink
              to="/LockerRental"
              activeClassName="active"
              className="list"
            >
              CONFIGURE <span className="span_tag">{' > '}</span>
            </NavLink>
          </div>
        </div>
        <div className="tag_name">
          <p>Customer</p>
          <p>Site</p>
          <p>Lockerwall</p>
        </div>
        <div className="box_grid grid_box">
          <div className="box">
            <p className="paragraph1">Customer</p>
            <a href="#" className="list">
              CONFIGURE <span className="span_tag">{' > '}</span>
            </a>
          </div>
          <div className="box">
            <p className="paragraph1">Site</p>
            <a href="#" className="list">
              CONFIGURE <span className="span_tag">{' > '}</span>
            </a>
          </div>
          <div className="box">
            <p className="paragraph1">Lockerwall</p>
            <a href="#" className="list">
              CONFIGURE <span className="span_tag">{' > '}</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Configuration;
