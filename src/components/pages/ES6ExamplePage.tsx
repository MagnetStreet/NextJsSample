'use client';
import * as React from 'react';

import { variableExample } from '@/utils/shared/Es6Examples';

const ES6ExamplePage: React.FC = () => {
  // As clean Up
  React.useEffect(() => {
    console.log('Component did mount ==========');
    /**
     * Example arrow function example with example for LEt & const usage
     * **/
    variableExample();

    /**
     * Example of This binding
     * **/
    function functionExample() {
      console.log('Inside functionExample:');
      //console.log('Value of this:', this); // We will even get a ESlint error here
    }
    const arrowFunctionExample = () => {
      console.log('Inside arrowFunctionExample:');
      console.log('Value of this:', this);
    };

    // Creating an object to demonstrate context
    const obj = {
      property: 'value',
      oldway: functionExample,
      arrowWay: arrowFunctionExample,
    };

    // Invoking methods
    obj.oldway(); // functionExample - Value of 'this' is the obj object
    obj.arrowWay(); // arrowFunctionExample - Value of 'this' is the global object (window in browsers, global in Node.js)
  }, []);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      Hello World
      {/* <TopLevelComponent /> */}
      {/* <DataFetchingComponent /> */}
      {/* <PromiseAllComponent /> */}
    </div>
  );
};

export default ES6ExamplePage;
