'use client';

import { useAppDispatch, useAppSelector } from '@/store';
import { addOne, initCounterState, substractOne } from '@/store/counter/counterSlice';
import { useEffect } from 'react';

interface Props {
  value?: number;
}

const getApiCounter = async (): Promise<number> => {
  const response = await fetch('/api/counter');
  const data = await response.json();
  return data.count;
}

export const CartCounter = ({ value = 0 }: Props) => {

  const count = useAppSelector((state) => state.counter.count);
  const dispatch = useAppDispatch();

  useEffect(() => {
    getApiCounter().then((apiCount) => {
      dispatch(initCounterState(apiCount))
    });
  }, []);

  return (
    <>
      <span className="text-9xl">{count}</span>

      <div className="flex mt-4">
        <button
          onClick={() => dispatch(addOne())}
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-25 mr-2"
        >
          +1
        </button>

        <button
          onClick={() => dispatch(substractOne())}
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-25 mr-2"
        >
          -1
        </button>
      </div>
    </>
  )
}
