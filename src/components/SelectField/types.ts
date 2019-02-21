export interface ISelectOption {
  label: string;
  value: number;
}
export interface IMultiSelectOption extends ISelectOption {
  shorthand: string;
}
