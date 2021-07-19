import React, { useState } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import AppsIcon from '@material-ui/icons/Apps';
import { Avatar, Tooltip } from '@material-ui/core';
import Search from '../components/Search';
import MenuIcon from '@material-ui/icons/Menu';
import Sidebar from '../Sidebar';

const Home = () => {
  const [sidebarMenu, setSidebarMenu] = useState(false);
  const sidebarHandler = () => {
    setSidebarMenu(!sidebarMenu);
  };
  return (
    <div className='home'>
      <div className='home__headerMenuButton'>
        <MenuIcon
          style={{ color: 'gray', fontSize: '2rem' }}
          onClick={sidebarHandler}
          className='sidebarMenuIcon'
        />
      </div>
      <Sidebar sidebarMenu={sidebarMenu} sidebarHandler={sidebarHandler} />
      <div className='home__header'>
        <Link to='gmail'>Gmail</Link>
        <Link to='images'>Images</Link>
        <Link to='/apps'>
          <Tooltip title='Google Apps'>
            <AppsIcon />
          </Tooltip>
        </Link>
        <Link to='/account'>
          <Tooltip title='Google Account'>
            <Avatar
              style={{
                backgroundColor: '#01579B',
                color: 'white',
                width: '2rem',
                height: '2rem',
              }}
            />
          </Tooltip>
        </Link>
      </div>

      <div className='home__bodyLogo'>
        <img
          src='https://1000logos.net/wp-content/uploads/2021/05/Google-logo.png'
          alt='google logo'
        />
      </div>

      <div className='home__body'>
        <div className='home__inputContainer'>
          <Search hideButtons={false} googleHomeInput={true} />
        </div>
      </div>
      <div className='home__footer'>
        <div className='home__footerFirst'>India</div>
        <div className='home__footerSecond'>
          <div className='footerLeft'>
            <Link to='/about'>About</Link>
            <Link to='/advertising'>Advertising</Link>
            <Link to='/business'>Business</Link>
            <Link to='/howsearchworks'>How Search Works</Link>
          </div>
          <div className='footerRight'>
            <Link to='privacy'>Privacy</Link>
            <Link to='terms'>Terms</Link>
            <Link to='settings'>Settings</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
