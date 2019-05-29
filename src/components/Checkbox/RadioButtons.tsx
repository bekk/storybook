import React from 'react';
import { Checkbox } from './Checkbox';
import './RadioButtons.css';
import { classnames } from '../../utils';

interface IProps<T> {
  selected: T;
  options: T[];
  onChange: (option: T) => void;
  onDarkBackground?: boolean;
  inline?: boolean;
}

interface IOptionBase {
  label: string;
  id?: string | number;
}

export function RadioButtons<T extends IOptionBase>({
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
  const isChecked = (x: T) =>
    'id' in x ? x.id === selected.id : x.label === selected.label;
  return (
    <div className={classes}>
      {options.map((x, i) => (
        <Checkbox
          key={i}
          label={x.label}
          isChecked={isChecked(x)}
          onChange={() => onChange(x)}
          onDarkBackground={onDarkBackground}
          inline={inline}
        />
      ))}
    </div>
  );
}
