import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { wInfo } from '../../utils';
import './Font.css';

function createDivStyle(color: string): any {
  return {
    height: '100px',
    width: '100px',
    backgroundColor: color
  };
}

(storiesOf('Basic/Font', module) as any)
  .add('Om fontene', () => <div style={createDivStyle('var(--svart)')} />, {
    info: wInfo(`
        Viktig! Fontene er lisensiert :( . Sjekk med Forvaltning før du tar dem i bruk.

  `)
  })
  .addWithJSX('FFDINWebProLight', () => (
    <div className="FFDINWebProLight">
      Gresshoppen sprang utover mens han sang "Quackquack pata laxa Ææ Øø Åå Zz"
    </div>
  ))
  .addWithJSX('NewZaldBook', () => (
    <div className="NewZaldBook">
      Gresshoppen sprang utover mens han sang "Quackquack pata laxa Ææ Øø Åå Zz"
    </div>
  ))
  .addWithJSX('DINW01LightItalic', () => (
    <div className="DINW01LightItalic">
      Gresshoppen sprang utover mens han sang "Quackquack pata laxa Ææ Øø Åå Zz"
    </div>
  ))
  .addWithJSX('DINW01Regular', () => (
    <div className="DINW01Regular">
      Gresshoppen sprang utover mens han sang "Quackquack pata laxa Ææ Øø Åå Zz"
    </div>
  ))
  .addWithJSX('DINW01Medium', () => (
    <div className="DINW01Medium">
      Gresshoppen sprang utover mens han sang "Quackquack pata laxa Ææ Øø Åå Zz"
    </div>
  ));
