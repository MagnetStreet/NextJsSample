import React, { useEffect, useState } from 'react';

const DataFetchingComponent = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    //Note that we can't make the useEffect Async function directly
    const fetchData = async () => {
      setIsLoading(true);
      try {
        // Simulate fetching data from an API endpoint
        //TODO AWAIT ASYNC notations
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/posts/2'
        );
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError('An unknown error occurred');
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array to run effect only once on component mount

  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error: {error}</div>
      ) : data ? (
        <div>
          <h2>Data fetched successfully:</h2>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      ) : null}
    </div>
  );
};

export default DataFetchingComponent;
