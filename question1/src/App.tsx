import { ChangeEventHandler, useCallback, useMemo, useState } from 'react';

import './App.css';
import { isFibonacci, isPrimeNumber } from './utils/commonUtil';

type OptionType = {
  value: string;
  label: string;
};

function App() {
  const [selected, setSelected] = useState<string>('prime');
  const [value, setValue] = useState<string>('');

  const options = useMemo<OptionType[]>(() => {
    return [
      { value: 'prime', label: 'isPrime' },
      { value: 'fibonacci', label: 'isFibonacci' },
    ];
  }, []);

  const calculate = useMemo<boolean>(() => {
    const number = +value < 0 ? 1 : Math.round(+value);
    switch (selected) {
      case 'prime':
        return isPrimeNumber(number);
      case 'fibonacci':
        return isFibonacci(number);
      default:
        return false;
    }
  }, [value, selected]);

  const handleChange = useCallback<ChangeEventHandler<HTMLInputElement>>((e) => {
    setValue(e.target.value);
  }, []);

  const handleSelect = useCallback<ChangeEventHandler<HTMLSelectElement>>((e) => {
    setSelected(e.target.value);
  }, []);

  return (
    <div className='container'>
      <div className='column'>
        <input type='number' value={value} onChange={handleChange} />
      </div>
      <div className='column'>
        <select value={selected} onChange={handleSelect}>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <div className='column'>{`${calculate}`}</div>
    </div>
  );
}

export default App;
