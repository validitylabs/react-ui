import * as React from 'react';
// import { action } from '@storybook/addon-actions';
import { Hello } from './index';

export default {
  title: 'Hello',
  component: Hello
};

export const Hello = () => (
  <Hello text="hello" />
);

export const Fresh = () => (
  <Hello text="fresh" />
);
