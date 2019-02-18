import * as React from 'react';
import Select from 'react-select';

import { CSSProperties } from 'react';
import {
  BEKK_SORT,
  OVERSKYET,
  REGN_KONTRAST,
  REGN
} from '../../constants/styles';
import { ISelectOption } from './types';
import './SingleSelect.css';
import { Theme } from 'react-select/lib/types';

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
    height: '44px',
    outline: 0,
    transition: 'all 0s linear',
    width: '100%'
  }),
  menuContainer: (base: CSSProperties) => ({
    '&:focus': { border: 'none', outline: 0, 'box-shadow': 'none' },
    border: 'none',
    'box-shadow': 'none',
    outline: 0
  }),
  placeholder: (base: CSSProperties, state: any) => ({
    color: state.isDisabled ? 'hsl(0, 0%, 60%)' : base.color
  }),
  menuList: (base: CSSProperties) => ({
    padding: 0
  })
};

function themeTransform(theme: Theme): Theme {
  return {
    ...theme,
    borderRadius: 0,
    colors: {
      ...theme.colors,
      primary: REGN_KONTRAST,
      primary25: REGN
    }
  };
}

interface IOwnProps {
  selectedOption?: ISelectOption;
  options: ISelectOption[];
  updateSelectedOptions: (option: ISelectOption) => void;
  label: string;
  placeholder: string;
  disabled?: boolean;
}

type IProps = IOwnProps;

export class SingleSelect extends React.PureComponent<IProps, {}> {
  constructor(props: IProps) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  public handleChange(e: ISelectOption) {
    this.props.updateSelectedOptions(e);
  }

  public render() {
    const {
      disabled,
      label,
      options,
      selectedOption,
      placeholder
    } = this.props;
    return (
      <div className={'container'}>
        <div>
          <label className={'label'}>{label}</label>
        </div>
        <Select
          className={'select'}
          options={options}
          placeholder={placeholder}
          value={selectedOption || ('' as any)}
          onChange={this.handleChange}
          styles={customStyles}
          isDisabled={disabled}
          theme={themeTransform}
        />
      </div>
    );
  }
}
