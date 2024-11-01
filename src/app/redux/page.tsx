'use client';

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '@/store';

import { decrement, increment } from '../../store/slices/counterSlice';

export default function Home() {
  //useSelector gets the state from store
  const count = useSelector((state: RootState) => state.counter.value); // Access the counter state
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  //useDispatch updates the store with the state from a component, as defined by your logic inside the counterslice.js
  const dispatch = useDispatch();

  return (
    isClient && (
      <div>
        <h1>Counter: {count}</h1> {/* Display the counter state */}
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
    )
  );
}
