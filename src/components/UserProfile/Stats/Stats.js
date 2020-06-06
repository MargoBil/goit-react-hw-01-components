import React from 'react';
import PropTypes from 'prop-types';
import s from './Stats.module.css';

const Stats = ({followers, views, likes}) => {
  const listClass = [s.stats];
  const labelClass = [s.label];
  const quantityClass = [s.quantity];
  return (
  <ul className={listClass}>
  <li>
    <span className={labelClass}>Followers</span>
    <span className={quantityClass}>{followers}</span>
  </li>
  <li>
    <span className={labelClass}>Views</span>
    <span className={quantityClass}>{views}</span>
  </li>
  <li>
    <span className={labelClass}>Likes</span>
    <span className={quantityClass}>{likes}</span>
  </li>
</ul>
)};

Stats.propTypes = {
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
}

export default Stats;