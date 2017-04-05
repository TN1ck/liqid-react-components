'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Select = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _SelectItem = require('../SelectItem');

var _SelectItem2 = _interopRequireDefault(_SelectItem);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _styles = require('../styles.css');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MOBILE_WINDOW_WIDTH = 780;

var noMouseTimeout = void 0;

/**
 * @returns {Number} The width of the window
 */
function getWindowWidth() {
    return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
}

/**
 * returns if the device is mobile (or has a width below 780px)
 * from http://gregfranko.com/jquery.selectBoxIt.js/
 * @returns {Boolean} Is the device mobile?
 */
function isMobile() {
    // Adapted from http://www.detectmobilebrowsers.com
    var ua = navigator.userAgent || navigator.vendor || window.opera;
    // Checks for iOs, Android, Blackberry, Opera Mini, and Windows mobile devices
    return (/iPhone|iPod|iPad|Silk|Android|BlackBerry|Opera Mini|IEMobile/.test(ua) || getWindowWidth() < MOBILE_WINDOW_WIDTH
    );
}

/**
 * Find the element that fullfills the predicate, starting from the end of the list
 *
 * @param {Array} list - the list we use
 * @param {function} predicate - the accessor we use to search the list
 * @param {Number} startPosition - where the find starts
 * @returns {Number} The last index where the predicate returned true
 */
function findLastIndex(list, predicate, startPosition) {
    var index = typeof startPosition === 'number' ? startPosition : list.length - 1;
    while (index >= 0) {
        var item = list[index];
        if (predicate(item)) {
            return index;
        }
        index--;
    }
    return -1;
}

/**
 * Find the element that fullfills the predicate, starting from the start of the list
 *
 * @param {Array} list - the list we use
 * @param {function} predicate - the accessor we use to search the list
 * @param {Number} startPosition - where the find starts
 * @returns {Number} The last index where the predicate returnedfindIndex( true
 */
function findIndex(list, predicate, startPosition) {
    var index = typeof startPosition === 'number' ? startPosition : 0;
    while (index < list.length) {
        var item = list[index];
        if (predicate(item)) {
            return index;
        }
        index++;
    }
    return -1;
}

/**
 *
 * @param {Object} props properties handed to the Select
 * @returns {React.Component} Component to be returned
 */
function NativeSelect(_ref) {
    var disabled = _ref.disabled,
        children = _ref.children,
        onChange = _ref.onChange,
        value = _ref.value;

    return _react2.default.createElement(
        'div',
        { className: _styles2.default.nativeSelectContainer },
        _react2.default.createElement(
            'select',
            { disabled: disabled, onChange: onChange, value: value },
            children.map(function (listItem, listItemIndex) {
                return _react2.default.createElement(
                    'option',
                    {
                        value: listItem.props.value,
                        key: listItemIndex,
                        disabled: listItem.props.disabled
                    },
                    listItem.props.children
                );
            })
        )
    );
}

/**
 * Class representing a stylable Select Input
 * The input consists of a regular textinput which is styled like a dropdown
 * and disabled for text input
 * This enables us to make the select input tabable like a native browser input
 * @namespace Select
 * @extends React.Component
 */

var Select = function (_React$Component) {
    _inherits(Select, _React$Component);

    /**
     * Create a select.
     * Initially the Select is closed.
     * If a defaultValue is given from outside - use it if not deativated
     * @param {Object} props properties handed to the Select
     */
    function Select(props) {
        _classCallCheck(this, Select);

        var _this = _possibleConstructorReturn(this, (Select.__proto__ || Object.getPrototypeOf(Select)).call(this, props));

        var defaultValueItemIndex = _this.getIndexByValue(props.defaultValue || props.value);
        _this.state = {
            closed: true,
            selectedItemIndex: null,
            valueEncapsulated: _this.isDeactivatedItem(defaultValueItemIndex) ? null : props.defaultValue || props.value,
            noMouse: false,
            useMobileSelect: false
        };
        _this.openList = _this.openList.bind(_this);
        _this.closeList = _this.closeList.bind(_this);
        _this.toggleList = _this.toggleList.bind(_this);
        _this.applyValue = _this.applyValue.bind(_this);
        _this.keyOnDropdown = _this.keyOnDropdown.bind(_this);
        _this.selectPreviousItem = _this.selectPreviousItem.bind(_this);
        _this.selectNextItem = _this.selectNextItem.bind(_this);
        _this.createShownValue = _this.createShownValue.bind(_this);
        _this.isDeactivatedItem = _this.isDeactivatedItem.bind(_this);
        _this.getLastItemIndex = _this.getLastItemIndex.bind(_this);
        _this.getFirstItemIndex = _this.getFirstItemIndex.bind(_this);
        _this.scrollToSelected = _this.scrollToSelected.bind(_this);
        _this.selectSpecificItemByIndex = _this.selectSpecificItemByIndex.bind(_this);
        _this.searchForFirstLetter = _this.searchForFirstLetter.bind(_this);
        _this.mouseSelectIndex = _this.mouseSelectIndex.bind(_this);
        _this.getValueByIndex = _this.getValueByIndex.bind(_this);
        _this.onChangeNative = _this.onChangeNative.bind(_this);
        return _this;
    }

    _createClass(Select, [{
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(props) {
            if (props.value) {
                if (this.state.valueEncapsulated !== props.value) {
                    var index = this.getIndexByValue(props.value);
                    this.selectSpecificItemByIndex(index);
                    this.setState({
                        valueEncapsulated: props.value
                    });
                }
            }
        }
    }, {
        key: 'componentWillMount',
        value: function componentWillMount() {
            // Only decide once at mounting if device is mobile
            this.setState({
                useMobileSelect: isMobile()
            });
        }
        /**
         * Returns the index for a given value
         * @param {String} value where the index should be found of
         * @returns {Number} Index of value
         */

    }, {
        key: 'getIndexByValue',
        value: function getIndexByValue(value) {
            return findIndex(this.getChildren(), function (item) {
                return item.props.value === value;
            });
        }
    }, {
        key: 'getValueByIndex',
        value: function getValueByIndex(index) {
            return this.getChildren()[index] && this.getChildren()[index].props && this.getChildren()[index].props.value;
        }
        /**
         * Retuns the last index of the list which is not disabled
         * @returns {Number} Index of last item in list which is not disabled
         */

    }, {
        key: 'getLastItemIndex',
        value: function getLastItemIndex() {
            return findLastIndex(this.getChildren(), function (item) {
                return !item.props.disabled;
            });
        }
        /**
         * Returns the react children or empty list when none are there
         * @returns {Array} the children
         */

    }, {
        key: 'getChildren',
        value: function getChildren() {
            return this.props.children || [];
        }
        /**
         * Retuns the first index of the list which is not disabled
         * @returns {Number} Index of first item in list which is not  disabled
         */

    }, {
        key: 'getFirstItemIndex',
        value: function getFirstItemIndex() {
            return findIndex(this.getChildren(), function (item) {
                return !item.props.disabled;
            });
        }
        /**
         * checks if given index is last item in list which is not disabled
         * @param {Number} index which should be checked
         * @returns {Boolean} true if is last index which is not disabled
         */

    }, {
        key: 'isLastItem',
        value: function isLastItem(index) {
            return index === this.getLastItemIndex();
        }
        /**
         * checks if given index is first item in list which is not disabled
         * @param {Number} index which should be checked
         * @returns {Boolean} true if is first index which is not disabled
         */

    }, {
        key: 'isFirstItem',
        value: function isFirstItem(index) {
            return index === this.getFirstItemIndex();
        }
        /**
         * checks if item of given index is deactivated
         * @param {Number} index which should be checked
         * @returns {Boolean} true if item is deactivated
         */

    }, {
        key: 'isDeactivatedItem',
        value: function isDeactivatedItem(index) {
            if (index >= 0) {
                return this.getChildren()[index] && this.getChildren()[index].props.disabled;
            }
            return false;
        }
        /**
         * Open select list
         * @returns {Boolean} state of closed state
         */

    }, {
        key: 'openList',
        value: function openList() {
            this.setState({
                closed: false
            });
            return this.state.closed;
        }
        /**
         * Close select list and reset index
         * @returns {Boolean} state of closed state
         */

    }, {
        key: 'closeList',
        value: function closeList() {
            this.setState({
                closed: true
            });
            return this.state.closed;
        }
        /**
         * Toggle select list
         * @returns {Boolean} state of closed state
         */

    }, {
        key: 'toggleList',
        value: function toggleList() {
            if (!this.props.disabled) {
                this.setState({
                    closed: !this.state.closed
                });
            }
            return this.state.closed;
        }
        /**
         * Apply the value of the currently selected index
         * @param {Object} event event handed from the clicked element
         * @returns {Boolean} true if application of value worked
         */

    }, {
        key: 'applyValue',
        value: function applyValue(event) {
            var _this2 = this;

            if (typeof this.state.selectedItemIndex === 'number') {
                this.setState({
                    valueEncapsulated: this.getChildren()[this.state.selectedItemIndex] && this.getChildren()[this.state.selectedItemIndex].props.value || ' '
                });
                this.closeList();
                setTimeout(function () {
                    _this2.props.onChange && _this2.props.onChange(event, _this2.state.valueEncapsulated);
                }, 0);
                return true;
            }
            return false;
        }
        /**
         * Selects the previous item
         * @returns {Number} newly selected index
         */

    }, {
        key: 'selectPreviousItem',
        value: function selectPreviousItem() {
            // special case when the application starts
            // we want to select the first element before jumping to the end of the list
            var currentIndex = this.state.selectedItemIndex === null ? 1 : this.state.selectedItemIndex;
            var decrementendIndex = currentIndex === 0 ? this.getChildren().length - 1 : currentIndex - 1;
            var selectedItemIndex = findLastIndex(this.getChildren(), function (item) {
                return !item.props.disabled;
            }, decrementendIndex);
            this.setState({
                selectedItemIndex: selectedItemIndex
            });
            this.scrollToSelected();
            return selectedItemIndex;
        }
        /**
         * Selects the next item
         * @returns {Number} newly selected index
         */

    }, {
        key: 'selectNextItem',
        value: function selectNextItem() {
            var currentIndex = this.state.selectedItemIndex;
            var selectedItemIndex = findIndex(this.getChildren(), function (item) {
                return !item.props.disabled;
            }, Math.abs((currentIndex + 1) % this.getChildren().length));
            this.setState({
                selectedItemIndex: selectedItemIndex
            });
            this.scrollToSelected();
            return selectedItemIndex;
        }
        /**
         * Scroll to selected item
         * Necessary becaus otherwise you could move outside of the visible area by using key up / down
         * @returns {undefined}
         */

    }, {
        key: 'scrollToSelected',
        value: function scrollToSelected() {
            var _this3 = this;

            // Prevent mouseOver event while triggering scroll (would be triggered automatically)
            this.setState({
                noMouse: true
            });
            // when scrolling fast by using arrow down / up
            // noMouse could get false because of the delay and trigger the mouseOver bug
            if (noMouseTimeout) {
                clearTimeout(noMouseTimeout);
            }
            setTimeout(function () {
                if (!_this3.state.closed) {
                    var refList = _this3.refs.selectSimpleList;
                    var listHeight = refList.offsetHeight;
                    var refSelectedItem = _reactDom2.default.findDOMNode(_this3.refs['dropdownItem' + _this3.state.selectedItemIndex]);
                    var refSelectedItemOffsetTop = refSelectedItem.offsetTop;
                    var refSelectedItemHeight = refSelectedItem.offsetHeight;
                    var refSelectedItemOffsetTopBorder = refSelectedItemOffsetTop + refSelectedItemHeight;
                    var scrollPosition = refList.scrollTop;

                    // collission top
                    if (refSelectedItemOffsetTopBorder - scrollPosition > listHeight) {
                        _reactDom2.default.findDOMNode(refList).scrollTop = _this3.state.selectedItemIndex * refSelectedItemHeight - (150 - refSelectedItemHeight);
                    }
                    // collission bottom
                    if (refSelectedItemOffsetTopBorder - scrollPosition < 0 + refSelectedItemHeight) {
                        _reactDom2.default.findDOMNode(refList).scrollTop = _this3.state.selectedItemIndex * refSelectedItemHeight;
                    }
                }
                noMouseTimeout = setTimeout(function () {
                    _this3.setState({
                        noMouse: false
                    });
                }, 100);
            }, 0);
        }
        /**
         * Select a specific index in the select list
         * @param   {Number}    index   - index to select
         * @returns {Number}    index of selected item if present otherwise -1
         */

    }, {
        key: 'selectSpecificItemByIndex',
        value: function selectSpecificItemByIndex(index) {
            if (this.getChildren()[index] && !this.getChildren()[index].props.disabled) {
                this.setState({
                    selectedItemIndex: index
                });
                return index;
            }
            return -1;
        }
        /**
         * Select a specific index in the select list with mouse
         * Check if mouse selection is allowed
         * @param   {Number}    index   - index to select
         * @returns {Number}    will be returned when selection is possible otherwise -1
         */

    }, {
        key: 'mouseSelectIndex',
        value: function mouseSelectIndex(index) {
            if (!this.state.noMouse) {
                this.selectSpecificItemByIndex(index);
                return index;
            }
            return -1;
        }
        /**
         * Search for index with first char of pressed char
         * @param   {String} code           - the pressed keyCode
         * @param   {Boolean} startFromZero - Start at index 0 with search for letter
         * @returns {String} pressedChar    - the pressed char
         */

    }, {
        key: 'searchForFirstLetter',
        value: function searchForFirstLetter(code) {
            var startFromZero = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

            var pressedChar = String.fromCharCode(code);
            if (!pressedChar) {
                return;
            }
            var startIndex = startFromZero ? 0 : this.state.selectedItemIndex + 1;
            var validIndex = function validIndex(index) {
                return index !== -1 && typeof index === 'number';
            };
            var index = void 0;

            if (!this.isLastItem(startIndex - 1)) {
                index = findIndex(this.getChildren(), function (child) {
                    if (child.props.value && !child.props.disabled && child.props.children) {
                        return pressedChar.toLowerCase() === child.props.children.charAt(0).toLowerCase();
                    }
                    return false;
                }, startIndex);
            }

            if (!startFromZero && !validIndex(index)) {
                this.searchForFirstLetter(code, true);
                return pressedChar;
            }

            if (validIndex(index)) {
                this.selectSpecificItemByIndex(index);
                this.scrollToSelected();
            }

            return pressedChar;
        }
        /**
         * Check pressed key on input and react accordingly
         * @param   {Object}    event           - The triggered event on keydown
         * @returns {Number}    pressed code    - The keyCode of the pressed key
         */

    }, {
        key: 'keyOnDropdown',
        value: function keyOnDropdown(event) {
            var code = event.keyCode;
            // space, down-key, up-key to open the dropdown
            var open = {
                func: this.openList,
                codes: [32, 40, 38]
            };
            // escape key to close the dropdown without changes
            var closing = {
                func: this.closeList,
                codes: [27]
            };
            // enter key to apply changes to dropdown and close it
            var applying = {
                func: this.applyValue,
                codes: [13]
            };
            // press down key to get next item
            var goItemDown = {
                func: this.selectNextItem,
                codes: [40]
            };
            // press up key to get to previous item
            var goItemUp = {
                func: this.selectPreviousItem,
                codes: [38]
            };

            var items = [open, closing, applying, goItemDown, goItemUp];
            var foundFunction = false;

            items.forEach(function (item) {
                if (item.codes.includes(code)) {
                    event.preventDefault();
                    item.func();
                    foundFunction = true;
                    return code;
                }
            });

            // if the code didn't match to any functionality - use it to search for an item
            if (!foundFunction) {
                this.searchForFirstLetter(code);
            }

            return code;
        }
        /**
         * Show name of current value
         * by finding current value in items array and getting the name
         * @returns {String} Value visually shown in select as current value
         */

    }, {
        key: 'createShownValue',
        value: function createShownValue() {
            var _this4 = this;

            var childWithValue = this.getChildren().filter(function (child) {
                return child.props.value === _this4.state.valueEncapsulated;
            });
            if (!childWithValue || !childWithValue.length) {
                return '';
            }
            return childWithValue[0].props.children;
        }
    }, {
        key: 'onChangeNative',
        value: function onChangeNative(e) {
            var value = e.target.value;
            this.setState({
                valueEncapsulated: value
            });
            this.props.onChange && this.props.onChange(e, value);
        }
    }, {
        key: 'render',
        value: function render() {
            var _classNames,
                _this5 = this;

            var wrapperClasses = (0, _classnames2.default)(_styles2.default.selectSimple, (_classNames = {}, _defineProperty(_classNames, _styles2.default.selectSimpleOpen, !this.state.closed), _defineProperty(_classNames, _styles2.default.disabled, this.props.disabled), _classNames), this.props.className);

            var children = this.getChildren();
            var mobile = this.state.useMobileSelect;

            return mobile ? _react2.default.createElement(NativeSelect, {
                children: children,
                value: this.state.valueEncapsulated,
                onChange: this.onChangeNative,
                disabled: this.props.disabled
            }) : _react2.default.createElement(
                'div',
                {
                    className: wrapperClasses,
                    'data-name': this.props.name
                },
                _react2.default.createElement('input', {
                    type: 'text',
                    readOnly: true,
                    disabled: this.props.disabled,
                    className: [_styles2.default.selectSimpleInput],
                    onClick: this.toggleList,
                    name: this.props.name,
                    onKeyDown: this.keyOnDropdown,
                    onBlur: this.closeList,
                    value: this.createShownValue()
                }),
                _react2.default.createElement(
                    'ul',
                    { className: _styles2.default.selectSimpleList, ref: 'selectSimpleList' },
                    children.map(function (listItem, listItemIndex) {
                        var selected = listItemIndex === _this5.state.selectedItemIndex;
                        var active = listItem.props.value === _this5.state.valueEncapsulated;
                        return _react2.default.createElement(
                            _SelectItem2.default,
                            _extends({
                                ref: 'dropdownItem' + listItemIndex,
                                key: 'dropdown-item-' + listItemIndex
                            }, _this5.props, listItem.props, {
                                onMouseDown: _this5.applyValue,
                                selected: selected,
                                active: active,
                                indexInList: listItemIndex,
                                onMouseEnter: _this5.mouseSelectIndex
                            }),
                            listItem.props.children
                        );
                    })
                )
            );
        }
    }]);

    return Select;
}(_react2.default.Component);

/**
 * @memberof Select
 * @namespace props
 * @prop {Object} propTypes         - the props that are passed to this component
 */


Select.propTypes = {
    /**
     * @memberof Select.props
     * @prop {String} name          - the name of the select (used as HTML name attribute on the input)
     */
    name: _react2.default.PropTypes.string,
    /**
     * @memberof Select.props
     *
     * @prop {String} value - the value set when one wants to override the internal value initially
     */
    defaultValue: _react2.default.PropTypes.string,
    /**
     * @memberof Select.props
     *
     * @prop {String} value - the value set when one wants to override the internal value whenever it differs
     */
    value: _react2.default.PropTypes.string,
    /**
     * @memberof Select.props
     * @prop {func} onChange        - Callback called on change of the currently selected value
     */
    onChange: _react2.default.PropTypes.func,
    /**
     * @memberof Select.props
     * @prop {String} className     - used className for the select wrap
     */
    className: _react2.default.PropTypes.string
};

exports.default = Select;
exports.Select = Select;