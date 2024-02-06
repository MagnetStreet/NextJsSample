import React, { useEffect, useState } from 'react';

const HooksComponent: React.FC = () => {
  /* This is the new way of controlling state and effects using Hooks */

  const [count, setCount] = useState<number>(0);
  const [showMessage, setShowMessage] = useState<boolean>(false);
  const [fetchedData, setFetchedData] = useState<any>(null);

  // Effect with dependency
  useEffect(() => {
    console.log('Count has changed:', count);
  }, [count]);

  // As clean Up
  useEffect(() => {
    console.log('Component did mount');

    return () => {
      console.log('Component will unmount');
      // Cleanup logic goes here
    };
  }, []);

  // Effect without dependencies
  // Example to fecth Data from API or transform initial props etc
  useEffect(() => {
    console.log('Running at the same time tha component did mount');
    const fetchData = async () => {
      const response = await fetch('https://registry.npmjs.org/react/latest');
      const data = await response.json();
      console.log('Fetched data:', data);
      setFetchedData(data); // Save fetched data to state
    };
    fetchData();
  }, []);

  //Conditional
  useEffect(() => {
    //Usefull to react only if prop is not null or certain state when null or loading states
    if (fetchedData !== null) {
      console.log('Fetched data has updated:', fetchedData);
    }
  }, [fetchedData]);

  return (
    <div>
      <p>Count: {count}</p>
      {/* Notice the SetCount is the SetState Hook */}
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default HooksComponent;
