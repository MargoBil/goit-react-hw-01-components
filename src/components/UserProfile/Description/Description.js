import React from 'react';
import PropTypes from 'prop-types';
import s from './Description.module.css';

const Descriptions = ({name, tag, location, avatar}) => {
  const divClass = [s.description];
  const imgClass = [s.avatar];
  const nameClass = [s.name];
  const tagClass = [s.tag];
  const locationClass = [s.location];
  return (
    <div className={divClass}>
      <img src={avatar} alt="user avatar" className={imgClass} />
      <p className={nameClass}>{name}</p>
      <p className={tagClass}>@{tag}</p>
      <p className={locationClass}>{location}</p>
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
