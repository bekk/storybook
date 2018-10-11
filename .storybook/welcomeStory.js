import React from "react";

import { storiesOf } from "@storybook/react";
import { wInfo } from "./utils";

storiesOf("Velkommen", module).addWithJSX(
  "- her finner du react komponenter for Bekk ",
  wInfo(`


    Hvordan bruke det: https://github.com/bekk/komponent-bibliotek            
    Savner du noen komponenter eller har lyst til å bidra: See https://github.com/bekk/komponent-bibliotek .        
    Funnet noen bugs? rapporter til: https://github.com/bekk/komponent-bibliotek/issues

  `)(() => <div><h1></h1></div>)
);
