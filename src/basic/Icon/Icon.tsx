import * as React from 'react';
import './Base.Icon.css';
import './Dark.Icon.css';
import './Light.Icon.css';


export interface Props {
  name: string;
  type: string;
  height?: number;
}

export const Icon = (props: Props) => {
  const { type, name, height = 100 } = props;
  var divStyle = {
    height,
    width: height
    };
  let iconClass = `svg-icon ${type} ${name}`
  return (
    <span className={iconClass} style={divStyle} />
  );
};