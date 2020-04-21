import React from 'react';
import { shallow } from 'enzyme';
import { Hello } from './index';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
it('renders without crashing', function () {
    shallow(React.createElement(Hello, { text: "test run" }));
});
//# sourceMappingURL=Hello.test.js.map