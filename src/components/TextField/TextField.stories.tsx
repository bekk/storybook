import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs/react';
import { TextField } from './TextField';

(storiesOf('Components/TextField', module) as any)
  .addWithJSX('Basic', () => (
    <TextField
      label={text('label', 'Navn')}
      value={text('value', 'Tarjei')}
      onChange={v => void v}
    />
  ))
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
