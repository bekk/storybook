import moment from "moment";
import "moment/locale/nb";
import * as React from "react";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import { DatePickerHeader } from "./DatePickerHeader/DatePickerHeader";
import { SingleDatePicker } from "react-dates";
import { DatePickerWrapper } from "./DatePickerWrapper";
import { ISinglePickerProps, ISinglePickerState } from "./types";

import "./DatePicker.css";
import { getDateAtMidnightUtc } from "./utils";

export class DatePicker extends React.Component<
  ISinglePickerProps<Date>,
  ISinglePickerState
> {
  public constructor(props: ISinglePickerProps<Date>) {
    super(props);
    const _timeZone = moment.locale("nb");
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
      isDateOutsideRange,
      openDirection
    } = this.props;
    const hasLabel = label !== undefined;
    const containerClass = `DatePickerContainer ${
      hasLabel ? "DatePickerContainerWithLabel" : ""
    }`;
    return (
      <DatePickerWrapper
        invalid={isDateRequired === true && this.state.date === null}
      >
        <div className={containerClass}>
          {hasLabel && <label className={"DatePickerLabel"}>{label}</label>}
          <SingleDatePicker
            numberOfMonths={1}
            firstDayOfWeek={1}
            displayFormat={"DD.MM.YYYY"}
            date={this.state.date}
            onDateChange={date => {
              const dateAsDateObject = date
                ? getDateAtMidnightUtc(date.toDate())
                : null;
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
            id={`${label}${Math.random()}`}
            isOutsideRange={
              isDateOutsideRange ? isDateOutsideRange : () => false
            }
            hideKeyboardShortcutsPanel={true}
            placeholder={"dd.mm.yyyy"}
            renderMonthElement={DatePickerHeader}
            disabled={disabled}
            direction={openDirection ? openDirection : "down"}
          />
        </div>
      </DatePickerWrapper>
    );
  }
}
