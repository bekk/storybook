import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { text, object } from '@storybook/addon-knobs/react';
import { MultiSelect } from './MultiSelect';
import { IMultiSelectOption } from '../types';

const options: IMultiSelectOption[] = [
  { label: 'Rødbrun-ish', shorthand: 'Rødbrun', value: 0 },
  { label: 'Morgendis', shorthand: 'Grå', value: 1 },
  { label: 'Blå', shorthand: 'Blå som havet, as', value: 2 },
  { label: 'Gul', shorthand: 'Gul', value: 3 },
  { label: 'Terracotta', shorthand: 'Terracottattata', value: 4 }
];

type IProps = {};

class MultiSelectWrapper extends React.Component<
  IProps,
  { selected: IMultiSelectOption[] }
> {
  constructor(props: IProps) {
    super(props);
    this.state = { selected: [] };
  }

  public render() {
    return (
      <MultiSelect
        label={text('label', 'Velg farger')}
        placeholder={text('placeholder', 'Velg masse!')}
        selectedValues={object('selectedValues', this.state.selected)}
        options={object('options', options)}
        updateSelection={(s: IMultiSelectOption[]) =>
          this.setState({ selected: s })
        }
      />
    );
  }
}

(storiesOf('Components/MultiSelect', module) as any).addWithJSX(
  'MultiSelect',
  () => <MultiSelectWrapper />
);
