import * as React from 'react';
import CreatableSelect from 'react-select/lib/Creatable';
import {
  ICreateableMultiSelectOption,
  ISelectedValuesViewProps,
  Equatable
} from '../types';
import { SelectedValue } from '../SelectedValue';
import '../MultiSelect/MultiSelect.css';
import { customStylesMultiSelect, themeTransform } from '../constants';
import { SearchIcon } from '../SearchIcon';
import matchSorter from 'match-sorter';

interface IProps<Eq extends Equatable> {
  label: string;
  placeholder: string;
  fieldWidth?: string;
  options: ICreateableMultiSelectOption<Eq>[];
  selectedValues: ICreateableMultiSelectOption<Eq>[];
  updateSelection: (selected: ICreateableMultiSelectOption<Eq>[]) => void;
  showSearchIcon?: boolean;
  SelectedValuesView?: (props: ISelectedValuesViewProps<Eq>) => JSX.Element;
}

interface IState {
  isLoading: boolean;
  inputField: string;
}

export class CreateableMultiSelect<
  Eq extends Equatable
> extends React.Component<IProps<Eq>, IState> {
  constructor(props: IProps<Eq>) {
    super(props);
    this.state = {
      isLoading: false,
      inputField: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.removeSelectedValue = this.removeSelectedValue.bind(this);
  }

  public handleInputChange(s: string) {
    this.setState({ inputField: s });
  }

  public handleChange = (
    newValue: ICreateableMultiSelectOption<Eq>[],
    actionMeta: any
  ) => {
    this.props.updateSelection(newValue);
  };

  public removeSelectedValue(value: ICreateableMultiSelectOption<Eq>) {
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
      showSearchIcon,
      SelectedValuesView
    } = this.props;
    const { inputField } = this.state;
    const components = {
      MultiValueContainer: () => null
    };

    const sortedOptions = matchSorter(options, inputField, { keys: ['label'] });

    const customStyles = {
      ...customStylesMultiSelect,
      control: (base: React.CSSProperties) => ({
        ...customStylesMultiSelect.control(base),
        maxWidth: fieldWidth || 'initial'
      }),
      menu: (base: React.CSSProperties) => base
    };

    return (
      <React.StrictMode>
        <div className="multiSelectContainer">
          {SelectedValuesView ? (
            <SelectedValuesView
              onDelete={this.removeSelectedValue}
              selectedValues={selectedValues}
            />
          ) : (
            <>
              <label className="multiSelectLabel">{label}</label>
              <div className="multiSelectSelectedValuesContainer">
                {selectedValues.map(e => (
                  <SelectedValue
                    value={e}
                    removeSelectedValue={this.removeSelectedValue}
                    key={`${label}${e.value}${e.label}`}
                  />
                ))}
              </div>
            </>
          )}
          <div className="multiSelectPlaceholder">
            {!inputField && (
              <>
                {showSearchIcon && (
                  <SearchIcon className="multiSelectPlaceholderIcon" />
                )}
                <div className="multiSelectPlaceholderText">{placeholder}</div>
              </>
            )}
          </div>
          <CreatableSelect
            className="multiSelectSelect"
            isClearable={false}
            options={sortedOptions}
            isMulti
            placeholder={''}
            value={selectedValues}
            onChange={this.handleChange}
            onInputChange={this.handleInputChange}
            backspaceRemovesValue={false}
            components={components}
            styles={customStyles}
            theme={themeTransform}
            formatCreateLabel={v => `Opprett "${v}"`}
          />
        </div>
      </React.StrictMode>
    );
  }
}
