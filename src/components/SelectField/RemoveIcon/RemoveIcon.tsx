import * as React from 'react';
import './RemoveIcon.css';
interface IProps {
  onClick: (x: any) => void;
}

const RemoveIcon = (props: IProps) => {
  return (
    <div
      className={'removeIcon'}
      onClick={props.onClick}
      title="Fjern denne"
    >
      <div className={'removeIconContainer'}>
        <svg x="0px" y="0px" viewBox="0 0 10 10">
          <path d="M5.9,5l3.9-3.9c0.3-0.3,0.3-0.7,0-0.9s-0.7-0.3-0.9,0L5,4.1L1.1,0.2c-0.3-0.3-0.7-0.3-0.9,0s-0.3,0.7,0,0.9L4.1,5L0.2,8.9c-0.3,0.3-0.3,0.7,0,0.9C0.3,9.9,0.5,10,0.7,10S1,9.9,1.1,9.8L5,5.9l3.9,3.9C9,9.9,9.2,10,9.3,10c0.2,0,0.3-0.1,0.5-0.2c0.3-0.3,0.3-0.7,0-0.9L5.9,5z" />
        </svg>
      </div>
    </div>
  );
};

export default RemoveIcon;
