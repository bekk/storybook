import * as React from "react";
import { storiesOf } from "@storybook/react";
import { wInfo } from "../../utils";
import { Icon } from "./Icon";
import { text, number } from "@storybook/addon-knobs/react";



(storiesOf("Core/Icons", module) as any)
  .addWithJSX(
    "custom",
    wInfo(`
      Try to change the value in knobs.

      For example:        

        - type: dark,
        - name: bursdag,
        - height: 300

        (obs! you can change the type to light, but it wont be visible on a white background)
  `)
    (() => (
      <div>
      <Icon 
        type={text("type", "dark")} 
        name={text("name", "bart")} 
        height={number("height", 200)}
        />
    </div>
    ))
  );