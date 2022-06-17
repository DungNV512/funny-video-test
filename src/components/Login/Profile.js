import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { selectUser } from '../../selector/auth/selectAuth';
import { logout } from '../../actions';

const Profile = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const onShare = () => {
    history.push('/share');
  };

  const onLogout = () => {
    dispatch(logout());
    history.push('/');
  };

  return (
    <div className="profile">
      <span>
        Welcome <b>{user.email}</b>
      </span>
      <button onClick={onShare} className="btn">Share a movie</button>
      <button onClick={onLogout} className="btn btn-logout">Logout</button>
    </div>
  );
};

export default Profile;
