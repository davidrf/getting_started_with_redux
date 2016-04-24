import React from 'react';

const Counter = props => {
  const { count, onPlusButtonClick, onMinusButtonClick } = props;

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={onPlusButtonClick}>+</button>
      <button onClick={onMinusButtonClick}>-</button>
    </div>
  );
};

export default Counter;
