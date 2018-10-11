import * as React from "react";
import { storiesOf } from "@storybook/react";
import { wInfo } from "../../utils";
import { Icon } from "./Icon";
import { text, number } from "@storybook/addon-knobs/react";



(storiesOf("Basic/Icons", module) as any)
  .addWithJSX(
    "custom",
    wInfo(`
      Du kan dynamisk endre ikonene hvis du velger 'knobs' i bunnmenyen

      For eksempel:        

        - type: dark,
        - name: bursdag,
        - height: 300

        (obs! du kan endre til light som type, men du vil ikke se den)

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