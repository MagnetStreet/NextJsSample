import React from 'react';

import useCounter from '@/hooks/useCounter';

import CounterDisplay from '@/components/shared/CounterDisplay/CounterDisplay';
import CounterIncrement from '@/components/shared/CounterDisplay/CounterIncrement';

const CounterParent: React.FC = () => {
  const counter = useCounter(0, 1);
  // This approach has some issues and is only meant to be present as a example
  // In the future we will use Zustand or any other state management library to share states without prop drilling

  return (
    <div>
      <CounterDisplay counter={counter} />
      <CounterIncrement counter={counter} />
    </div>
  );
};

export default CounterParent;
