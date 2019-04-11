import * as React from 'react';
import './TextField.css';

interface IProps {
  label?: string;
  value: string;
  placeholder?: string;
  onChange: (newValue: string) => void;
  validateInput?: (input: string) => boolean;
  className?: string;
  size?: number;
  maxLength?: number;
  onFocus?: () => void;
  onBlur?: () => void;
  ref?: React.RefObject<HTMLInputElement>;
  disabled?: boolean;
}

export function TextField({
  label,
  value,
  placeholder,
  onChange,
  validateInput = () => true,
  className,
  size,
  maxLength,
  onFocus,
  onBlur,
  ref,
  disabled,
}: IProps) {
  const isValid = validateInput(value);
  return (
    <div className={'textFieldContainer'}>
      {label && <label className={'textFieldLabel'}>{label}</label>}
      <input
        className={`textFieldInput ${className ? className : ''} ${
          isValid ? '' : 'textFieldInvalid'
        }`}
        size={size}
        maxLength={maxLength}
        type={'text'}
        onBlur={onBlur}
        onFocus={onFocus}
        ref={ref}
        placeholder={placeholder}
        value={value}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          onChange(event.target.value);
        }}
        disabled={disabled}
      />
    </div>
  );
}
