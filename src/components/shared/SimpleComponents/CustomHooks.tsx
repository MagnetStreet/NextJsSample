import React from 'react';

import useScreenSize from '@/hooks/useScreenSize';

const ScreenSizeDisplay: React.FC = () => {
  const { isMobile, isTablet, isDesktop } = useScreenSize();

  return (
    <div>
      {isMobile && <p>Mobile View</p>}
      {isTablet && <p>Tablet View</p>}
      {isDesktop && <p>Desktop View</p>}
    </div>
  );
};

export default ScreenSizeDisplay;
