import React, { useState } from 'react';

const KeypadAndInputForm = () => {
  const initialValues = [
    '1000', '2000', '3000',
    '9000', '5000', '6000',
    '7000', '8000', '90000'
  ];

  const [selectedValue, setSelectedValue] = useState('');

  const handleInputChange = (value) => {
    setSelectedValue(value);
  };

  const handleDisplayedInputChange = (event) => {
    const newValue = event.target.value;
    setSelectedValue(newValue);
  };

  const isInitialValue = initialValues.includes(selectedValue);

  return (
    <div className="grid grid-cols-3 gap-2">
      {initialValues.map((value, index) => (
        <input
          key={index}
          className={`p-2 text-center ${selectedValue === value ? 'bg-gray-300' : 'bg-gray-100'}`}
          type="text"
          value={value}
          readOnly
          onClick={() => handleInputChange(value)}
        />
      ))}

      {/* Displayed form */}
      <div className="mt-4">
        <h2 className="text-xl font-bold">Selected Value</h2>
        <input
          className={`p-2 text-center ${isInitialValue ? 'bg-gray-300' : 'bg-gray-200'} rounded-md`}
          type="text"
          value={selectedValue}
          onChange={handleDisplayedInputChange}
        />
      </div>
    </div>
  );
};

export default KeypadAndInputForm;
