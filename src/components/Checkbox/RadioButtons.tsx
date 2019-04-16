import React from 'react';
import { Checkbox } from './Checkbox';
import './RadioButtons.css';
import { classnames } from '../../utils';

interface IProps<T extends { label: string }> {
  selected: number;
  options: T[];
  onChange: (selected: number, option: T) => void;
  onDarkBackground?: boolean;
  inline?: boolean;
}

export function RadioButtons<T extends { label: string }>({
  selected,
  options,
  onChange,
  onDarkBackground,
  inline
}: IProps<T>) {
  const classes = classnames({
    'storybook-radiobuttons': true,
    'storybook-radioInline': inline || false
  });
  return (
    <div className={classes}>
      {options.map((x, i) => (
        <Checkbox
          key={i}
          label={x.label}
          isChecked={i === selected}
          onChange={() => onChange(i, x)}
          onDarkBackground={onDarkBackground}
          inline={inline}
        />
      ))}
    </div>
  );
}
