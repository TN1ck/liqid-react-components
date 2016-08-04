'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _index = require('../index.js');

var _storybook = require('@kadira/storybook');

var _reactStorybookAddonInfo = require('@kadira/react-storybook-addon-info');

var _reactStorybookAddonInfo2 = _interopRequireDefault(_reactStorybookAddonInfo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _storybook.setAddon)(_reactStorybookAddonInfo2.default);

(0, _storybook.storiesOf)('Select', module).addWithInfo('Simple Select', 'General select usage', function () {
    return _react2.default.createElement(
        _index.Select,
        {
            defaultValue: 'test'
        },
        _react2.default.createElement(
            _index.SelectItem,
            { value: 'test', disabled: true },
            'Test'
        ),
        _react2.default.createElement(
            _index.SelectItem,
            { value: 'test2' },
            'Test2'
        )
    );
}, {
    source: true,
    inline: true,
    propTables: [_index.Select, _index.SelectItem]
}).addWithInfo('Simple Select with disabled value', 'A select can have disabled items. Disabled items are not selectable (mind arrow usage)', function () {
    return _react2.default.createElement(
        _index.Select,
        {
            defaultValue: 'test'
        },
        _react2.default.createElement(
            _index.SelectItem,
            { value: 'test', disabled: true },
            'Test'
        ),
        _react2.default.createElement(
            _index.SelectItem,
            { value: 'test2' },
            'Test2'
        )
    );
}, {
    source: true,
    inline: true,
    propTables: [_index.Select, _index.SelectItem]
}).addWithInfo('Simple Select with many values', 'Having many values will lead to a scrollable select list. When using arrow keys, scrolling has to be triggered automatically.', function () {
    return _react2.default.createElement(
        _index.Select,
        {
            defaultValue: 'test'
        },
        _lodash2.default.range(20).map(function (item, index) {
            return _react2.default.createElement(
                _index.SelectItem,
                {
                    value: 'test-' + item,
                    key: 'selectitem-' + index
                },
                'Test-' + item
            );
        })
    );
}, {
    source: true,
    inline: true,
    propTables: [_index.Select, _index.SelectItem]
}).addWithInfo('Simple Select with Separator', 'The select list can hold items which only are seen as a separator instead of a usual item', function () {
    return _react2.default.createElement(
        _index.Select,
        {
            defaultValue: 'test'
        },
        _react2.default.createElement(_index.SelectItem, { value: '' }),
        _react2.default.createElement(
            _index.SelectItem,
            { value: 'test', disabled: true },
            'Test'
        ),
        _react2.default.createElement(
            _index.SelectItem,
            { value: 'test2' },
            'Test2'
        ),
        _react2.default.createElement(_index.SelectItem, {
            separator: true,
            disabled: true
        }),
        _react2.default.createElement(
            _index.SelectItem,
            { value: 'test3' },
            'Test3'
        ),
        _react2.default.createElement(
            _index.SelectItem,
            { value: 'aest3' },
            'Aest3'
        ),
        _react2.default.createElement(
            _index.SelectItem,
            { value: 'west3' },
            'West3'
        ),
        _react2.default.createElement(
            _index.SelectItem,
            { value: 'west4' },
            'West4'
        ),
        _react2.default.createElement(
            _index.SelectItem,
            { value: 'aest4' },
            'Aest4'
        ),
        _react2.default.createElement(
            _index.SelectItem,
            { value: 'best4' },
            'Best4'
        )
    );
}, {
    source: true,
    inline: true,
    propTables: [_index.Select, _index.SelectItem]
}).addWithInfo('Disabled select', 'The select is disabled and can not be used at all.', function () {
    return _react2.default.createElement(_index.Select, {
        disabled: true,
        defaultValue: 'test'
    });
}, {
    source: true,
    inline: true,
    propTables: [_index.Select, _index.SelectItem]
});