import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { text, object, boolean } from '@storybook/addon-knobs/react';
import { SingleSelect } from './SingleSelect';
import { ISelectOption } from './types';

const options: ISelectOption[] = [
  { label: 'Rød', value: 0 },
  { label: 'Grønn', value: 1 },
  { label: 'Blå', value: 2 },
  { label: 'Gul', value: 3 },
  { label: 'Terracotta', value: 4 }
];

type IProps = {};

class SingleSelectWrapper extends React.Component<
  IProps,
  { selected?: ISelectOption }
> {
  constructor(props: IProps) {
    super(props);
    this.state = { selected: undefined };
  }

  public render() {
    return (
      <SingleSelect
        label={text('label', 'Velg farge')}
        selectedOption={object('selectedOption', this.state.selected)}
        options={object('options', options)}
        placeholder={text('placeholder', 'Velg!')}
        updateSelectedOption={(s: ISelectOption) =>
          this.setState({ selected: s })
        }
        disabled={boolean('disabled', false)}
      />
    );
  }
}

(storiesOf('Components/SelectField', module) as any).addWithJSX(
  'SingleSelect',
  () => <SingleSelectWrapper />
);
