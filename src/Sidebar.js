import React from 'react';
import { SidebarData } from './SidebarData';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const Sidebar = ({ sidebarMenu, sidebarHandler }) => {
  return (
    <Modal
      open={sidebarMenu}
      close={sidebarHandler}
      style={{
        backgroundColor: 'rgba()0,0,0,0.5',
      }}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={sidebarMenu}>
        <div
          sidebarMenu={sidebarMenu}
          sidebarHandler={sidebarHandler}
          className={`sidebar ${sidebarMenu && 'active'}`}
          onClick={sidebarHandler}
        >
          <div className='sidebar__googleLogo'>
            <img
              src='https://1000logos.net/wp-content/uploads/2021/05/Google-logo.png'
              alt='google logo'
            />
          </div>
          <ul className='sidebar__list'>
            <li className='sidebar__menuLinks'>
              {SidebarData.map((item, index) => (
                <li key={index}>
                  <Link to={item.path} className='sidebar__menuLink'>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              ))}
            </li>
          </ul>
        </div>
      </Fade>
    </Modal>
  );
};

export default Sidebar;
