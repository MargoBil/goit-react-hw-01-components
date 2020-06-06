import React from 'react';
import PropTypes from 'prop-types';
import s from './FriendListItem.module.css';

const FriendListItem = ({avatar, name, isOnline}) => {
  const itemClass = [s.item];
  const statusOnline = [s.online];
  const statusOffline = [s.offline];
  const statusClass = isOnline ? statusOnline : statusOffline;
  const avatarClass = [s.avatar];

  return (
    <li className={itemClass}>
      <span className={statusClass}>{isOnline}</span>
      <img
        className={avatarClass}
        src={avatar}
        alt="avatar"
        width="48"
      />
      <p className="name">{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
