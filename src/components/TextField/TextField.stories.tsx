import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, text, number } from '@storybook/addon-knobs/react';
import { TextField } from './TextField';
import { NumberField } from './NumberField';

interface IProps {
  value: string;
  validate?: (s: string) => boolean;
}

interface NumberProps {
  value: number;
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
        placeholder={text('placeholder', 'placeholder tekst')}
        onDarkBackground={boolean('onDarkBackground', false)}
      />
    );
  }
}

class NumberFieldWrapper extends React.Component<
  NumberProps,
  { value: number }
> {
  constructor(props: NumberProps) {
    super(props);
    this.state = { value: props.value };
  }

  onChange = (value: number) => {
    this.setState({ value });
    console.log(value);
  };

  public render() {
    return (
      <NumberField
        label={text('label', 'Navn')}
        value={this.state.value}
        onChange={this.onChange}
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
  ))
  .addWithJSX('NumberField', () => (
    <NumberFieldWrapper value={number('value', 42)} />
  ));
