'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Tooltips = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _styles = require('./styles.css');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Tooltips component
 * @param {Object} props The props for the component
 * @returns {React.Component} Component to be returned
 */
var Tooltips = function (_React$Component) {
    _inherits(Tooltips, _React$Component);

    function Tooltips(props) {
        _classCallCheck(this, Tooltips);

        var _this = _possibleConstructorReturn(this, (Tooltips.__proto__ || Object.getPrototypeOf(Tooltips)).call(this, props));

        _this.isTouchDevice = _this.isTouchDevice.bind(_this);
        _this.handleTouch = _this.handleTouch.bind(_this);
        _this.state = {
            isToggleOn: false,
            onHover: false
        };
        return _this;
    }

    _createClass(Tooltips, [{
        key: 'isTouchDevice',
        value: function isTouchDevice() {
            return 'ontouchstart' in window || navigator.MaxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
        }
    }, {
        key: 'handleTouch',
        value: function handleTouch() {
            this.setState(function (prevState) {
                return {
                    isToggleOn: !prevState.isToggleOn
                };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var positions = ['top', 'right', 'bottom', 'left'];
            // Hint Box width size
            var sizes = ['small', 'large'];
            var position = positions.includes(this.props.position) ? this.props.position : 'top';
            var size = sizes.includes(this.props.size) ? this.props.size : 'large';
            var activeClass = void 0;

            if (this.state.isToggleOn) {
                activeClass = 'liq_tooltips--on-toggle';
            } else if (!this.isTouchDevice()) {
                activeClass = 'liq_tooltips--on-hover';
            } else {
                activeClass = '';
            }

            return _react2.default.createElement(
                'span',
                {
                    className: _styles2.default.liq_tooltips + ' ' + activeClass,
                    onTouchStart: this.handleTouch
                },
                this.props.text ? _react2.default.createElement(
                    'span',
                    { className: _styles2.default.liq_tooltips__text },
                    this.props.text
                ) : null,
                _react2.default.createElement(
                    'span',
                    { className: _styles2.default.liq_tooltips__icon },
                    _react2.default.createElement(
                        'svg',
                        { viewBox: '0 0 80 80' },
                        _react2.default.createElement('path', { d: 'M40 80c22.09 0 40-17.91 40-40S62.09 0 40 0 0 17.91 0 40s17.91 40 40 40zM28.13 23.55c.68-.6 1.425-1.17 2.235-1.71.81-.54 1.685-1.01 2.625-1.41.94-.4 1.96-.715 3.06-.945 1.1-.23 2.29-.345 3.57-.345 1.74 0 3.325.24 4.755.72 1.43.48 2.655 1.165 3.675 2.055 1.02.89 1.81 1.965 2.37 3.225s.84 2.67.84 4.23c0 1.52-.22 2.835-.66 3.945-.44 1.11-.99 2.075-1.65 2.895-.66.82-1.385 1.53-2.175 2.13l-2.235 1.695c-.7.53-1.305 1.05-1.815 1.56s-.815 1.085-.915 1.725l-.69 4.38h-5.07l-.51-4.89c-.12-.94.015-1.765.405-2.475.39-.71.91-1.36 1.56-1.95.65-.59 1.375-1.16 2.175-1.71.8-.55 1.55-1.15 2.25-1.8.7-.65 1.285-1.38 1.755-2.19s.705-1.775.705-2.895c0-.72-.135-1.365-.405-1.935-.27-.57-.645-1.06-1.125-1.47-.48-.41-1.055-.725-1.725-.945-.67-.22-1.395-.33-2.175-.33-1.14 0-2.105.125-2.895.375s-1.46.53-2.01.84c-.55.31-1.015.59-1.395.84-.38.25-.72.375-1.02.375-.72 0-1.24-.3-1.56-.9l-1.95-3.09zm5.67 35.37c0-.62.115-1.21.345-1.77.23-.56.545-1.04.945-1.44.4-.4.88-.72 1.44-.96.56-.24 1.16-.36 1.8-.36.64 0 1.235.12 1.785.36.55.24 1.03.56 1.44.96.41.4.735.88.975 1.44.24.56.36 1.15.36 1.77 0 .64-.12 1.235-.36 1.785-.24.55-.565 1.025-.975 1.425-.41.4-.89.715-1.44.945-.55.23-1.145.345-1.785.345-.64 0-1.24-.115-1.8-.345-.56-.23-1.04-.545-1.44-.945-.4-.4-.715-.875-.945-1.425-.23-.55-.345-1.145-.345-1.785z', fill: '#ddd', fillRule: 'evenodd' })
                    )
                ),
                _react2.default.createElement(
                    'span',
                    {
                        className: '\n                        ' + _styles2.default.liq_tooltips__hint + '\n                        ' + (0, _classnames2.default)('liq_tooltips__hint--' + position) + '\n                        ' + (0, _classnames2.default)('liq_tooltips__hint--' + size) + '\n                    '
                    },
                    _react2.default.createElement(
                        'span',
                        { className: _styles2.default.liq_tooltips__hint__inner },
                        this.props.children
                    )
                )
            );
        }
    }]);

    return Tooltips;
}(_react2.default.Component);

Tooltips.defaultProps = {
    position: 'bottom',
    size: 'large'
};

Tooltips.propTypes = {
    position: _react2.default.PropTypes.string,
    size: _react2.default.PropTypes.string,
    text: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.element])
};

exports.default = Tooltips;
exports.Tooltips = Tooltips;