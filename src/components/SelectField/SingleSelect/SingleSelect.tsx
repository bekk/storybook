import * as React from 'react';
import Select from 'react-select';
import { ISelectOption } from '../types';
import './SingleSelect.css';
import { customStylesSingleSelect, themeTransform } from '../constants';
import { Placeholder } from './Placeholder/Placeholder';

interface IProps {
  selectedOption?: ISelectOption;
  options: ISelectOption[];
  updateSelectedOption: (option: ISelectOption) => void;
  label: string;
  placeholder: string;
  disabled?: boolean;
  showSearchIcon?: boolean;
}

export class SingleSelect extends React.PureComponent<IProps, {}> {
  constructor(props: IProps) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  public handleChange(e: ISelectOption) {
    this.props.updateSelectedOption(e);
  }

  public render() {
    const {
      disabled,
      label,
      options,
      selectedOption,
      placeholder,
      showSearchIcon,
    } = this.props;
    return (
      <div className={'singleSelectContainer'}>
        <div>
          <label className={'singleSelectLabel'}>{label}</label>
        </div>
        <Select
          className={'singleSelectSelect'}
          options={options}
          placeholder={placeholder}
          components={showSearchIcon ? { Placeholder } : {}}
          value={selectedOption || ('' as any)}
          onChange={this.handleChange}
          styles={customStylesSingleSelect}
          isDisabled={disabled}
          theme={themeTransform}
        />
      </div>
    );
  }
}
