import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { text, object } from '@storybook/addon-knobs/react';
import { CreateableMultiSelect } from './CreateableMultiSelect';
import { ICreateableMultiSelectOption } from '../types';



type IProps = {};


export const colourOptions = [
    { value: 'ocean', label: 'Ocean', color: '#00B8D9', isFixed: true },
    { value: 'blue', label: 'Blue', color: '#0052CC' },
    { value: 'purple', label: 'Purple', color: '#5243AA' },
    { value: 'red', label: 'Red', color: '#FF5630', isFixed: true },
    { value: 'orange', label: 'Orange', color: '#FF8B00' },
    { value: 'yellow', label: 'Yellow', color: '#FFC400' },
    { value: 'green', label: 'Green', color: '#36B37E' },
    { value: 'forest', label: 'Forest', color: '#00875A' },
    { value: 'slate', label: 'Slate', color: '#253858' },
    { value: 'silver', label: 'Silver', color: '#666666' },
];

class CreateableSingleSelectWrapper extends React.Component<
    IProps,
    { selected: ICreateableMultiSelectOption[] }
    > {
    constructor(props: IProps) {
        super(props);
        this.state = { selected: [] };
    }

    public render() {
        return (
            <CreateableMultiSelect
                label={text('label', 'Velg farger')}
                placeholder={text('placeholder', 'Velg masse!')}
                options={object('options', colourOptions)}
                updateSelection={(s: ICreateableMultiSelectOption[]) =>
                    this.setState({ selected: s })
                }
                selectedValues={object('selectedValues', this.state.selected)}
            />
        );
    }
}

(storiesOf('Components/CreatableMultiSelect', module) as any).addWithJSX(
    'CreatableMultiSelect',
    () => <CreateableSingleSelectWrapper />
);
