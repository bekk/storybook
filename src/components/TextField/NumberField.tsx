import * as React from 'react';
import './TextField.css';

interface IProps {
  label: string;
  value?: number;
  onChange: (newValue: number) => void;
  onBlur?: any;
  disabled?: boolean;
}

export function NumberField({
  label,
  value,
  onChange,
  onBlur,
  disabled
}: IProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value === '') {
      onChange(NaN);
    } else {
      onChange(Number(event.target.value));
    }
  };
  return (
    <div className={'textFieldContainer'}>
      <label className={'textFieldLabel'}>{label}</label>
      <input
        className={`textFieldInput`}
        type={'number'}
        value={value || ''}
        onChange={handleChange}
        onBlur={onBlur}
        disabled={disabled}
      />
    </div>
  );
}
