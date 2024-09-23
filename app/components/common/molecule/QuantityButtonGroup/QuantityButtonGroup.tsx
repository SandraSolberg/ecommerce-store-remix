import { useState } from 'react';
import SVGIcon from '../../atom/SVGIcon/SVGIcon';
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
    <div className='flex items-center justify-center buttonGroupContainer'>
      <button
        className='bg-gray-200 p-3 rounded-full hover:bg-gray-300'
        onClick={decrementCount}
      >
        <SVGIcon height={small ? '12' : '20'} width={small ? '12' : '20'}>
          <line x1='5' y1='12' x2='19' y2='12'></line>
        </SVGIcon>
      </button>
      <input
        type='number'
        min={0}
        step={1}
        pattern='[0-100]'
        value={value}
        onChange={handleChange}
        onBlur={(event) => onInputChange(event.target.value)}
        className={`border border-gray-200 mx-1 rounded-full text-center ${
          small ? 'w-9 h-9' : 'w-11 h-11'
        } no-arrows`}
      />

      <button
        onClick={incrementCount}
        className='bg-gray-200 p-3 rounded-full hover:bg-gray-300'
      >
        <SVGIcon height={small ? '12' : '20'} width={small ? '12' : '20'}>
          <>
            <line x1='12' y1='5' x2='12' y2='19'></line>
            <line x1='5' y1='12' x2='19' y2='12'></line>
          </>
        </SVGIcon>
      </button>
    </div>
  );
};

export default QuantityButtonGroup;
