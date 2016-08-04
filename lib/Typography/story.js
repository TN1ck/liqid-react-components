'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _index = require('../index.js');

var _storybook = require('@kadira/storybook');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _storybook.storiesOf)('Typography', module).add('Headline', function () {
    return _react2.default.createElement(
        _index.Headline,
        {
            tag: 'h1',
            type: 'large'
        },
        'Test'
    );
});