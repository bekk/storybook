import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { BekkLogo } from './BekkLogo';

(storiesOf('Components/BekkLogo', module) as any)
  .addWithJSX('Normal', () => <BekkLogo />)
  .addWithJSX('As an HTML element', () => (
    <BekkLogo as="button" onClick={() => alert('Holla at your boy!')} />
  ));
