import * as moment from 'moment';
import 'moment/locale/nb';
import * as React from 'react';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { DatePickerHeader } from './DatePickerHeader/DatePickerHeader';
import { SingleDatePicker } from 'react-dates';
import { ThemedStyledFunction } from 'styled-components';
import styled from 'styled-components';

import './DatePicker.css';

interface IState {
  focused: boolean | null;
  date: moment.Moment | null;
  timeZone: string;
}

interface IProps {
  initialDate?: moment.Moment | null;
  label: string;
  onChange: (selectedDate: moment.Moment | null) => void;
  onFocusChange?: (focused: boolean | null) => void;
  isDateRequired?: boolean;
}

function withProps<U>() {
  return <P, T, O>(
    fn: ThemedStyledFunction<P, T, O>
  ): ThemedStyledFunction<P & U, T, O & U> => fn;
}

interface IWrapProps {
  invalid: boolean;
}

/* Constructs a div used as a wrapper around the react-dates DatePicker.
   This is seems to be the best/only way to overwrite the default CSS.
   Standard usage of SASS and CSS failed. */

const DatePickerWrapper = withProps<IWrapProps>()(styled.div)`
  .DateInput_input {
    background-color: var(--overskyet);
    color: var(--svart);
    font-family: FFDINWebProLight, sans-serif;
    border: none;
    box-sizing: border-box;
    outline: none;
    background-position: 0 0, calc(100%) 0, 0 calc(100%), 0 0, 0 calc(100%);
    background-repeat: no-repeat;
    background-size: 0% 1px, 1px 0%, 0% 1px, 1px 0%, 0% 1px;
    background-image: linear-gradient(0deg, var(--solnedgang-kontrast), var(--solnedgang-kontrast)),
      linear-gradient(0deg, var(--solnedgang-kontrast), var(--solnedgang-kontrast)), linear-gradient(0deg, var(--solnedgang-kontrast), var(--solnedgang-kontrast)),
      linear-gradient(0deg, var(--solnedgang-kontrast), var(--solnedgang-kontrast)), linear-gradient(0deg, var(--morgendis), var(--morgendis));
    transition: all 0s linear;
  }

  .DateInput_input:focus {
    background-size: 0% 1px, 1px 0%, 0% 1px, 1px 0%, 100% 1px;
    transition: all 0.1s linear;
    outline: 0;
  }
  .DateInput_input:hover {
    background-size: 0% 1px, 1px 0%, 0% 1px, 1px 0%, 100% 1px;
    transition: all 0.1s linear;
    outline: 0;
  }
  .SingleDatePickerInput {
    border: none;
  }
  .DateInput {
    width: 100%;
  }
  .CalendarDay__selected {
    background: var(--regn-kontrast); 
    border-color: var(--regn-kontrast);
  }
  .CalendarMonth_caption {
    padding-bottom: 20px;
    padding-top: 0;
  }
  .DayPicker_weekHeaders {
    visibility: hidden;
  }
  .DayPickerNavigation_button {
    visibility: hidden;
  }
  ${props =>
    props.invalid
      ? `@keyframes invalidAnim {
    0% {
      background-size: 0% 1px, 1px 0%, 0% 1px, 1px 0%, 100% 1px;
    }

    25% {
      background-size: 50% 1px, 1px 0%, 0% 1px, 1px 100%, 100% 1px;
    }

    75% {
      background-size: 100% 1px, 1px 0%, 50% 1px, 1px 100%, 100% 1px;
    }

    100% {
      background-size: 100% 1px, 1px 100%, 100% 1px, 1px 100%, 100% 1px;
    }
  }

  .DateInput_input:focus {
    animation: invalidAnim 0.2s linear forwards;
  }
  .DateInput_input:hover {
    background-size: 0% 1px, 1px 0%, 100% 1px, 1px 0%, 0% 1px;
    outline: 0;
  }

  .DateInput_input {
    background-size: 0% 1px, 1px 0%, 100% 1px, 1px 0%, 0% 1px;
    transition: all 0s linear;
  }`
      : ''};
`;

export class MomentPicker extends React.Component<IProps, IState> {
  public constructor(props: IProps) {
    super(props);
    const _timeZone = moment.locale('nb');
    this.state = {
      date: props.initialDate ? moment(props.initialDate) : null,
      focused: false,
      timeZone: _timeZone
    };
  }

  public render() {
    const { label, onChange, onFocusChange, isDateRequired } = this.props;
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
              onChange(date);
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
            isOutsideRange={() => false}
            hideKeyboardShortcutsPanel={true}
            placeholder={'dd.mm.yyyy'}
            renderMonthElement={DatePickerHeader}
          />
        </div>
      </DatePickerWrapper>
    );
  }
}
