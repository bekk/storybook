import * as React from 'react';
import './Checkbox.css';

const KEY_CODE_ENTER = 13;

interface IProps {
  label: string;
  isChecked: boolean;
  onChange: (value: boolean) => void;
  onDarkBackground?: boolean;
}

export function Checkbox(props: IProps) {
  const { label, isChecked, onChange, onDarkBackground } = props;
  const onCheckboxChange = () => onChange(!isChecked);
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.keyCode === KEY_CODE_ENTER) {
      onCheckboxChange();
    }
  };
  return (
    <div
      className={
        'storybook-checkbox' +
        ' ' +
        (onDarkBackground ? 'checkboxDarkBg' : '') +
        ' ' +
        (isChecked ? 'checked' : 'unChecked')
      }
    >
      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={onCheckboxChange}
          onKeyDown={handleKeyDown}
        />
        {label}
      </label>
    </div>
  );
}
