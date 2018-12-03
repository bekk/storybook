import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { DatePicker } from './DatePicker';
import { MomentPicker } from './MomentPicker';
import * as moment from 'moment';
import { boolean, date, text } from '@storybook/addon-knobs';
import { DateRangePicker } from './DateRangePicker';
import { MomentRangePicker } from './MomentRangePicker';
import { getTodaysDateAtMidnightUtc } from './utils';

const todayDate = getTodaysDateAtMidnightUtc();

(storiesOf('Components/DatePicker', module) as any)
  .addWithJSX('Standard', () => (
    <DatePicker
      label={text('label', 'Velg dato')}
      onChange={date => void date}
      initialDate={date('initialDate', todayDate)}
      disabled={boolean('disabled', false)}
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
      initialDate={moment(todayDate)}
      isDateRequired={true}
    />
  ))
  .addWithJSX('DateRangePicker', () => (
    <DateRangePicker
      label={text('label', 'Velg periode')}
      onChange={(startDate, endDate) => void startDate}
      isDateRequired={true}
      initialStartDate={moment(todayDate)
        .subtract(7, 'days')
        .toDate()}
      initialEndDate={moment(todayDate)
        .add(7, 'days')
        .toDate()}
    />
  ))
  .addWithJSX('MomentRangePicker', () => (
    <MomentRangePicker
      label={text('label', 'Velg periode')}
      onChange={(startDate, endDate) => void startDate}
      isDateRequired={true}
      initialStartDate={moment(todayDate).subtract(7, 'days')}
      initialEndDate={moment(todayDate).add(7, 'days')}
    />
  ));
