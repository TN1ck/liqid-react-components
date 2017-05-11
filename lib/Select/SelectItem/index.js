'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SelectItem = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _styles = require('../styles.css');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Class represeting a single SeletItem
 * @namespace Select
 * @extends React.Component
 */
var SelectItem = function (_React$Component) {
    _inherits(SelectItem, _React$Component);

    function SelectItem(props) {
        _classCallCheck(this, SelectItem);

        var _this = _possibleConstructorReturn(this, (SelectItem.__proto__ || Object.getPrototypeOf(SelectItem)).call(this, props));

        _this.onMouseEnter = _this.onMouseEnter.bind(_this);
        return _this;
    }

    _createClass(SelectItem, [{
        key: 'onMouseEnter',
        value: function onMouseEnter() {
            this.props.onMouseEnter(this.props.indexInList);
        }
    }, {
        key: 'render',
        value: function render() {
            var _classNames;

            var classes = (0, _classnames2.default)(_styles2.default['liq_select-simple-list__item'], (_classNames = {}, _defineProperty(_classNames, _styles2.default['liq_select-simple-list__item--selected'], this.props.selected), _defineProperty(_classNames, _styles2.default['liq_select-simple-list__item--active'], this.props.active), _defineProperty(_classNames, _styles2.default['liq_select-simple-list__item--disabled'], this.props.disabled), _defineProperty(_classNames, _styles2.default['liq_select-simple-list__item--empty'], !this.props.children || !this.props.children.length), _defineProperty(_classNames, _styles2.default['liq_select-simple-list__item-separator'], this.props.separator), _classNames));
            var content = this.props.children && this.props.children.length ? this.props.children : '\xA0';
            return _react2.default.createElement(
                'li',
                {
                    className: classes,
                    onMouseEnter: this.onMouseEnter,
                    onMouseDown: this.props.onMouseDown,
                    'data-value': this.props.value
                },
                content
            );
        }
    }]);

    return SelectItem;
}(_react2.default.Component);

/**
 * @memberof SelectItem
 * @namespace props
 * @prop {Object} propTypes         - the props that are passed to this component
 */


SelectItem.propTypes = {
    /**
     * @memberof Select.props
     * @prop {Boolean} active       - is the item currently active?
     */
    active: _react2.default.PropTypes.bool,
    /**
     * @memberof Select.props
     * @prop {Boolean} selected     - is the item currently selected?
     */
    selected: _react2.default.PropTypes.bool,
    /**
     * @memberof Select.props
     * @prop {Boolean} disabled     - is the item currently disabled?
     */
    disabled: _react2.default.PropTypes.bool,
    /**
     * @memberof Select.props
     * @prop {Boolean} separator    - is the item a spearator?
     */
    separator: _react2.default.PropTypes.bool,
    /**
     * @memberof Select.props
     * @prop {String} children       - text in SelectItem
     */
    children: _react2.default.PropTypes.string
};

exports.default = SelectItem;
exports.SelectItem = SelectItem;