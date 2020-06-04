import React from 'react';
import PropTypes from 'prop-types';
import styles from './Stats.module.css';

const Stats = ({followers, views, likes}) => {
  const listClass = [styles.stats];
  const labelClass = [styles.label];
  const quantityClass = [styles.quantity];
  return (
  <ul className={listClass.join(' ')}>
  <li>
    <span className={labelClass.join(' ')}>Followers</span>
    <span className={quantityClass.join(' ')}>{followers}</span>
  </li>
  <li>
    <span className={labelClass.join(' ')}>Views</span>
    <span className={quantityClass.join(' ')}>{views}</span>
  </li>
  <li>
    <span className={labelClass.join(' ')}>Likes</span>
    <span className={quantityClass.join(' ')}>{likes}</span>
  </li>
</ul>
)};

Stats.propTypes = {
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
}

export default Stats;