import * as React from 'react';
import './TextField.css';

interface IProps<T> {
  label: string;
  value: string;
  onChange: (newValue: T) => void;
  validateInput?: (input: string) => T | undefined;
  className?: any;
  size?: any;
  maxLength?: number;
  onFocus?: any;
  onBlur?: any;
  passedRef?: any;
  disabled?: boolean;
}

interface IState {
  isValid: boolean;
  value: string;
}

export class TextField<T> extends React.Component<IProps<T>, IState> {
  constructor(props: IProps<T>) {
    super(props);
    this.state = {
      isValid: true,
      value: props.value,
    };
  }
  public render() {
    const {
      label,
      onChange,
      validateInput = (s: string) => s,
      className,
      size,
      maxLength,
      onFocus,
      onBlur,
      passedRef,
      disabled,
    } = this.props;
    return (
      <div className={'textFieldContainer'}>
        <label className={'textFieldLabel'}>{label}</label>
        <input
          className={`textFieldInput ${className ? className : ''} ${
            this.state.isValid ? '' : 'textFieldInvalid'
          }`}
          size={size}
          maxLength={maxLength}
          type="text"
          onBlur={onBlur}
          onFocus={onFocus}
          ref={passedRef}
          value={validateInput ? this.state.value : this.props.value}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            if (validateInput) {
              const formatted = validateInput(event.target.value);
              if (formatted !== undefined) {
                onChange(formatted as T);
                this.setState({ isValid: true, value: event.target.value });
              } else {
                this.setState({ isValid: false, value: event.target.value });
              }
            } else {
              onChange(event.target.value as any);
            }
          }}
          disabled={disabled}
        />
      </div>
    );
  }
}
