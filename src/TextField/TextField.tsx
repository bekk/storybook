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
      <div className={'container'}>
        <label className={'label'}>{label}</label>
        <input
          className={`input ${className} ${
            this.state.isValid ? '' : 'invalid'
          }`}
          size={size}
          maxLength={maxLength}
          type="text"
          onBlur={onBlur}
          onFocus={onFocus}
          ref={passedRef}
          value={this.state.value}
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
              this.setState({ value: event.target.value });
              onChange(event.target.value);
            }
          }}
        />
      </div>
    );
  }
}
