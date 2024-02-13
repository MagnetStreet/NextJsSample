import React from 'react';

const WrapperComponent: React.FC = ({ children }: any) => {
  /* This is the new way of controlling state and effects using Hooks */

  return <div style={{ margin: '20px' }}>{children}</div>;
};

export default WrapperComponent;
