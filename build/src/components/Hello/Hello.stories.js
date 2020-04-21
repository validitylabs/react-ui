import * as React from 'react';
// import { action } from '@storybook/addon-actions';
import { Hello } from './index';
export default {
    title: 'Hello',
    component: Hello
};
export var Hello1 = function () { return (React.createElement(Hello, { text: "hello" })); };
export var Fresh = function () { return (React.createElement(Hello, { text: "fresh" })); };
//# sourceMappingURL=Hello.stories.js.map