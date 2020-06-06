import React from 'react';
import PropTypes from 'prop-types';
import styles from './FriendListItem.module.css';

const FriendListItem = ({avatar, name, isOnline}) => {
  const itemClass = [styles.item];
  const statusOnline = [styles.online];
  const statusOffline = [styles.offline];
  const statusClass = isOnline ? statusOnline : statusOffline;
  const avatarClass = [styles.avatar];

  return (
    <li className={itemClass.join (' ')}>
      <span className={statusClass.join (' ')}>{isOnline}</span>
      <img
        className={avatarClass.join (' ')}
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
