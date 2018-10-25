import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs/react';
import { TextField } from './TextField';

class TextFieldWrapper extends React.Component<{}, { value: string }> {
  constructor() {
    super({});
    this.state = { value: 'Tarjei' };
  }

  public render() {
    return (
      <TextField
        label={text('label', 'Navn')}
        value={text('value', this.state.value)}
        onChange={v => this.setState({ value: v })}
      />
    );
  }
}

(storiesOf('Components/TextField', module) as any)
  .addWithJSX('Basic', () => <TextFieldWrapper />)
  .addWithJSX('Custom Validation', () => (
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
  ));
