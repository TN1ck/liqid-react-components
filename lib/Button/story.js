'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _index = require('../index.js');

var _storybook = require('@kadira/storybook');

var _reactStorybookAddonInfo = require('@kadira/react-storybook-addon-info');

var _reactStorybookAddonInfo2 = _interopRequireDefault(_reactStorybookAddonInfo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _storybook.setAddon)(_reactStorybookAddonInfo2.default);

(0, _storybook.storiesOf)('Button', module).addWithInfo('Button Primary', 'General button without specific properties', function () {
    return _react2.default.createElement(
        _index.Button,
        null,
        'Abschicken'
    );
}, {
    source: true,
    inline: true,
    propTables: [_index.Button]
}).addWithInfo('Button Secondary', 'General button without specific properties', function () {
    return _react2.default.createElement(
        _index.Button,
        {
            type: 'secondary'
        },
        'Abschicken'
    );
}, {
    source: true,
    inline: true,
    propTables: [_index.Button]
}).addWithInfo('Button Primary as usual link', 'General button without specific properties', function () {
    return _react2.default.createElement(
        _index.Button,
        {
            type: 'primary',
            tag: 'a'
        },
        'Abschicken'
    );
}, {
    source: true,
    inline: true,
    propTables: [_index.Button]
});