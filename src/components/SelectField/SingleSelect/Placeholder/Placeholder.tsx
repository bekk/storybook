import * as React from 'react';
import { components } from 'react-select';
import { PlaceholderProps } from 'react-select/lib/components/Placeholder';
import { SearchIcon } from '../../SearchIcon';
import './Placeholder.css';

export function Placeholder(props: PlaceholderProps<any>) {
  return (
    <div className={'flex'}>
      <div className={'selectPlaceholderIconContainer'}>
        <SearchIcon className={'flex selectPlaceholderIcon'} />
      </div>
      <div className={'flex selectPlaceholderTextContainer'}>
        <components.Placeholder {...props} />
      </div>
    </div>
  );
}
