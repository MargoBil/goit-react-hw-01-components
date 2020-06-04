import React from 'react';
import PropTypes from 'prop-types';
import FriendListItem from './../FriendListItem/FriendListItem.js';

const FriendList = ({friends}) => (
  <ul className="friend-list">
    {friends.map (friend => (
      <FriendListItem key = {(friend.id).toString()}
        avatar={friend.avatar}
        name={friend.name}
        isOnline={friend.isOnline}
      />
    ))}
  </ul>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number.isRequired, name: PropTypes.string.isRequired, avatar: PropTypes.string.isRequired, isOnline: PropTypes.bool.isRequired})).isRequired
};


export default FriendList;
