import * as React from "react";
import Select from "react-select";
import { IMultiSelectOption, Equatable } from "../types";
import "./MultiSelect.css";
import { SelectedValue } from "../SelectedValue";
import { customStylesMultiSelect, themeTransform } from "../constants";
import { SearchIcon } from "../SearchIcon";
import "../CreateableMultiSelect/CreateableMultiSelect.css";
import { TransitionGroup, CSSTransition } from "react-transition-group";

interface IProps<Eq extends Equatable> {
  label: string;
  placeholder: string;
  selectedValues: IMultiSelectOption<Eq>[];
  options: IMultiSelectOption<Eq>[];
  updateSelection: (selected: IMultiSelectOption<Eq>[]) => void;
  fieldWidth?: string;
  showSearchIcon?: boolean;
}

interface IState {
  inputField: string;
}

export class MultiSelect<Eq extends Equatable> extends React.Component<
  IProps<Eq>,
  IState
> {
  constructor(props: IProps<Eq>) {
    super(props);
    this.state = { inputField: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.removeSelectedValue = this.removeSelectedValue.bind(this);
  }

  public handleChange(e: IMultiSelectOption<Eq>[]) {
    this.props.updateSelection(e);
  }

  public handleInputChange(s: string) {
    this.setState({ inputField: s });
  }

  public removeSelectedValue(value: IMultiSelectOption<Eq>) {
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
        maxWidth: fieldWidth || "initial"
      }),
      menu: (base: React.CSSProperties) => ({
        ...base,
        maxWidth: fieldWidth || "initial"
      })
    };

    return (
      <div className={"multiSelectContainer"}>
        <label className={"multiSelectLabel"}>{label}</label>
        <TransitionGroup className={"multiSelectSelectedValuesContainer"}>
          {selectedValues.map(e => (
            <CSSTransition
              key={e.value}
              timeout={100}
              classNames={{
                enter: "itemEnter",
                enterActive: "itemEnterActive",
                enterDone: "itemEnterDone",
                exit: "itemExit",
                exitActive: "itemExitActive",
                exitDone: "itemExitDone"
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
        <div className={"multiSelectPlaceholder"}>
          {!inputField && (
            <>
              {showSearchIcon && (
                <SearchIcon className={"multiSelectPlaceholderIcon"} />
              )}
              <div className={"multiSelectPlaceholderText"}>{placeholder}</div>
            </>
          )}
        </div>
        <Select
          className={"multiSelectSelect"}
          isClearable={false}
          options={options}
          isMulti
          placeholder={""}
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
