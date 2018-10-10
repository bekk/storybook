import React from "react";

import { storiesOf } from "@storybook/react";
import { wInfo } from "./utils";

storiesOf("Bekk Storybook", module).addWithJSX(
  "- Components for Bekk🎊",
  wInfo(`

    This is components for the company Bekk Consulting as.

    How to use it: https://github.com/bekk/komponent-bibliotek            
    Do you miss som components? See https://github.com/bekk/komponent-bibliotek on how to contribute.        
    Found any issues? please report at: https://github.com/bekk/komponent-bibliotek/issues

  `)(() => <div><h1></h1></div>)
);
