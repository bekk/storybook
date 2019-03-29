import React from 'react';
import { Checkbox } from './Checkbox';
import './RadioButtons.css';

interface IProps<T extends { label: string }> {
  selected: number;
  options: T[];
  onChange: (selected: number, option: T) => void;
  onDarkBackground?: boolean;
}

export function RadioButtons<T extends { label: string }>({
  selected,
  options,
  onChange,
  onDarkBackground,
}: IProps<T>) {
  return (
    <div className={'storybook-radiobuttons'}>
      {options.map((x, i) => (
        <Checkbox
          key={i}
          label={x.label}
          isChecked={i === selected}
          onChange={() => onChange(i, x)}
          onDarkBackground={onDarkBackground}
        />
      ))}
    </div>
  );
}
