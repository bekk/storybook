import * as React from 'react';
import Select from 'react-select';
import { IMultiSelectOption } from '../types';
import './MultiSelect.css';
import { SelectedValue } from '../SelectedValue';
import { customStylesMultiSelect, themeTransform } from '../constants';
import { SearchIcon } from '../SearchIcon';

interface IProps {
  label: string;
  placeholder: string;
  selectedValues: IMultiSelectOption[];
  options: IMultiSelectOption[];
  updateSelection: (selected: IMultiSelectOption[]) => void;
  fieldWidth?: string;
  showSearchIcon?: boolean;
}

interface IState {
  inputField: string;
}

export class MultiSelect extends React.Component<IProps, IState> {
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
    const {
      label,
      selectedValues,
      options,
      placeholder,
      fieldWidth,
      showSearchIcon
    } = this.props;
    const { inputField } = this.state;
    const components = {
      MultiValueContainer: () => null
    };

    const customStyles = {
      ...customStylesMultiSelect,
      control: (base: React.CSSProperties) => ({
        ...customStylesMultiSelect.control(base),
        maxWidth: fieldWidth || 'initial'
      })
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
          {!inputField && (
            <>
              {showSearchIcon && (
                <SearchIcon className={'multiSelectPlaceholderIcon'} />
              )}
              <div className={'multiSelectPlaceholderText'}>{placeholder}</div>
            </>
          )}
        </div>
        <Select
          className={'multiSelectSelect'}
          isClearable={false}
          options={options}
          isMulti
          placeholder={''}
          value={selectedValues}
          onChange={this.handleChange}
          onInputChange={this.handleInputChange}
          backspaceRemovesValue={false}
          components={components}
          styles={customStyles}
          theme={themeTransform}
        />
      </div>
    );
  }
}
