import React from 'react';
import PropTypes from 'prop-types';

import statisticalData from './../../data/statistical-data.json';
import s from './Statistics.module.css';

const Statistics = ({title}) => {
  const sectionClass = [s.statistics];
  const titleClass = [s.title];
  const listClass = [s.list];
  const itemClass = [s.item];
  const labelClass = [s.label];
  const percentage = [s.percentage];
  return (
    <section className={sectionClass}>
      {title && <h2 className={titleClass}>{title = "UPLOAD STATS"}</h2>}
      <ul className={listClass}>
        {statisticalData.map (item => (
          <li key={item.id} className={itemClass}>
            <span className={labelClass}>{item.label}</span>
            <span className={percentage}>{item.percentage}%</span>
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
  title: PropTypes.string
};

export default Statistics;
