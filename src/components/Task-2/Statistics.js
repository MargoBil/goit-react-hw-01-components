import React from 'react';
import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

const Statistics = ({title, stats}) => {
  const sectionClass = [styles.statistics];
  const titleClass = [styles.title];
  const listClass = [styles.list];
  const itemClass = [styles.item];
  const labelClass = [styles.label];
  const percentage = [styles.percentage];
  return (
    <section className={sectionClass.join(' ')}>
      {title && <h2 className={titleClass.join(' ')}>{title}</h2>}
      <ul className={listClass.join(' ')}>
        {stats.map (item => (
          <li key={item.id} className={itemClass.join(' ')}>
            <span className={labelClass.join(' ')}>{item.label}</span>
            <span className={percentage.join(' ')}>{item.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.defaultProps = {
  title: ' '
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.string.isRequired, label: PropTypes.string.isRequired, percentage: PropTypes.number.isRequired})).isRequired,
};

export default Statistics;
