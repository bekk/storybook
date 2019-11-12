export type Equatable = string | number;

export interface ISelectOption<Eq extends Equatable> {
  label: string;
  value: Eq;
}
export interface IMultiSelectOption<Eq extends Equatable>
  extends ISelectOption<Eq> {
  shorthand?: string;
}

export interface ICreateableMultiSelectOption<Eq extends Equatable>
  extends IMultiSelectOption<Eq> {
  __isNew__?: boolean;
}

export interface ISelectedValuesViewProps<Eq extends Equatable> {
  onDelete?: (value: ICreateableMultiSelectOption<Eq>) => void;
  selectedValues: ICreateableMultiSelectOption<Eq>[];
}
