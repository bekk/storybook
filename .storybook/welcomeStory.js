import React from 'react';

import { storiesOf } from '@storybook/react';
import { wInfo } from './utils';

storiesOf('Velkommen', module).add(
  '- her finner du React-komponenter for Bekk',
  () => (
    <div>
      <h1 />
    </div>
  ),
  {
    info: wInfo(`


    Hvordan bruke det: https://github.com/bekk/storybook            
    Savner du noen komponenter eller har lyst til å bidra: See https://github.com/bekk/storybook .        
    Funnet noen bugs? rapporter til: https://github.com/bekk/storybook/issues

  `),
  },
);
