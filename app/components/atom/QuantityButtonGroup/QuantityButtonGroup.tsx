import { useState } from 'react';
import './quantityButtonGroup.css';

type QuantityButtonGroupType = {
  small?: boolean;
  initValue: string;
  onIncrement: () => void;
  onDecrement: (value: string) => void;
  onInputChange: (value: string) => void;
};

const QuantityButtonGroup = ({
  small,
  initValue,
  onIncrement,
  onDecrement,
  onInputChange,
}: QuantityButtonGroupType) => {
  const [value, setValue] = useState(initValue);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;

    const numToInteger = newValue ? parseInt(event.target.value) : 0;

    setValue(numToInteger.toString());
  };

  const incrementCount = () => {
    const val = value ? +value : 0;
    const newVal = val + 1;

    setValue(newVal.toString());
    onIncrement();
  };

  const decrementCount = () => {
    const val = value ? +value : 0;
    const newVal = val ? val - 1 : 0;

    setValue(newVal.toString());
    onDecrement(newVal.toString());
  };

  return (
    <div className='flex items-center buttonGroupContainer'>
      <button
        className='bg-gray-200 p-3 rounded-full hover:bg-gray-300'
        onClick={decrementCount}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width={small ? '16' : '20'}
          height={small ? '16' : '20'}
          viewBox='0 0 24 24'
          fill='none'
          stroke='var(--color-primary)'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <line x1='5' y1='12' x2='19' y2='12'></line>
        </svg>
      </button>
      <input
        type='number'
        min={0}
        step={1}
        pattern='[0-100]'
        value={value}
        onChange={handleChange}
        onBlur={(event) => onInputChange(event.target.value)}
        className={`border border-gray-200 mx-1 rounded-full  text-center ${
          small ? 'w-10 h-10' : 'w-11 h-11'
        } no-arrows`}
      />

      <button
        onClick={incrementCount}
        className='bg-gray-200 p-3 rounded-full hover:bg-gray-300'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width={small ? '16' : '20'}
          height={small ? '16' : '20'}
          viewBox='0 0 24 24'
          fill='none'
          stroke='var(--color-primary)'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <line x1='12' y1='5' x2='12' y2='19'></line>
          <line x1='5' y1='12' x2='19' y2='12'></line>
        </svg>
      </button>
    </div>
  );
};

export default QuantityButtonGroup;
