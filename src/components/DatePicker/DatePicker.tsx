import * as moment from 'moment';
import 'moment/locale/nb';
import * as React from 'react';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { DatePickerHeader } from './DatePickerHeader/DatePickerHeader';
import { SingleDatePicker } from 'react-dates';
import { DatePickerWrapper } from './DatePickerWrapper';
import { ISinglePickerProps, ISinglePickerState } from './types';

import './DatePicker.css';

export class DatePicker extends React.Component<
  ISinglePickerProps<Date>,
  ISinglePickerState
> {
  public constructor(props: ISinglePickerProps<Date>) {
    super(props);
    const _timeZone = moment.locale('nb');
    this.state = {
      date: props.initialDate ? moment(props.initialDate) : null,
      focused: false,
      timeZone: _timeZone
    };
  }

  public render() {
    const {
      label,
      onChange,
      onFocusChange,
      isDateRequired,
      isDateOutsideRange
    } = this.props;
    return (
      <DatePickerWrapper
        invalid={isDateRequired === true && this.state.date === null}
      >
        <div className={'DatePickerContainer'}>
          <label className={'DatePickerLabel'}>{label}</label>
          <SingleDatePicker
            numberOfMonths={1}
            firstDayOfWeek={1}
            displayFormat={'DD.MM.YYYY'}
            date={this.state.date}
            onDateChange={date => {
              const dateAsDateObject = date ? date.toDate() : null;
              onChange(dateAsDateObject);
              this.setState({ date });
            }}
            focused={this.state.focused || false}
            onFocusChange={({ focused }) => {
              this.setState({ focused });
              if (onFocusChange) {
                onFocusChange(focused);
              }
            }}
            id={label}
            isOutsideRange={
              isDateOutsideRange ? isDateOutsideRange : () => false
            }
            hideKeyboardShortcutsPanel={true}
            placeholder={'dd.mm.yyyy'}
            renderMonthElement={DatePickerHeader}
          />
        </div>
      </DatePickerWrapper>
    );
  }
}
