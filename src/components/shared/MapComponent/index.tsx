import React, { useEffect, useState } from 'react';

import KeyValueComponent from './KeyValueComponent';

const TopLevelComponent: React.FC = () => {
  // Array of objects representing key-value pairs
  const [attributes, setAttributes] = useState([
    { name: 'Color', value: 'Blue', color: '#3498db' },
    { name: 'Size', value: 'Medium', color: '#2ecc71' },
    { name: 'Type', value: 'Shirt', color: '#e74c3c' },
    { name: 'Brand', value: 'Nike', color: '#f39c12' },
  ]);

  // Filtered attributes based on user input
  const [filteredAttributes, setFilteredAttributes] = useState(attributes);
  const [filter, setFilter] = useState('');

  // Component Did Mount
  useEffect(() => {
    //TODO 3) Reduce Example
    const numbers = [1, 2, 3, 4, 5];
    // Using reduce to calculate the sum of numbers
    const sum = numbers.reduce(
      (accumulator, currentValue) => accumulator + currentValue, // Note that I can have a "Simplier" syntax with out the {}
      0
    );
    //console.log('Sum of numbers:', sum); // Output: Sum of numbers: 15
  }, []);

  // Update filtered attributes when filter changes
  useEffect(() => {
    //TODO 2) Filter Example
    setFilteredAttributes(
      attributes.filter((attr) =>
        attr.name.toLowerCase().startsWith(filter.toLowerCase())
      )
    );
  }, [filter]);

  // Function to handle input change
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value);
  };

  // Render top-level component
  return (
    <div>
      <input
        type='text'
        placeholder='Filter attributes by name...'
        value={filter}
        onChange={handleInputChange}
      />

      <h2>Filtered Attributes:</h2>
      {/* 
        //TODO 1) Map Example 
        VERY VERY IMPORTANT ALWAYS INCLUDE THE KEY WHEN RENDERING MAPED JSX ELEMENTS
        the key prop when rendering dynamically generated lists in React is essential for optimizing performance,
         maintaining component state, and ensuring correct rendering and updates of the UI.
      */}
      {filteredAttributes.map((attr, index) => (
        <KeyValueComponent
          key={index} // Once more ESlint will help us
          name={attr.name}
          value={attr.value}
          color={attr.color}
        />
      ))}
    </div>
  );
};

export default TopLevelComponent;
