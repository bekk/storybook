import * as React from 'react';
import { Icon } from '../../';
import './Notification.css';

type NotificationTypes = 'INFO' | 'WARNING' | 'ERROR';

export interface Props {
  notification: {
    type: NotificationTypes;
    title: string;
    message: string;
  };
  visible?: boolean;
  onClose?: () => void;
}

function getIcon(type: NotificationTypes): any {
  switch (type) {
    case 'INFO':
      return <Icon type="light" name="emoji_1" />;
    case 'WARNING':
      return <Icon type="light" name="emoji_3" />;
    case 'ERROR':
      return <Icon type="light" name="emoji_2" />;
    default:
      return <Icon type="light" name="emoji_4" />;
  }
}

export const Notification = ({ notification, visible, onClose }: Props) => {
  const { type, title, message } = notification;
  const closeClass =
    visible === true ? 'open' : visible === false ? 'close' : '';
  const notificationClass = `notification ${notification.type} ${closeClass}`;
  return (
    <div className={notificationClass}>
      <div className="check">{getIcon(type)}</div>
      <div className="content">
        <span className="title">{title}</span>
        <span className="message">{message}</span>
      </div>
      {onClose ? (
        <div className="close">
          <button onClick={onClose}>Lukk</button>
        </div>
      ) : null}
    </div>
  );
};
