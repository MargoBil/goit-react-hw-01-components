import React from 'react';
import PropTypes from 'prop-types';

import statisticalData from './../../data/statistical-data.json';
import s from './Statistics.module.css';

const Statistics = ({title}) => {
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>{title = "UPLOAD STATS"}</h2>}
      <ul className={s.list}>
        {statisticalData.map (item => (
          <li key={item.id} className={s.item}>
            <span className={s.label}>{item.label}</span>
            <span className={s.percentage}>{item.percentage}%</span>
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
