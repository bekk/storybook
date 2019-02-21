import * as React from 'react';
import CreatableSelect from 'react-select/lib/Creatable';
import { IOption } from '../types';



interface IProps {
    label: string;
    placeholder: string;
    fieldWidth?: string;
    options: IOption[]
    selectedValues: IOption[]
    updateSelection: (selected: IOption[]) => void;

}

interface IState {
    isLoading: boolean;
    value: IOption;
}


export class CreateableMultiSelect extends React.Component<IProps, IState>{
    constructor(props: IProps) {
        super(props);
        this.state = { value: { value: 'blue', label: 'Blue', color: '#0052CC' }, isLoading: false };
        this.handleChange = this.handleChange.bind(this);
    }

    public handleChange = (newValue: IOption[], actionMeta: any) => {
        console.log(newValue);
        this.props.updateSelection(newValue);
    };

    public render() {
        const { options } = this.props;
        return (
            <CreatableSelect
                isMulti
                onChange={this.handleChange}
                options={options}
            />
        );
    }
}
