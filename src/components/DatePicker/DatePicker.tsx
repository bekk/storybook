import React, { useState } from 'react';
import { ISinglePickerProps } from './types';
import moment from 'moment';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { SingleDatePicker } from 'react-dates';
import { getDateAtMidnightUtc } from './utils';
import { DatePickerHeader } from './DatePickerHeader/DatePickerHeader';
import { DatePickerWrapper } from './DatePickerWrapper';

export const DatePicker = ({
  initialDate,
  label,
  isDateRequired,
  disabled,
  openDirection,
  isDateOutsideRange,
  onChange,
  onFocusChange
}: ISinglePickerProps<Date>) => {
  const [hasFocus, setHasFocus] = useState<boolean | null>(false);
  const [date, setDate] = useState(initialDate ? moment(initialDate) : null);
  // @ts-ignore
  moment.locale('nb');

  const hasLabel = label !== undefined;
  const containerClass = `DatePickerContainer ${
    hasLabel ? `DatePickerContainerWithLabel` : ''
  }`;

  return (
    <DatePickerWrapper invalid={isDateRequired === true && date === null}>
      <div className={containerClass}>
        {hasLabel && <label className="DatePickerLabel">{label}</label>}
        <SingleDatePicker
          numberOfMonths={1}
          firstDayOfWeek={1}
          displayFormat={'DD.MM.YYYY'}
          date={date}
          onDateChange={date => {
            const dateAsDateObject = date
              ? getDateAtMidnightUtc(date.toDate())
              : null;
            onChange(dateAsDateObject);
            setDate(date);
          }}
          focused={hasFocus || false}
          onFocusChange={({ focused }) => {
            setHasFocus(focused);
            if (onFocusChange) {
              onFocusChange(focused);
            }
          }}
          id={`${label}${Math.random()}`}
          isOutsideRange={isDateOutsideRange ? isDateOutsideRange : () => false}
          hideKeyboardShortcutsPanel={true}
          placeholder={'dd.mm.yyyy'}
          renderMonthElement={DatePickerHeader}
          disabled={disabled}
          openDirection={openDirection ? openDirection : 'down'}
        />
      </div>
    </DatePickerWrapper>
  );
};
