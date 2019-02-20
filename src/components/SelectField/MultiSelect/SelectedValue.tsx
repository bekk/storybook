import * as React from 'react';
import RemoveIcon from '../RemoveIcon/RemoveIcon';
import { IMultiSelectOption } from '../types';
import './MultiSelect.css';

interface IOwnProps {
  value: IMultiSelectOption;
  removeSelectedValue: (value: IMultiSelectOption) => void;
}

type IProps = IOwnProps;

export function SelectedValue(props: IProps) {
  const { value, removeSelectedValue } = props;
  return (
    <div key={value.shorthand} className={'multiSelectSelectedValue'}>
      <span className={'multiSelectShorthand'}>{value.shorthand}</span>
      <span className={'selectedValueRemoveIcon'}>
        <RemoveIcon onClick={() => removeSelectedValue(value)} />
      </span>
    </div>
  );
}
