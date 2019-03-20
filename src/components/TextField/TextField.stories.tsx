import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, text } from '@storybook/addon-knobs/react';
import { TextField } from './TextField';

interface IProps {
  value: string;
  validate?: (s: string) => boolean;
}

class TextFieldWrapper extends React.Component<IProps, { value: string }> {
  constructor(props: IProps) {
    super(props);
    this.state = { value: props.value };
  }

  onChange = (value: string) => this.setState({ value });

  public render() {
    const { validate } = this.props;
    return (
      <TextField
        label={text('label', 'Navn')}
        value={text('value', this.state.value)}
        onChange={this.onChange}
        validateInput={validate}
        disabled={boolean('disabled', false)}
      />
    );
  }
}

(storiesOf('Components/TextField', module) as any)
  .addWithJSX('Basic', () => <TextFieldWrapper value="Tarjei" />)
  .addWithJSX('Length Validation', () => (
    <TextFieldWrapper
      value={text('value', 'Tarjei')}
      validate={(input: string) => input.length < 8}
    />
  ))
  .addWithJSX('Numeric Validation', () => (
    <TextFieldWrapper
      value={text('value', '42')}
      validate={input => !isNaN(Number(input))}
    />
  ));
