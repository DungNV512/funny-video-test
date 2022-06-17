import React from 'react';
import { useHistory } from 'react-router-dom';
import Login from '../Login';
import IconHome from '../../assets/home-svgrepo-com.svg';

import './style.css';

const Header = () => {
  const history = useHistory();
  const handleOnclick = () => {
    history.push('/');
  };
  return (
    <div className="header">
      <a href="/">
        <img
          src={IconHome}
          alt="logo"
          height={48}
          width={48}
          style={{ margin: '0 2em', cursor: 'pointer' }}
          onClick={handleOnclick}
        />
      </a>
      <Login />
    </div>
  );
};

export default Header;
