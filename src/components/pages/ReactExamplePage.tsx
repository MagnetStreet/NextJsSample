'use client';
import * as React from 'react';

import CounterParent from '@/components/shared/CounterDisplay/Counter';

const ReactExamplePage: React.FC = () => {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      {/* <LifeCycleComponent /> */}
      {/* <StateComponent init={2} name='alonso' /> */}
      {/* <HooksComponent /> */}
      {/* <CustomHooks /> */}
      <CounterParent />
    </div>
  );
};

export default ReactExamplePage;
