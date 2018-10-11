import * as React from "react";
import { storiesOf } from "@storybook/react";
import { wInfo } from "../../utils";

function createDivStyle(color:string):any {
  return {
    height: '100px',
    width: '100px',
    backgroundColor: color
  };
}

(storiesOf("Basic/Color", module) as any)
  .addWithJSX(
    "Om fargepaletten",
    wInfo(`
    Fargepaletten er delt inn i primær ogsekundærfarger.  
    Fargene bygger  på  et  Nordisk, rent, minimalistisk og usminket utrykk.

    Sort og hvit er primærfargene og det er disse fargene som skal ha mest vekt i designet.

    Sekundærfargene er støttefarger til det sorte og hvite og er basert på været og lokasjonen til Bekk.


    Bruk:

    Alle fargene ligger på css root (:root). Så alt du trenger å gjøre er å referere til variabelen i din css klasse.
    ~~~css
    .min-css {
      background-color: var(--solnedgang);
    }
    ~~~

  `)
    (() => (
      <div style={createDivStyle('var(--svart)')}></div>
    ))
  ).addWithJSX(
    "Overskyet",
    (() => (
      <div>
        <h3>Oveskyet</h3>
        <div style={createDivStyle('var(--overskyet)')}></div>
        <h3>Oveskyet-kontrast</h3>
        <div style={createDivStyle('var(--overskyet-kontrast)')}></div>
      </div>
    ))
  ).addWithJSX(
    "Soloppgang",
    (() => (
      <div>
        <h3>Soloppgang</h3>
        <div style={createDivStyle('var(--soloppgang)')}></div>
        <h3>Soloppgang-kontrast</h3>
        <div style={createDivStyle('var(--soloppgang-kontrast)')}></div>
      </div>
    ))
  ).addWithJSX(
    "Skyfritt",
    (() => (
      <div>
        <h3>Skyfritt</h3>
        <div style={createDivStyle('var(--skyfritt)')}></div>
        <h3>Skyfritt-kontast</h3>
        <div style={createDivStyle('var(--skyfritt-kontrast)')}></div>
      </div>
    ))
  ).addWithJSX(
    "Solnegang",
    (() => (
      <div>
        <h3>Solnedgang</h3>
        <div style={createDivStyle('var(--solnedgang)')}></div>
        <h3>Solnedgang-kontraskt</h3>
        <div style={createDivStyle('var(--solnedgang-kontrast)')}></div>
      </div>
    ))
  ).addWithJSX(
    "Kveld",
    (() => (
      <div>
        <h3>Kveld</h3>
        <div style={createDivStyle('var(--kveld)')}></div>
        <h3>Kveld-kontraskt</h3>
        <div style={createDivStyle('var(--kveld-kontrast)')}></div>
      </div>
    ))
  ).addWithJSX(
    "Natt",
    (() => (
      <div>
        <h3>Natt</h3>
        <div style={createDivStyle('var(--natt)')}></div>
        <h3>Natt-kontraskt</h3>
        <div style={createDivStyle('var(--natt-kontrast)')}></div>
      </div>
    ))
  ).addWithJSX(
    "Regn",
    (() => (
      <div>
        <h3>Regn</h3>
        <div style={createDivStyle('var(--regn)')}></div>
        <h3>Regn-kontraskt</h3>
        <div style={createDivStyle('var(--regn-kontrast)')}></div>
      </div>
    ))
  ).addWithJSX(
    "Gul",
    (() => (
      <div>
        <h3>Gul</h3>
        <div style={createDivStyle('var(--gul)')}></div>
        <h3>Gul-kontraskt</h3>
        <div style={createDivStyle('var(--gul-kontrast)')}></div>
      </div>
    ))
  ).addWithJSX(
    "Grønn",
    (() => (
      <div>
        <h3>Grønn</h3>
        <div style={createDivStyle('var(--grønn)')}></div>
        <h3>Grønn-kontraskt</h3>
        <div style={createDivStyle('var(--grønn-kontrast)')}></div>
      </div>
    ))
  );