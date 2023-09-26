import React from 'react';
// import PropTypes from 'prop-types';
import css from './Buttons.module.css';

const Controls = ({ onIncreaseGood, onIncreaseNeutral, onIncreaseBad }) => {
  return (
    <div className={css.buttonGroup}>
      <button className={css.button} type="button" onClick={onIncreaseGood}>
        Good
      </button>
      <button className={css.button} type="button" onClick={onIncreaseNeutral}>
        Neutral
      </button>
      <button className={css.button} type="button" onClick={onIncreaseBad}>
        Bad
      </button>
    </div>
    
  );
};
export default Controls;
