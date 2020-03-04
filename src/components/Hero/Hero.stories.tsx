import * as React from 'react';
// import { action } from '@storybook/addon-actions';
import { Hero } from './index';

export default {
  title: 'Hero',
  component: Hero
};

export const Hello = () => (
  <Hero text="hello" />
);

export const Fresh = () => (
  <Hero text="fresh" />
);
