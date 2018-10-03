import React from "react";

import { storiesOf } from "@storybook/react";
import { wInfo } from "./utils";

storiesOf("Welcome", module).addWithJSX(
  "to your Bekk Storybook🎊",
  wInfo(`

    ### Notes

    Everyone is free to contribute!:

  `)(() => <div>Eksempel attributt</div>)
);
