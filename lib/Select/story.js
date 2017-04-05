'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _index = require('../index.js');

var _storybook = require('@kadira/storybook');

var _reactStorybookAddonInfo = require('@kadira/react-storybook-addon-info');

var _reactStorybookAddonInfo2 = _interopRequireDefault(_reactStorybookAddonInfo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
    inline: false,
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
    inline: false,
    propTables: [_index.Select, _index.SelectItem]
}).addWithInfo('Simple Select with many values', 'Having many values will lead to a scrollable select list. When using arrow keys, scrolling has to be triggered automatically.', function () {
    return _react2.default.createElement(
        _index.Select,
        {
            defaultValue: 'test'
        },
        new Array(20).fill().map(function (item, index) {
            return _react2.default.createElement(
                _index.SelectItem,
                {
                    value: 'test-' + index,
                    key: 'selectitem-' + index
                },
                'Test-' + index
            );
        })
    );
}, {
    source: true,
    inline: false,
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
    inline: false,
    propTables: [_index.Select, _index.SelectItem]
}).addWithInfo('Disabled select', 'The select is disabled and can not be used at all.', function () {
    return _react2.default.createElement(_index.Select, {
        disabled: true,
        defaultValue: 'test'
    });
}, {
    source: true,
    inline: false,
    propTables: [_index.Select, _index.SelectItem]
}).addWithInfo('Using the value prop', 'The select will change its value to the given value.', function () {
    var values = ['test1', 'test2', 'test3', 'test4'];

    var OverwriteSelect = function (_React$Component) {
        _inherits(OverwriteSelect, _React$Component);

        function OverwriteSelect(props) {
            _classCallCheck(this, OverwriteSelect);

            var _this = _possibleConstructorReturn(this, (OverwriteSelect.__proto__ || Object.getPrototypeOf(OverwriteSelect)).call(this, props));

            _this.state = {
                value: 'test3'
            };
            _this.changeValue = _this.changeValue.bind(_this);
            return _this;
        }

        _createClass(OverwriteSelect, [{
            key: 'changeValue',
            value: function changeValue() {
                var currentIndex = (values.indexOf(this.state.value) + 1) % values.length;
                this.setState({
                    value: values[currentIndex]
                });
            }
        }, {
            key: 'render',
            value: function render() {
                return _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'button',
                        { onClick: this.changeValue },
                        'change the current value'
                    ),
                    _react2.default.createElement('hr', null),
                    _react2.default.createElement(
                        _index.Select,
                        { value: this.state.value },
                        values.map(function (item) {
                            return _react2.default.createElement(
                                _index.SelectItem,
                                { value: item, key: item },
                                item
                            );
                        })
                    )
                );
            }
        }]);

        return OverwriteSelect;
    }(_react2.default.Component);

    return _react2.default.createElement(OverwriteSelect, null);
}, {
    source: true,
    inline: false
});