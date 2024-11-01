'use client';

import Button from '@/components/button';
import Navbar from '@/components/navbar';

const Testing = () => {
  const onClick = () => {
    console.log('first');
  };
  return (
    <>
      <h1>Unit and Snapshot testing</h1>
      <Navbar />
      <Button label="Click me!" onClick={onClick} />
    </>
  );
};

export default Testing;
