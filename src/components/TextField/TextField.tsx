import * as React from 'react';
import './TextField.css';
import { classnames } from '../../utils';

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
  onDarkBackground?: boolean;
  autoFocus?: boolean;
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
  onDarkBackground = false,
  autoFocus,
}: IProps) {
  const isValid = validateInput(value);
  const textFieldContainer = classnames({
    textFieldContainer: true,
    dark: onDarkBackground,
  });
  const textFieldLabel = classnames({
    textFieldLabel: true,
    dark: onDarkBackground,
  });
  const textFieldInput = classnames({
    textFieldInput: true,
    dark: onDarkBackground,
    [className || '']: className !== undefined,
    textFieldInvalid: !isValid,
  });
  return (
    <div className={textFieldContainer}>
      {label && <label className={textFieldLabel}>{label}</label>}
      <input
        autoFocus={autoFocus}
        className={textFieldInput}
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
