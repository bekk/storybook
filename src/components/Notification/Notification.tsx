import * as React from 'react';
import {NotificationTypes} from "./NotificationTypes";
import { Icon } from "../../"
import './Notification.css';


export interface Props {
  message: string;
  type: NotificationTypes;
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
