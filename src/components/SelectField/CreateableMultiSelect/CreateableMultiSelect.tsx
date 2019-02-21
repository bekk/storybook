import * as React from 'react';
import CreatableSelect from 'react-select/lib/Creatable';
import { ICreateableMultiSelectOption } from '../types';



interface IProps {
    label: string;
    placeholder: string;
    fieldWidth?: string;
    options: ICreateableMultiSelectOption[]
    selectedValues: ICreateableMultiSelectOption[]
    updateSelection: (selected: ICreateableMultiSelectOption[]) => void;

}

interface IState {
    isLoading: boolean;
    value: ICreateableMultiSelectOption;
}


export class CreateableMultiSelect extends React.Component<IProps, IState>{
    constructor(props: IProps) {
        super(props);
        this.state = { value: { value: 'blue', label: 'Blue', color: '#0052CC' }, isLoading: false };
        this.handleChange = this.handleChange.bind(this);
    }

    public handleChange = (newValue: ICreateableMultiSelectOption[], actionMeta: any) => {
        console.log(newValue);
        this.props.updateSelection(newValue);
    };

    public render() {
        const { options, selectedValues } = this.props;
        return (
            <CreatableSelect
                isMulti
                defaultValue={selectedValues}
                onChange={this.handleChange}
                options={options}
            />
        );
    }
}

