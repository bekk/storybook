export interface ISelectOption {
  label: string;
  value: number;
}
export interface IMultiSelectOption extends ISelectOption {
  shorthand?: string;
}

export interface ICreateableMultiSelectOption extends IMultiSelectOption {
  __isNew__?: boolean;
}

export interface ISelectedValuesViewProps {
  onDelete: (value: ICreateableMultiSelectOption) => void;
  selectedValues: ICreateableMultiSelectOption[];
}
