import * as moment from 'moment';

interface ICommonDatePickerProps<T> {
  label: string;
  isDateRequired?: boolean;
  isDateOutsideRange?: (date: T) => boolean;
}

export interface ISinglePickerProps<T> extends ICommonDatePickerProps<T> {
  onChange: (selectedDate: T | null) => void;
  initialDate?: T | null;
  onFocusChange?: (focused: boolean | null) => void;
}

export interface IRangePickerProps<T> extends ICommonDatePickerProps<T> {
  onChange: (startDate: T | null, endDate: T | null) => void;
  initialStartDate?: T | null;
  initialEndDate?: T | null;
}

export interface ISinglePickerState {
  focused: boolean | null;
  date: moment.Moment | null;
  timeZone: string;
}

export interface IRangePickerState {
  startDate: moment.Moment | null;
  endDate: moment.Moment | null;
  focusedInput: 'startDate' | 'endDate' | null;
  timeZone: string;
  endDateId: string;
  startDateId: string;
}
