import React from 'react';
import { NavLink } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import GroupIcon from '@material-ui/icons/Group';
import WidgetsIcon from '@material-ui/icons/Widgets';
import CollectionsIcon from '@material-ui/icons/Collections';
import ReceiptIcon from '@material-ui/icons/Receipt';
import SettingsIcon from '@material-ui/icons/Settings';
import PermDataSettingIcon from '@material-ui/icons/PermDataSetting';
// import '../App.css';
import '../style/Sidebar.css';

const Sidebar = () => {
  return (
    <div className="container">
      <ul className="u_list">
        <li>
          <HomeIcon className="Icon" color="primary" />
          <a href="#" className="sidebar_anchor">
            Dashboard
          </a>
        </li>
        <li>
          <GroupIcon className="Icon" color="primary" />
          <a href="#" className="sidebar_anchor">
            User management
          </a>
        </li>
        <li>
          <WidgetsIcon className="Icon" color="primary" />
          <a href="#" className="sidebar_anchor">
            Locker management
          </a>
        </li>
        <li>
          <CollectionsIcon className="Icon" color="primary" />
          <a href="#" className="sidebar_anchor">
            Product management
          </a>
        </li>
        <li>
          <ReceiptIcon className="Icon" color="primary" />
          <a href="#" className="sidebar_anchor">
            Transactions
          </a>
        </li>
        <li>
          <PermDataSettingIcon className="Icon" color="primary" />
          <NavLink activeClassName='active' to='/' className="sidebar_anchor">
            Configuration
          </NavLink>
        </li>
        <li>
          <SettingsIcon className="Icon" color="primary" />
          <a href="#" className="sidebar_anchor">
            Settings
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
