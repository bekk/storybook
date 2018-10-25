import * as React from 'react';
import './TextField.css';

interface IProps {
  label: string;
  value: string;
  onChange: (newValue: string) => void;
  validateInput?: (input: string) => string | undefined;
  className?: any;
  size?: any;
  maxLength?: number;
  onFocus?: any;
  onBlur?: any;
  passedRef?: any;
}

interface IState {
  isValid: boolean;
  value: string;
}

export class TextField extends React.Component<IProps, IState> {
  constructor(props: IProps) {
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
      validateInput,
      className,
      size,
      maxLength,
      onFocus,
      onBlur,
      passedRef,
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
                onChange(formatted);
                this.setState({ isValid: true, value: formatted });
              } else {
                this.setState({ isValid: false, value: event.target.value });
              }
            } else {
              onChange(event.target.value);
            }
          }}
        />
      </div>
    );
  }
}
