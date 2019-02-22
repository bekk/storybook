import * as React from 'react';
import RemoveIcon from './RemoveIcon/RemoveIcon';
import { IMultiSelectOption } from './types';
import './MultiSelect/MultiSelect.css';

interface IProps {
  value: IMultiSelectOption;
  removeSelectedValue: (value: IMultiSelectOption) => void;
}

export function SelectedValue(props: IProps) {
  const { value, removeSelectedValue } = props;
  const getLabel = (value: IMultiSelectOption) =>
    value.shorthand ? value.shorthand : value.label;
  return (
    <div key={value.shorthand} className={'multiSelectSelectedValue'}>
      <span className={'multiSelectShorthand'}>{getLabel(value)}</span>
      <span className={'selectedValueRemoveIcon'}>
        <RemoveIcon onClick={() => removeSelectedValue(value)} />
      </span>
    </div>
  );
}
