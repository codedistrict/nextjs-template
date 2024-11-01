import React from 'react';

const Button = ({ label, onClick }: { label: string; onClick: any }) => {
  return (
    <>
      {/* <h1>abc</h1> */}
      <button onClick={onClick} className="custom-button">
        {label}
      </button>
    </>
  );
};

export default Button;

export const addNumbers = (a: number, b: number) => {
  return a + b;
};
