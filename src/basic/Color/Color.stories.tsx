import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { wInfo } from '../../utils';

function createDivStyle(color: string): any {
  return {
    height: '100px',
    width: '100px',
    backgroundColor: color
  };
}

(storiesOf('Basic/Color', module) as any)
  .add(
    'Om fargepaletten',
    () => <div style={createDivStyle('var(--svart)')} />,
    {
      info: wInfo(`
    Fargepaletten er delt inn i primær ogsekundærfarger.  
    Fargene bygger  på  et  Nordisk, rent, minimalistisk og usminket utrykk.

    Sort og hvit er primærfargene og det er disse fargene som skal ha mest vekt i designet.

    Sekundærfargene er støttefarger til det sorte og hvite og er basert på været og lokasjonen til Bekk.


    Bruk:

    Alle fargene ligger på css root (:root). Så alt du trenger å gjøre er å referere til variabelen i din css klasse.
  `)
    }
  )
  .addWithJSX('Overskyet', () => (
    <div>
      <h3>Oveskyet</h3>
      <div style={createDivStyle('var(--overskyet)')} />
      <h3>Oveskyet-kontrast</h3>
      <div style={createDivStyle('var(--overskyet-kontrast)')} />
    </div>
  ))
  .addWithJSX('Soloppgang', () => (
    <div>
      <h3>Soloppgang</h3>
      <div style={createDivStyle('var(--soloppgang)')} />
      <h3>Soloppgang-kontrast</h3>
      <div style={createDivStyle('var(--soloppgang-kontrast)')} />
    </div>
  ))
  .addWithJSX('Skyfritt', () => (
    <div>
      <h3>Skyfritt</h3>
      <div style={createDivStyle('var(--skyfritt)')} />
      <h3>Skyfritt-kontast</h3>
      <div style={createDivStyle('var(--skyfritt-kontrast)')} />
    </div>
  ))
  .addWithJSX('Solnegang', () => (
    <div>
      <h3>Solnedgang</h3>
      <div style={createDivStyle('var(--solnedgang)')} />
      <h3>Solnedgang-kontrast</h3>
      <div style={createDivStyle('var(--solnedgang-kontrast)')} />
    </div>
  ))
  .addWithJSX('Kveld', () => (
    <div>
      <h3>Kveld</h3>
      <div style={createDivStyle('var(--kveld)')} />
      <h3>Kveld-kontrast</h3>
      <div style={createDivStyle('var(--kveld-kontrast)')} />
    </div>
  ))
  .addWithJSX('Natt', () => (
    <div>
      <h3>Natt</h3>
      <div style={createDivStyle('var(--natt)')} />
      <h3>Natt-kontrast</h3>
      <div style={createDivStyle('var(--natt-kontrast)')} />
    </div>
  ))
  .addWithJSX('Regn', () => (
    <div>
      <h3>Regn</h3>
      <div style={createDivStyle('var(--regn)')} />
      <h3>Regn-kontrast</h3>
      <div style={createDivStyle('var(--regn-kontrast)')} />
    </div>
  ))
  .addWithJSX('Gul', () => (
    <div>
      <h3>Gul</h3>
      <div style={createDivStyle('var(--gul)')} />
      <h3>Gul-kontrast</h3>
      <div style={createDivStyle('var(--gul-kontrast)')} />
    </div>
  ))
  .addWithJSX('Grønn', () => (
    <div>
      <h3>Grønn</h3>
      <div style={createDivStyle('var(--grønn)')} />
      <h3>Grønn-kontrast</h3>
      <div style={createDivStyle('var(--grønn-kontrast)')} />
    </div>
  ))
  .addWithJSX('Morgendis', () => (
    <div>
      <h3>Morgendis</h3>
      <div style={createDivStyle('var(--morgendis)')} />
    </div>
  ));
