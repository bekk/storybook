import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { text, object, boolean } from '@storybook/addon-knobs/react';
import { MultiSelect } from './MultiSelect';
import { IMultiSelectOption } from '../types';

const options: IMultiSelectOption[] = [
  { label: 'Rødbrun-ish', shorthand: 'Rødbrun', value: 0 },
  { label: 'Morgendis', shorthand: 'Grå', value: 1 },
  { label: 'Blå', shorthand: 'Blå som havet, as', value: 2 },
  { label: 'Gul', shorthand: 'Gul', value: 3 },
  { label: 'Terracotta', shorthand: 'Terracottattata', value: 4 },
  { label: 'Laaaaaaaaangt navn på noe', shorthand: 'Kortversjon', value: 5 },
  {
    label: 'Leeeeeeeeeengre navn på noe',
    shorthand: 'Også langt her, for å teste',
    value: 6
  },
  { label: 'Brun', shorthand: 'Brun', value: 7 },
  { label: 'Grønn', shorthand: 'Grønn', value: 8 },
  { label: 'Oransje', shorthand: 'Oransje', value: 9 },
  { label: 'Beige', shorthand: 'Beige', value: 10 },
  { label: 'Lilla', shorthand: 'Lilla', value: 11 },
  { label: 'Sort', shorthand: 'Sort', value: 12 },
  { label: 'Soloppgang', shorthand: 'Soloppgang', value: 13 },
  { label: 'Soloppgang kontrast', shorthand: 'Soloppgang kontrast', value: 14 }
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
        fieldWidth={text('fieldWidth (optional)', '1000px')}
        showSearchIcon={boolean('showSearchIcon (optional)', false)}
      />
    );
  }
}

(storiesOf('Components/MultiSelect', module) as any).addWithJSX(
  'MultiSelect',
  () => <MultiSelectWrapper />
);
