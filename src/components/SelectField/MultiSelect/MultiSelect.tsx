import * as React from 'react';
import Select from 'react-select';

import { CSSProperties } from 'react';
import { BEKK_SORT, OVERSKYET } from '../../../constants/styles';
import { IMultiSelectOption } from '../types';
import './MultiSelect.css';
import { SelectedValue } from './SelectedValue';

interface IProps {
  label: string;
  placeholder: string;
  selectedValues: IMultiSelectOption[];
  options: IMultiSelectOption[];
  updateSelection: (selected: IMultiSelectOption[]) => void;
  fieldWidth?: string;
}

interface IState {
  inputField: string;
}

class MultiSelect extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = { inputField: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.removeSelectedValue = this.removeSelectedValue.bind(this);
  }

  public handleChange(e: IMultiSelectOption[]) {
    this.props.updateSelection(e);
  }

  public handleInputChange(s: string) {
    this.setState({ inputField: s });
  }

  public removeSelectedValue(value: IMultiSelectOption) {
    const filteredValues = this.props.selectedValues.filter(
      t => t.value !== value.value
    );
    this.props.updateSelection(filteredValues);
  }
  public render() {
    const customStyles = {
      control: (base: CSSProperties) => ({
        ...base,
        '& input': {
          'font-family': 'FFDINWebProLight',
          'font-size': '18px'
        },
        '&:focus-within': {
          'background-size': '100% 1px',
          border: 'none',
          'box-shadow': 'none',
          outline: 0,
          transition: 'all 0.1s linear'
        },
        '&:hover': {
          'background-size': '100% 1px',
          border: 'none',
          'box-shadow': 'none',
          outline: 0,
          transition: 'all 0.1s linear'
        },
        background: OVERSKYET,
        'background-image': 'linear-gradient(0deg, #777, #777)',
        'background-position': '0 100%',
        'background-repeat': 'no-repeat',
        'background-size': '0% 1px',
        border: 'none',
        'border-radius': 0,
        'box-shadow': 'none',
        'box-sizing': 'border-box',
        color: BEKK_SORT,
        'font-family': 'FFDINWebProLight',
        height: '44px',
        maxWidth: this.props.fieldWidth || 'initial',
        outline: 0,
        transition: 'all 0s linear',
        width: '100%'
      }),
      menu: (optionBase: CSSProperties) => ({
        ...optionBase,
        'z-index': 3
      })
    };
    const { label, selectedValues, options, placeholder } = this.props;
    const { inputField } = this.state;
    let components = {
      MultiValueContainer: () => null
    };
    return (
      <div className={'multiSelectContainer'}>
        <label className={'multiSelectLabel'}>{label}</label>
        <div className={'multiSelectSelectedValuesContainer'}>
          {selectedValues.map(e => (
            <SelectedValue
              value={e}
              removeSelectedValue={this.removeSelectedValue}
              key={`${label}${e.value}${e.label}`}
            />
          ))}
        </div>
        <div className={'multiSelectPlaceholder'}>
          {inputField ? '' : placeholder}
        </div>
        <Select
          className={'multiSelectSelect'}
          isClearable={false}
          options={options}
          isMulti={true}
          placeholder={''}
          value={selectedValues}
          onChange={this.handleChange}
          onInputChange={this.handleInputChange}
          backspaceRemovesValue={false}
          components={components}
          styles={customStyles}
        />
      </div>
    );
  }
}

export { MultiSelect };
