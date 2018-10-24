import * as moment from 'moment';
import * as React from 'react';
import Select from 'react-select';
import './DatePickerHeader.css';

interface IDatePickerHeaderInput {
  month: moment.Moment;
  onMonthSelect: (currentMonth: moment.Moment, newMonthVal: string) => void;
  onYearSelect: (currentMonth: moment.Moment, newYearVal: string) => void;
}

export const DatePickerHeader = ({
  month,
  onMonthSelect,
  onYearSelect
}: IDatePickerHeaderInput) => (
  <div className={'DatePickerHeaderNavigationHeaderContainer'}>
    <div className={'DatePickerHeaderWeekDayContainer'}>
      <div className={'DatePickerHeaderWeekDays'}>
        <div className={'DatePickerHeaderWeekDay'}>ma</div>
        <div className={'DatePickerHeaderWeekDay'}>ti</div>
        <div className={'DatePickerHeaderWeekDay'}>on</div>
        <div className={'DatePickerHeaderWeekDay'}>to</div>
        <div className={'DatePickerHeaderWeekDay'}>fr</div>
        <div className={'DatePickerHeaderWeekDay'}>lø</div>
        <div className={'DatePickerHeaderWeekDay'}>sø</div>
      </div>
    </div>
    <div className={'DatePickerHeaderMonthSelectContainer'}>
      <Select
        className={'DatePickerHeaderMonthDropdown'}
        value={{
          label: moment.months()[month.month()],
          value: month.month()
        }}
        onChange={(e: { value: number; label: string }) => {
          onMonthSelect(month, e.value.toString());
        }}
        options={moment.months().map((label, value) => ({ label, value }))}
        styles={{
          menuList: base => ({
            ...base,
            maxHeight: '200px',
            overflow: 'auto'
          })
        }}
      />
    </div>
    <div className={'DatePickerHeaderYearSelectContainer'}>
      <button
        className={'DatePickerHeaderYearButton'}
        onClick={() => onYearSelect(month, (month.year() - 1).toString())}
      >
        -
      </button>
      <div className={'DatePickerHeaderYear'}>{month.year()}</div>
      <button
        className={'DatePickerHeaderYearButton'}
        onClick={() => onYearSelect(month, (month.year() + 1).toString())}
      >
        +
      </button>
    </div>
  </div>
);
