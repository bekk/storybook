import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean, text } from '@storybook/addon-knobs/react';
import { TextField } from './TextField';

class TextFieldWrapper extends React.Component<{}, { value: string }> {
  constructor(props: {}) {
    super(props);
    this.state = { value: 'Tarjei' };
  }

  public render() {
    return (
      <TextField
        label={text('label', 'Navn')}
        value={text('value', this.state.value)}
        onChange={(v: string) => this.setState({ value: v })}
        disabled={boolean('disabled', false)}
      />
    );
  }
}

(storiesOf('Components/TextField', module) as any)
  .add('Basic', () => <TextFieldWrapper />)
  .add('Length Validation', () => (
    <TextField
      label={text('label', 'Navn')}
      value={text('value', 'Tarjei')}
      onChange={v => void v}
      validateInput={input => {
        if (input.length < 8) {
          // Return the input if it is valid
          return input;
        } else {
          // Return undefined if it is invalid
          return undefined;
        }
      }}
    />
  ))
  .add('Numeric Validation', () => (
    <TextField
      label={text('label', 'Tall')}
      value={text('value', '42')}
      onChange={v => void v}
      validateInput={input => {
        const numberMaybe = Number(input);
        if (!isNaN(numberMaybe)) {
          return numberMaybe;
        }
        return undefined;
      }}
    />
  ));
