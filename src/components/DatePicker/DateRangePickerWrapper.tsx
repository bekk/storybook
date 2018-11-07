import { ThemedStyledFunction } from 'styled-components';
import styled from 'styled-components';
import { HTMLAttributes, ClassAttributes } from 'react';

function withProps<U>() {
  return <P, T, O>(
    fn: ThemedStyledFunction<P, T, O>
  ): ThemedStyledFunction<P & U, T, O & U> => fn;
}

interface IWrapProps {
  startDateInvalid: boolean;
  startDateId: string;
  endDateInvalid: boolean;
  endDateId: string;
}

/* styled-components depends on React.HTMLAttributes and React.ClassAttributes.
   Storybook requires imports of those dependencies.
   TS does not allow unused imports. */
try {
} catch {
  withProps<HTMLAttributes<ClassAttributes<number>>>();
}

/* Constructs a div used as a wrapper around the react-dates DatePicker.
   This is seems to be the best/only way to overwrite the default CSS.
   Standard usage of SASS and CSS failed. */

export const DateRangePickerWrapper = withProps<IWrapProps>()(styled.div)`
  .DateRangePickerInput {
      display: flex;
      border: none;
  }
  .DateRangePickerInput_arrow {
      background-color: var(--overskyet-kontrast);
      top: 10px;
  }
  .DateRangePickerInput_arrow_svg {
      height: 100%;
  }
  .CalendarDay__selected_span {
    background: var(--regn);
    border: 1px double var(--regn-kontrast);
    color: var(--hvit);
  }
  .CalendarDay__hovered_span {
    background: var(--regn);
    border: 1px double var(--regn-kontrast);
    color: var(--hvit);
  }
  .DateInput_input {
    width: 100%;
    background-color: var(--overskyet-kontrast);
    color: var(--svart);
    font-family: DINW01Regular;
    border: none;
    box-sizing: border-box;
    outline: none;
    background-position: 0 0, calc(100%) 0, 0 calc(100%), 0 0, 0 calc(100%);
    background-repeat: no-repeat;
    background-size: 0% 1px, 1px 0%, 0% 1px, 1px 0%, 0% 1px;
    background-image: none, none, linear-gradient(0deg, var(--solnedgang-kontrast), var(--solnedgang-kontrast)), none, linear-gradient(0deg, var(--morgendis), var(--morgendis));
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

  ${props => {
    return props.startDateInvalid
      ? `
  #${props.startDateId}:focus {
    background-size: 0% 1px, 1px 0%, 100% 1px, 1px 0%, 0% 1px;
    transition: all 0.2s linear;
  }
  #${props.startDateId}{
    background-size: 0% 1px, 1px 0%, 100% 1px, 1px 0%, 0% 1px;
    transition: all 0s linear;
  }`
      : '';
  }} ${props =>
  props.endDateInvalid
    ? `
    #${props.endDateId}:focus {
      background-size: 0% 1px, 1px 0%, 100% 1px, 1px 0%, 0% 1px;
      transition: all 0.2s linear;
    }
    #${props.endDateId}{
      background-size: 0% 1px, 1px 0%, 100% 1px, 1px 0%, 0% 1px;
      transition: all 0s linear;
    }`
    : ''}}
`;
