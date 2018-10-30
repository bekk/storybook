import * as moment from 'moment';
import 'moment/locale/nb';
import * as React from 'react';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { DateRangePicker as ReactDatesRangePicker } from 'react-dates';
import { DateRangePickerWrapper } from './DateRangePickerWrapper';

import './DatePicker.css';
import { DatePickerHeader } from './DatePickerHeader/DatePickerHeader';

type InputType = 'endDate' | 'startDate' | null;

interface IState {
  startDate: moment.Moment | null;
  endDate: moment.Moment | null;
  focusedInput: InputType;
  timeZone: string;
  endDateId: string;
  startDateId: string;
}

interface IProps {
  label: string;
  onChange: (
    startDate: moment.Moment | null,
    endDate: moment.Moment | null
  ) => void;
  initialStartDate?: moment.Moment | null;
  initialEndDate?: moment.Moment | null;
  isDateRequired?: boolean;
}

function generateRandomHexId(): string {
  /* Generate a random 8 digit hexadecimal number */
  let id = '';
  for (let i = 0; i < 8; i++) {
    id += Math.floor(Math.random() * 16).toString(16);
  }
  return id;
}

export class MomentRangePicker extends React.Component<IProps, IState> {
  public constructor(props: IProps) {
    super(props);
    const _timeZone = moment.locale('nb');
    this.state = {
      startDate: props.initialStartDate ? props.initialStartDate : null,
      endDate: props.initialEndDate ? props.initialEndDate : null,
      focusedInput: null,
      timeZone: _timeZone,
      endDateId: `endDate_${generateRandomHexId()}`,
      startDateId: `startDate_${generateRandomHexId()}`
    };
  }

  public render() {
    const { label, onChange, isDateRequired } = this.props;
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
              onChange(startDate, endDate);
              this.setState({ startDate, endDate });
            }}
            focusedInput={this.state.focusedInput}
            onFocusChange={focusedInput => this.setState({ focusedInput })}
            isOutsideRange={() => false}
            renderMonthElement={DatePickerHeader}
            hideKeyboardShortcutsPanel={true}
          />
        </div>
      </DateRangePickerWrapper>
    );
  }
}
