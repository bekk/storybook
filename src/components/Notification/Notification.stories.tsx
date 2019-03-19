import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Notification } from './Notification';

var isVisible = true;

const close = () => {
  isVisible = false;
};

(storiesOf('Components/Notification', module) as any)
  .addWithJSX('Infomation', () => (
    <Notification
      notification={{
        type: 'INFO',
        title: 'Noe bra har skjedd',
        message: 'Timene dine ble låst',
      }}
      visible={true}
    />
  ))
  .addWithJSX('Warning', () => (
    <Notification
      notification={{
        type: 'WARNING',
        title: 'Pass på!',
        message: 'Husk å sjekke at alt stemmer!',
      }}
      visible={true}
    />
  ))
  .addWithJSX('Error', () => (
    <Notification
      notification={{
        type: 'ERROR',
        title: 'Noe har gått galt!',
        message:
          'Timekoden ADM1001 krever at du legger til kommentar før du låser',
      }}
      visible={isVisible}
      onClose={close}
    />
  ));
