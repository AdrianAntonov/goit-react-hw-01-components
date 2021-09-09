import React from 'react';
import PropTypes from 'prop-types';
import stats from '../statistical-data.json';
import StatisticalData from '../StatisticalData/StatisticalData';
import Title from '../Title/Title';
import style from './Statistics.module.css';

function Statistics() {
  return (
    <div className={style.stats}>
      <Title title="Upload stats" />
      <StatisticalData stats={stats} />
    </div>
  );
}

Statistics.propTypes = {
  stats: PropTypes.array,
};

export default Statistics;
