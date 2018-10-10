import * as React from "react";
import { storiesOf } from "@storybook/react";
import { Notification } from "./Notification";
import {NotificationTypes} from "./NotificationTypes";
import { text } from "@storybook/addon-knobs/react";

(storiesOf("Components/Notification", module) as any)
  .addWithJSX(
    "Infomation",
    (() => (
      <Notification
        message={text("message", "Timene dine ble låst")}
        type={NotificationTypes.Information}
      />
    ))
  ).addWithJSX(
    "Warning",
    (() => (
      <Notification
        message={text("message", "Husk å sjekk at alt stemmer!")}
        type={NotificationTypes.Warning}
      />
    ))
  )
  .addWithJSX(
  "Error",
  (() => (
    <Notification
      message={text("message", "Timekoden ADM1001 krever at du legger til kommentar før du låser")}
      type={NotificationTypes.Error}
    />
  ))
);
