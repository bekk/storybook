import * as React from 'react';
import {NotificationTypes} from "./NotificationTypes";
import './Notification.css';


export interface Props {
  message: string;
  type: NotificationTypes;
}

function getTitle(type: NotificationTypes):string {
    switch(type) {
      case NotificationTypes.Information:
          return "Info";
      case NotificationTypes.Warning:
          return "Advarsel"
      case NotificationTypes.Error:
          return "Noe gikk galt"
      default: 
        return "Melding"
    }
}

function getIcon(type: NotificationTypes):string {
  switch(type) {
    case NotificationTypes.Information:
        return "👍";
    case NotificationTypes.Warning:
        return "⚠️"
    case NotificationTypes.Error:
        return "☹️"
    default: 
      return "Melding"
  }
}

export const Notification = (props: Props) => {
  const { message, type } = props;
  const notificationClass = `notification ${NotificationTypes[type].toLocaleLowerCase()}`;
  return (
    <div className={notificationClass} >
        <div className="check">{getIcon(type)}</div>
        <div className="content">
            <h1>{getTitle(type)}</h1>
            <p>{message}</p>
        </div>
      </div> 
  );
};
