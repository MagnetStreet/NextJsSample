import React from 'react';

const CounterDisplay: React.FC<{ counter: any }> = ({ counter }) => {
  const { increment, decrement, reset } = counter;

  return (
    <div>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default CounterDisplay;
