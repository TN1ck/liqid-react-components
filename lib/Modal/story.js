'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _index = require('./index.js');

var _index2 = _interopRequireDefault(_index);

var _storybook = require('@kadira/storybook');

var _reactStorybookAddonInfo = require('@kadira/react-storybook-addon-info');

var _reactStorybookAddonInfo2 = _interopRequireDefault(_reactStorybookAddonInfo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(0, _storybook.setAddon)(_reactStorybookAddonInfo2.default);

var ToggleModal = function (_React$Component) {
    _inherits(ToggleModal, _React$Component);

    function ToggleModal(props) {
        _classCallCheck(this, ToggleModal);

        var _this = _possibleConstructorReturn(this, (ToggleModal.__proto__ || Object.getPrototypeOf(ToggleModal)).call(this, props));

        _this.openModal = _this.openModal.bind(_this);
        _this.closeModal = _this.closeModal.bind(_this);
        _this.state = {
            show: false
        };
        return _this;
    }

    _createClass(ToggleModal, [{
        key: 'openModal',
        value: function openModal() {
            this.setState({
                show: true
            });
        }
    }, {
        key: 'closeModal',
        value: function closeModal() {
            this.setState({
                show: false
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
                    {
                        onClick: this.openModal
                    },
                    'toggle modal'
                ),
                _react2.default.createElement(
                    _index2.default,
                    _extends({
                        onHide: this.closeModal,
                        show: this.state.show
                    }, this.props),
                    _react2.default.createElement(
                        _index2.default.Header,
                        null,
                        _react2.default.createElement(
                            _index2.default.Title,
                            null,
                            'lorem'
                        )
                    ),
                    _react2.default.createElement(
                        _index2.default.Body,
                        null,
                        'Body Text',
                        this.props.children
                    ),
                    _react2.default.createElement(
                        _index2.default.Footer,
                        null,
                        'Footer'
                    )
                )
            );
        }
    }]);

    return ToggleModal;
}(_react2.default.Component);

(0, _storybook.storiesOf)('Modal', module).addWithInfo('Simple Modal', 'General Modal usage', function () {
    return _react2.default.createElement(
        _index2.default,
        {
            show: true
        },
        _react2.default.createElement(
            _index2.default.Header,
            null,
            _react2.default.createElement(
                _index2.default.Title,
                null,
                'Header Text'
            )
        ),
        _react2.default.createElement(
            _index2.default.Body,
            null,
            'Body Text'
        ),
        _react2.default.createElement(
            _index2.default.Footer,
            null,
            'Footer'
        )
    );
}, {
    source: true,
    inline: false,
    propTables: [_index2.default]
}).addWithInfo('Modal with a button trigger', 'General Modal usage', function () {
    return _react2.default.createElement(ToggleModal, null);
}, {
    source: true,
    inline: false,
    propTables: [_index2.default]
}).addWithInfo('Modal with a button trigger, without close button', 'General Modal usage', function () {
    return _react2.default.createElement(ToggleModal, { showButton: false });
}, {
    source: true,
    inline: false,
    propTables: [_index2.default]
}).addWithInfo('Modal in Modal', 'General Modal usage', function () {
    return _react2.default.createElement(
        ToggleModal,
        null,
        _react2.default.createElement(ToggleModal, null)
    );
}, {
    source: true,
    inline: false,
    propTables: [_index2.default]
});