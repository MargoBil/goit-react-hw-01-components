import React from 'react';
import PropTypes from 'prop-types';

import s from './FriendListItem.module.css';

const FriendListItem = ({avatar, name, isOnline}) => {
  const statusClass = isOnline ? s.online : s.offline;
  return (
    <li className={s.item}>
      <span className={statusClass}>{isOnline}</span>
      <img className={s.avatar} src={avatar} alt="avatar" width="48" />
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
