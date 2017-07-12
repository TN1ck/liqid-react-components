'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _index = require('./index.js');

var _index2 = _interopRequireDefault(_index);

var _storybook = require('@kadira/storybook');

var _reactStorybookAddonInfo = require('@kadira/react-storybook-addon-info');

var _reactStorybookAddonInfo2 = _interopRequireDefault(_reactStorybookAddonInfo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _storybook.setAddon)(_reactStorybookAddonInfo2.default);

(0, _storybook.storiesOf)('Tooltips', module).addWithInfo('Default', function () {
    return _react2.default.createElement(
        _index2.default,
        {
            text: 'Example'
        },
        'Lorem ipsum dolorelit.'
    );
});