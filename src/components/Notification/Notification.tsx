import * as React from 'react';
import {NotificationTypes} from "./NotificationTypes";
import { Icon } from "../../"
import './Notification.css';


export interface Props {
  message: string;
  type: NotificationTypes;
  closeFunc?: Function;
}

function getTitle(type: NotificationTypes):string {
    switch(type) {
      case NotificationTypes.Information:
          return "Informasjon";
      case NotificationTypes.Warning:
          return "Advarsel"
      case NotificationTypes.Error:
          return "Noe gikk galt"
      default: 
        return "Melding"
    }
}

function getIcon(type: NotificationTypes):any {
  switch(type) {
    case NotificationTypes.Information:
        return <Icon type="light" name="emoji_1" />
    case NotificationTypes.Warning:
        return <Icon type="light" name="emoji_3" />
    case NotificationTypes.Error:
        return <Icon type="light" name="emoji_2" />
    default: 
    return <Icon type="light" name="emoji_4" />
  }
}

export const Notification = (props: Props) => {
  const { message, type, closeFunc } = props;
  const close = () => {
      if(closeFunc) {
        closeFunc();
      }
  }
  const autoCloseClass = closeFunc ? '' : 'autoClose';
  const notificationClass = `notification ${NotificationTypes[type].toLocaleLowerCase()} ${autoCloseClass}`;
  return (
    <div className={notificationClass} >
        <div className="check">{getIcon(type)}</div>
        <div className="content">
            <span className="title">{getTitle(type)}</span>
            <span className="message">{message}</span>
        </div>
        { closeFunc ?
        <div className="close">
            <button onClick={close}>Lukk</button>
        </div> :
        null
        }
      </div> 
  );
};
