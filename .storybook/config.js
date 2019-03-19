import { configure } from '@storybook/react';
import { setAddon, addDecorator } from '@storybook/react';
import JSXAddon from 'storybook-addon-jsx';
import { withKnobs } from '@storybook/addon-knobs/react';
import { withInfo } from '@storybook/addon-info';
import '../src/fonts/webfonts.css';
addDecorator(withInfo);
addDecorator(withKnobs);
setAddon(JSXAddon);

const stories = require.context('../src/', true, /\.stories\.tsx$/);

function loadStories() {
  require('./welcomeStory');
  stories.keys().forEach(stories);
}

configure(loadStories, module);
