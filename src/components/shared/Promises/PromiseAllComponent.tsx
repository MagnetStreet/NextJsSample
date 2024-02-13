import React, { useEffect, useState } from 'react';

const PromiseAllComponent: React.FC = () => {
  const [dataArr, setDataArr] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [response1, response2, response3] = await Promise.all([
          fetch('https://jsonplaceholder.typicode.com/posts/1'),
          fetch('https://jsonplaceholder.typicode.com/posts/2'),
          fetch('https://jsonplaceholder.typicode.com/posts/3'),
        ]);

        if (!response1.ok || !response2.ok || !response3.ok) {
          throw new Error('Failed to fetch data');
        }

        const data1 = await response1.json();
        const data2 = await response2.json();
        const data3 = await response3.json();

        setDataArr([data1, data2, data3]);
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
  }, []);

  return (
    <div>
      {isLoading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
      {dataArr && dataArr.length > 0 && (
        <div>
          {dataArr.map((x, index) => (
            <div key={`data-fetch-${index}`}>
              {/* TODO  String interpolation Example `${varName} others strings ${anotherVar}`*/}
              <h2>Data Fetched Successfully:</h2>
              <div>
                Data {index}: {JSON.stringify(x)}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PromiseAllComponent;
