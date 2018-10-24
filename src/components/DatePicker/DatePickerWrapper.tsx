// import styled from 'styled-components';
// import { ThemedStyledFunction } from 'styled-components';

// interface IProps {
//   invalid: boolean;
// }

// /* Constructs a div used as a wrapper around the react-dates DatePicker.
//    This is seems to be the best/only way to overwrite the default CSS.
//    Standard usage of SASS and CSS failed. */

// function withProps<U>() {
//   return <P, T, O>(
//     fn: ThemedStyledFunction<P, T, O>
//   ): ThemedStyledFunction<P & U, T, O & U> => fn;
// }

// const DatePickerWrapperInner = withProps<IProps>()(styled.div)`
//   .DateInput_input {
//     color: #222;
//     font-family: FFDINWebProLight, sans-serif;
//     border: none;
//     box-sizing: border-box;
//     outline: none;
//     background-position: 0 0, calc(100%) 0, 0 calc(100%), 0 0, 0 calc(100%);
//     background-repeat: no-repeat;
//     background-size: 0% 1px, 1px 0%, 0% 1px, 1px 0%, 0% 1px;
//     background-image: linear-gradient(0deg, red, red),
//       linear-gradient(0deg, red, red), linear-gradient(0deg, red, red),
//       linear-gradient(0deg, red, red), linear-gradient(0deg, #777, #777);
//     transition: all 0s linear;
//   }

//   .DateInput_input:focus {
//     background-size: 0% 1px, 1px 0%, 0% 1px, 1px 0%, 100% 1px;
//     transition: all 0.1s linear;
//     outline: 0;
//   }
//   .DateInput_input:hover {
//     background-size: 0% 1px, 1px 0%, 0% 1px, 1px 0%, 100% 1px;
//     transition: all 0.1s linear;
//     outline: 0;
//   }
//   .SingleDatePickerInput {
//     border: none;
//   }
//   .DateInput {
//     width: 100%;
//   }
//   .CalendarMonth_caption {
//     padding-bottom: 20px;
//     padding-top: 0;
//   }
//   .DayPicker_weekHeaders {
//     visibility: hidden;
//   }
//   .DayPickerNavigation_button {
//     visibility: hidden;
//   }
//   ${props =>
//     props.invalid
//       ? `@keyframes invalidAnim {
//     0% {
//       background-size: 0% 1px, 1px 0%, 0% 1px, 1px 0%, 100% 1px;
//     }

//     25% {
//       background-size: 50% 1px, 1px 0%, 0% 1px, 1px 100%, 100% 1px;
//     }

//     75% {
//       background-size: 100% 1px, 1px 0%, 50% 1px, 1px 100%, 100% 1px;
//     }

//     100% {
//       background-size: 100% 1px, 1px 100%, 100% 1px, 1px 100%, 100% 1px;
//     }
//   }

//   .DateInput_input:focus {
//     animation: invalidAnim 0.2s linear forwards;
//   }
//   .DateInput_input:hover {
//     background-size: 0% 1px, 1px 0%, 100% 1px, 1px 0%, 0% 1px;
//     outline: 0;
//   }

//   .DateInput_input {
//     background-size: 0% 1px, 1px 0%, 100% 1px, 1px 0%, 0% 1px;
//     transition: all 0s linear;
//   }`
//       : ''};
// `;

// export const DatePickerWrapper: React.SFC<IProps> = props => {
//   return <DatePickerWrapperInner invalid={props.invalid} />;
// };
