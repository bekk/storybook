import * as moment from 'moment';
import 'moment/locale/nb';
import * as React from 'react';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { DateRangePicker as ReactDatesRangePicker } from 'react-dates';
import { DateRangePickerWrapper } from './DateRangePickerWrapper';
import './DatePicker.css';
import { DatePickerHeader } from './DatePickerHeader/DatePickerHeader';
import { IRangePickerProps, IRangePickerState } from './types';

function generateRandomHexId(): string {
  /* Generate a random 8 digit hexadecimal number */
  let id = '';
  for (let i = 0; i < 8; i++) {
    id += Math.floor(Math.random() * 16).toString(16);
  }
  return id;
}

export class DateRangePicker extends React.Component<
  IRangePickerProps<Date>,
  IRangePickerState
> {
  public constructor(props: IRangePickerProps<Date>) {
    super(props);
    const _timeZone = moment.locale('nb');
    this.state = {
      startDate: props.initialStartDate ? moment(props.initialStartDate) : null,
      endDate: props.initialEndDate ? moment(props.initialEndDate) : null,
      focusedInput: null,
      timeZone: _timeZone,
      endDateId: `endDate_${generateRandomHexId()}`,
      startDateId: `startDate_${generateRandomHexId()}`
    };
  }

  public render() {
    const {
      label,
      onChange,
      isDateRequired,
      isDateOutsideRange,
      disabled
    } = this.props;
    return (
      <DateRangePickerWrapper
        startDateInvalid={
          isDateRequired === true && this.state.startDate === null
        }
        endDateInvalid={isDateRequired === true && this.state.endDate === null}
        startDateId={this.state.startDateId}
        endDateId={this.state.endDateId}
      >
        <div className={'DatePickerContainer'}>
          <label className={'DatePickerLabel'}>{label}</label>
          <ReactDatesRangePicker
            startDate={this.state.startDate}
            startDateId={this.state.startDateId}
            startDatePlaceholderText={'dd.mm.yyyy'}
            endDate={this.state.endDate}
            endDateId={this.state.endDateId}
            endDatePlaceholderText={'dd.mm.yyyy'}
            onDatesChange={({ startDate, endDate }) => {
              onChange(
                startDate ? startDate.toDate() : null,
                endDate ? endDate.toDate() : null
              );
              this.setState({ startDate, endDate });
            }}
            focusedInput={this.state.focusedInput}
            onFocusChange={focusedInput => this.setState({ focusedInput })}
            isOutsideRange={
              isDateOutsideRange ? isDateOutsideRange : () => false
            }
            renderMonthElement={DatePickerHeader}
            hideKeyboardShortcutsPanel={true}
            disabled={disabled}
          />
        </div>
      </DateRangePickerWrapper>
    );
  }
}
