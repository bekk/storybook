import * as React from 'react';

export interface Props {
  name: string;
}

export const Color = (props: Props) => {
  const { name } = props;

  let iconClass = `color-box ${name}`
  return (
    <div className={iconClass} />
  );
};