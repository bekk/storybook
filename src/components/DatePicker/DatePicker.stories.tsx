import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { DatePicker } from './DatePicker';
import { MomentPicker } from './MomentPicker';
import * as moment from 'moment';
import { boolean, date, text } from '@storybook/addon-knobs';
import { DateRangePicker } from './DateRangePicker';
import { MomentRangePicker } from './MomentRangePicker';

const todayDate = new Date();

(storiesOf('Components/DatePicker', module) as any)
  .addWithJSX('Standard', () => (
    <DatePicker
      label={text('label', 'Velg dato')}
      onChange={date => void date}
      initialDate={date('initialDate', todayDate)}
    />
  ))
  .addWithJSX('Required', () => (
    <DatePicker
      label={text('label', 'Velg dato')}
      onChange={date => void date}
      isDateRequired={boolean('isDateRequired', true)}
    />
  ))
  .addWithJSX('Block before today', () => (
    <DatePicker
      label={text('label', 'Velg dato')}
      onChange={date => void date}
      isDateOutsideRange={date => date < new Date()}
      isDateRequired={true}
    />
  ))
  .addWithJSX('MomentPicker', () => (
    <MomentPicker
      label={text('label', 'Velg dato')}
      onChange={date => void date}
      initialDate={moment()}
      isDateRequired={true}
    />
  ))
  .addWithJSX('DateRangePicker', () => (
    <DateRangePicker
      label={text('label', 'Velg periode')}
      onChange={(startDate, endDate) => void startDate}
      isDateRequired={true}
      initialStartDate={
        new Date(
          todayDate.getFullYear(),
          todayDate.getMonth(),
          todayDate.getDate() - 7
        )
      }
      initialEndDate={
        new Date(
          todayDate.getFullYear(),
          todayDate.getMonth(),
          todayDate.getDate() + 7
        )
      }
    />
  ))
  .addWithJSX('MomentRangePicker', () => (
    <MomentRangePicker
      label={text('label', 'Velg periode')}
      onChange={(startDate, endDate) => void startDate}
      isDateRequired={true}
      initialStartDate={moment().subtract(7, 'days')}
      initialEndDate={moment().add(7, 'days')}
    />
  ));
