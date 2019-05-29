import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, boolean } from '@storybook/addon-knobs';
import { Checkbox } from './Checkbox';
import { RadioButtons } from './RadioButtons';

interface IProps {
  label: string;
}

interface IState {
  isChecked: boolean;
}

interface IRadioState {
  selected: { label: string };
}

class CheckboxWrapper extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = { isChecked: false };
  }

  onChange = (isChecked: boolean) => this.setState({ isChecked });

  render() {
    const { label } = this.props;
    const { isChecked } = this.state;
    return (
      <Checkbox
        label={text('label', label)}
        isChecked={isChecked}
        onChange={this.onChange}
      />
    );
  }
}

class RadioButtonsWrapper extends React.Component<{}, IRadioState> {
  constructor(props: IProps) {
    super(props);
  }
  componentWillMount() {
    this.setState({ selected: this.options[0] });
  }
  onChange = (selected: { label: string }) => this.setState({ selected });
  options = [
    { label: 'Egen utgave' },
    { label: 'NAV SVO' },
    { label: 'NAV SBL' }
  ];

  render() {
    const { selected } = this.state;
    return (
      <RadioButtons
        selected={selected}
        options={this.options}
        onChange={this.onChange}
        inline={boolean('inline', true)}
      />
    );
  }
}

(storiesOf('Components/Checkbox', module) as any)
  .addWithJSX('Basic', () => (
    <CheckboxWrapper label={'Dette er en sjekkboks'} />
  ))
  .addWithJSX('Radio buttons', () => <RadioButtonsWrapper />);
