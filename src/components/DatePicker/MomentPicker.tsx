import moment from 'moment';
import 'moment/locale/nb';
import * as React from 'react';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { DatePickerHeader } from './DatePickerHeader/DatePickerHeader';
import { SingleDatePicker } from 'react-dates';
import { DatePickerWrapper } from './DatePickerWrapper';
import { ISinglePickerProps, ISinglePickerState } from './types';
import { getMomentAtMidnightUtc } from './utils';

import './DatePicker.css';

export class MomentPicker extends React.Component<
  ISinglePickerProps<moment.Moment>,
  ISinglePickerState
> {
  public constructor(props: ISinglePickerProps<moment.Moment>) {
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
      disabled,
      label,
      onChange,
      onFocusChange,
      isDateRequired,
      isDateOutsideRange
    } = this.props;
    const hasLabel = label !== undefined;
    const containerClass = `DatePickerContainer ${
      hasLabel ? 'DatePickerContainerWithLabel' : ''
    }`;
    return (
      <DatePickerWrapper
        invalid={isDateRequired === true && this.state.date === null}
      >
        <div className={'DatePickerContainer'}>
          {hasLabel && <label className={containerClass}>{label}</label>}
          <SingleDatePicker
            numberOfMonths={1}
            firstDayOfWeek={1}
            displayFormat={'DD.MM.YYYY'}
            date={this.state.date}
            onDateChange={date => {
              onChange(getMomentAtMidnightUtc(date));
              this.setState({ date });
            }}
            focused={this.state.focused || false}
            onFocusChange={({ focused }) => {
              this.setState({ focused });
              if (onFocusChange) {
                onFocusChange(focused);
              }
            }}
            id={`${label}${Math.random()}`}
            isOutsideRange={
              isDateOutsideRange ? isDateOutsideRange : () => false
            }
            hideKeyboardShortcutsPanel={true}
            placeholder={'dd.mm.yyyy'}
            renderMonthElement={DatePickerHeader}
            disabled={disabled}
          />
        </div>
      </DatePickerWrapper>
    );
  }
}
