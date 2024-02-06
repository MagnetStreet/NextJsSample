import { useState } from 'react';

const useCounter = (initialValue = 0, step = 1) => {
  const [count, setCount] = useState<number>(initialValue);

  const increment = () => {
    setCount((prevCount) => prevCount + step);
  };

  const decrement = () => {
    setCount((prevCount) => prevCount - step);
  };

  const reset = () => {
    setCount(initialValue);
  };

  return { count, increment, decrement, reset };
};

export default useCounter;
