import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { text, object, boolean } from '@storybook/addon-knobs/react';
import { CreateableMultiSelect } from './CreateableMultiSelect';
import { ICreateableMultiSelectOption } from '../types';

type IProps = {};

export const colourOptions = [
  { value: 0, label: 'Ocean' },
  { value: 1, shorthand: 'Blå', label: 'Blue' },
  { value: 2, label: 'Purple' },
  { value: 3, label: 'Red' },
  { value: 4, label: 'Orange' },
  { value: 5, label: 'Yellow' },
  { value: 6, label: 'Green' },
  { value: 7, label: 'Forest' },
  { value: 8, label: 'Slate' },
  { value: 9, label: 'Silver' },
];

class CreateableSingleSelectWrapper extends React.Component<
  IProps,
  { selected: ICreateableMultiSelectOption[] }
> {
  constructor(props: IProps) {
    super(props);
    this.state = { selected: [colourOptions[1], colourOptions[3]] };
  }

  public render() {
    return (
      <CreateableMultiSelect
        label={text('label', 'Velg/opprett farger')}
        placeholder={text('placeholder', 'Velg/lag masse!')}
        options={object('options', colourOptions)}
        updateSelection={(s: ICreateableMultiSelectOption[]) =>
          this.setState({ selected: s })
        }
        selectedValues={object('selectedValues', this.state.selected)}
        fieldWidth={text('fieldWidth (optional)', '100%')}
        showSearchIcon={boolean('showSearchIcon(optional)', true)}
      />
    );
  }
}

(storiesOf('Components/CreatableMultiSelect', module) as any).addWithJSX(
  'CreatableMultiSelect',
  () => <CreateableSingleSelectWrapper />
);
