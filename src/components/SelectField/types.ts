export interface ISelectOption {
  label: string;
  value: number;
}
export interface IMultiSelectOption extends ISelectOption {
  shorthand: string;
  label: string;
  value: number;
}

export interface ICreateableMultiSelectOption {
  value: string;
  label: string;
  color: string;
  isFixed?: boolean;
  __isNew__?: boolean;
}
