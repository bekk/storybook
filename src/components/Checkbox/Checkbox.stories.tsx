import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import { Checkbox } from './Checkbox';

interface IProps {
  label: string;
}

interface IState {
  isChecked: boolean;
}

class CheckboxWrapper extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = { isChecked: false };
  }

  onChange = (isChecked: boolean) => this.setState({ isChecked });

  public render() {
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

(storiesOf('Components/Checkbox', module) as any).addWithJSX('Basic', () => (
  <CheckboxWrapper label={'Dette er en sjekkboks'} />
));
