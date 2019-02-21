export interface ISelectOption {
  label: string;
  value: number;
}
export interface IMultiSelectOption {
  shorthand: string;
  label: string;
  value: number;
}

export interface IOption {
  value: string;
  label: string;
  color: string;
  isFixed?: boolean;
  __isNew__?: boolean;
}
