import React from 'react';
import PropTypes from 'prop-types';
import FriendListItem from './../FriendListItem/FriendListItem.js';
import styles from './FriendList.module.css';

const FriendList = ({friends}) => {
  const listClass = [styles.list];
  return (
  <ul className={listClass.join(' ')}>
    {friends.map (friend => (
      <FriendListItem key = {(friend.id).toString()}
        avatar={friend.avatar}
        name={friend.name}
        isOnline={friend.isOnline}
      />
    ))}
  </ul>
)};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number.isRequired, name: PropTypes.string.isRequired, avatar: PropTypes.string.isRequired, isOnline: PropTypes.bool.isRequired})).isRequired
};

export default FriendList;
