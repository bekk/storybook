import * as React from "react";
import RemoveIcon from "./RemoveIcon/RemoveIcon";
import { IMultiSelectOption, Equatable } from "./types";
import "./MultiSelect/MultiSelect.css";

interface IProps<Eq extends Equatable> {
  value: IMultiSelectOption<Eq>;
  removeSelectedValue: (value: IMultiSelectOption<Eq>) => void;
}

export function SelectedValue<Eq extends Equatable>(props: IProps<Eq>) {
  const { value, removeSelectedValue } = props;
  const getLabel = (value: IMultiSelectOption<Eq>) =>
    value.shorthand ? value.shorthand : value.label;
  return (
    <div key={value.shorthand} className={"multiSelectSelectedValue"}>
      <span className={"multiSelectShorthand"}>{getLabel(value)}</span>
      <span className={"selectedValueRemoveIcon"}>
        <RemoveIcon onClick={() => removeSelectedValue(value)} />
      </span>
    </div>
  );
}
