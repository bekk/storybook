import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { DatePicker } from './DatePicker';
import { MomentPicker } from './MomentPicker';
import * as moment from 'moment';
import { boolean, date, text } from '@storybook/addon-knobs';

(storiesOf('Components/DatePicker', module) as any)
  .addWithJSX('Standard', () => (
    <DatePicker
      label={text('label', 'Velg dato')}
      onChange={date => void date}
      initialDate={date('initialDate', new Date())}
    />
  ))
  .addWithJSX('Required', () => (
    <DatePicker
      label={text('label', 'Velg dato')}
      onChange={date => void date}
      isDateRequired={boolean('isDateRequired', true)}
    />
  ))
  .addWithJSX('MomentPicker', () => (
    <MomentPicker
      label={text('label', 'Velg dato')}
      onChange={date => void date}
      initialDate={moment()}
    />
  ));
