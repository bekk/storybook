import * as React from 'react';
import CreatableSelect from 'react-select/lib/Creatable';
import { ICreateableMultiSelectOption } from '../types';
import { SelectedValue } from '../SelectedValue';
import '../MultiSelect/MultiSelect.css';
import { customStylesMultiSelect, themeTransform } from '../constants';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { SearchIcon } from '../SearchIcon';
import './CreateableMultiSelect.css';

interface IProps {
  label: string;
  placeholder: string;
  fieldWidth?: string;
  options: ICreateableMultiSelectOption[];
  selectedValues: ICreateableMultiSelectOption[];
  updateSelection: (selected: ICreateableMultiSelectOption[]) => void;
  showSearchIcon?: boolean;
}

interface IState {
  isLoading: boolean;
  inputField: string;
}

export class CreateableMultiSelect extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      isLoading: false,
      inputField: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.removeSelectedValue = this.removeSelectedValue.bind(this);
  }

  public handleInputChange(s: string) {
    this.setState({ inputField: s });
  }

  public handleChange = (
    newValue: ICreateableMultiSelectOption[],
    actionMeta: any
  ) => {
    this.props.updateSelection(newValue);
  };

  public removeSelectedValue(value: ICreateableMultiSelectOption) {
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
    } = this.props;
    const { inputField } = this.state;
    const components = {
      MultiValueContainer: () => null,
    };

    const customStyles = {
      ...customStylesMultiSelect,
      control: (base: React.CSSProperties) => ({
        ...customStylesMultiSelect.control(base),
        maxWidth: fieldWidth || 'initial',
      }),
      menu: (base: React.CSSProperties) => base,
    };

    return (
      <div className={'multiSelectContainer'}>
        <label className={'multiSelectLabel'}>{label}</label>
        <TransitionGroup className={'multiSelectSelectedValuesContainer'}>
          {selectedValues.map(e => (
            <CSSTransition
              key={e.value}
              timeout={100}
              classNames={{
                enter: 'itemEnter',
                enterActive: 'itemEnterActive',
                enterDone: 'itemEnterDone',
                exit: 'itemExit',
                exitActive: 'itemExitActive',
                exitDone: 'itemExitDone',
              }}
              appear
              mountOnEnter
              unmountOnExit
            >
              <SelectedValue
                value={e}
                removeSelectedValue={this.removeSelectedValue}
                key={`${label}${e.value}${e.label}`}
              />
            </CSSTransition>
          ))}
        </TransitionGroup>
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
        <CreatableSelect
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
          formatCreateLabel={v => `Opprett "${v}"`}
        />
      </div>
    );
  }
}
