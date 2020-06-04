import React from 'react';
import PropTypes from 'prop-types';
import styles from './Description.module.css';

const Descriptions = ({name, tag, location, avatar}) => {
  const divClass = [styles.description];
  const imgClass = [styles.avatar];
  const nameClass = [styles.name];
  const tagClass = [styles.tag];
  const locationClass = [styles.location];
  return (
    <div className={divClass.join (' ')}>
      <img src={avatar} alt="user avatar" className={imgClass.join (' ')} />
      <p className={nameClass.join (' ')}>{name}</p>
      <p className={tagClass.join (' ')}>@{tag}</p>
      <p className={locationClass.join (' ')}>{location}</p>
    </div>
  );
};

Descriptions.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

export default Descriptions;
