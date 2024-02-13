import React from 'react';

import styles from './KeyValueComponent.module.scss';

interface KeyValueComponentProps {
  name: string;
  value: string;
  color?: string;
}

const KeyValueComponent: React.FC<KeyValueComponentProps> = ({
  name,
  value,
  color,
}) => {
  const containerStyle = {
    backgroundColor: color || 'transparent', // Use provided color or default to transparent
  };

  return (
    <div className={styles.keyValueContainer} style={containerStyle}>
      <strong className={styles.key}>{name}:</strong>
      <span className={styles.value}>{value}</span>
    </div>
  );
};

export default KeyValueComponent;
