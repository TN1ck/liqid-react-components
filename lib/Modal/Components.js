'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ModalBackground = exports.ModalPortal = exports.ModalContent = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _EventStack = require('./EventStack');

var _EventStack2 = _interopRequireDefault(_EventStack);

var _styles = require('./styles.css');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Most of this code is adapated from https://github.com/qimingweng/react-modal-dialog
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var ESCAPE = 27;

/**
 * Get the keycode from an event
 * @param {Event} event The browser event from which we want the keycode from
 * @returns {Number} The number of the keycode
 */
function getKeyCodeFromEvent(event) {
    return event.which || event.keyCode || event.charCode;
}

// Render into subtree is necessary for parent contexts to transfer over
// For example, for react-router
var renderSubtreeIntoContainer = _reactDom2.default.unstable_renderSubtreeIntoContainer;

var ModalContent = exports.ModalContent = function (_React$Component) {
    _inherits(ModalContent, _React$Component);

    function ModalContent(props) {
        _classCallCheck(this, ModalContent);

        var _this = _possibleConstructorReturn(this, (ModalContent.__proto__ || Object.getPrototypeOf(ModalContent)).call(this, props));

        _this.handleGlobalClick = _this.handleGlobalClick.bind(_this);
        _this.handleGlobalKeydown = _this.handleGlobalKeydown.bind(_this);
        return _this;
    }

    _createClass(ModalContent, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            /**
            * This is done in the componentWillMount instead of the componentDidMount
            * because this way, a modal that is a child of another will have register
            * for events after its parent
            */
            this.eventToken = _EventStack2.default.addListenable([['click', this.handleGlobalClick], ['keydown', this.handleGlobalKeydown]]);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            _EventStack2.default.removeListenable(this.eventToken);
        }
    }, {
        key: 'shouldClickDismiss',
        value: function shouldClickDismiss(event) {
            var target = event.target;
            // This piece of code isolates targets which are fake clicked by things
            // like file-drop handlers

            if (target.tagName === 'INPUT' && target.type === 'file') {
                return false;
            }
            if (!this.props.dismissOnBackgroundClick) {
                if (target !== this.refs.self || this.refs.self.contains(target)) {
                    return false;
                }
            } else {
                if (target === this.refs.self || this.refs.self.contains(target)) {
                    return false;
                }
            }
            return true;
        }
    }, {
        key: 'handleGlobalClick',
        value: function handleGlobalClick(event) {
            if (this.shouldClickDismiss(event)) {
                if (typeof this.props.onClose === 'function') {
                    this.props.onClose(event);
                }
            }
        }
    }, {
        key: 'handleGlobalKeydown',
        value: function handleGlobalKeydown(event) {
            if (getKeyCodeFromEvent(event) === ESCAPE) {
                if (typeof this.props.onClose === 'function') {
                    this.props.onClose(event);
                }
            }
        }
    }, {
        key: 'render',
        value: function render() {

            return _react2.default.createElement(
                'div',
                {
                    ref: 'self',
                    className: _styles2.default['liq_modal-content']
                },
                this.props.showButton && this.props.onClose ? _react2.default.createElement(
                    'button',
                    { className: _styles2.default['liq_modal-close'], onClick: this.props.onClose },
                    _react2.default.createElement(
                        'span',
                        { 'aria-hidden': 'true' },
                        '×'
                    )
                ) : null,
                this.props.children
            );
        }
    }]);

    return ModalContent;
}(_react2.default.Component);

ModalContent.propTypes = {
    showButton: _react2.default.PropTypes.bool,
    onClose: _react2.default.PropTypes.func, // required for the close button
    className: _react2.default.PropTypes.string,
    children: _react2.default.PropTypes.node,
    dismissOnBackgroundClick: _react2.default.PropTypes.bool
};

ModalContent.defaultProps = {
    dismissOnBackgroundClick: true,
    showButton: true
};

var ModalPortal = exports.ModalPortal = function (_React$Component2) {
    _inherits(ModalPortal, _React$Component2);

    function ModalPortal() {
        _classCallCheck(this, ModalPortal);

        return _possibleConstructorReturn(this, (ModalPortal.__proto__ || Object.getPrototypeOf(ModalPortal)).apply(this, arguments));
    }

    _createClass(ModalPortal, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            // disable scrolling on body
            document.body.classList.add('liq_modal-open');

            // Create a div and append it to the body
            this._target = document.body.appendChild(document.createElement('div'));

            // Mount a component on that div
            this._component = renderSubtreeIntoContainer(this, this.props.children, this._target);

            // A handler call in case you want to do something when a modal opens, like add a class to the body or something
            if (typeof this.props.onModalDidMount === 'function') {
                this.props.onModalDidMount();
            }
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate() {
            // When the child component updates, we have to make sure the content rendered to the DOM is updated to
            this._component = renderSubtreeIntoContainer(this, this.props.children, this._target);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            var _this3 = this;

            /**
            * Let this be some discussion about fading out the components on unmount.
            * Right now, there is the issue that if a stack of components are layered
            * on top of each other, and you programmatically dismiss the bottom one,
            * it actually takes some time for the animation to catch up to the top one,
            * because each modal doesn't send a dismiss signal to its children until
            * it itself is totally gone...
            */

            var done = function done() {
                // Modal will unmount now
                // Call a handler, like onModalDidMount
                if (typeof _this3.props.onModalWillUnmount === 'function') {
                    _this3.props.onModalWillUnmount();
                }

                // Remove the node and clean up after the target
                _reactDom2.default.unmountComponentAtNode(_this3._target);
                document.body.removeChild(_this3._target);
                document.body.classList.remove('liq_modal-open');
            };

            // A similar API to react-transition-group
            if (typeof this._component.componentWillLeave === 'function') {
                // Pass the callback to be called on completion
                this._component.componentWillLeave(done);
            } else {
                // Call completion immediately
                done();
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return null;
        } // This doesn't actually return anything to render

    }]);

    return ModalPortal;
}(_react2.default.Component);

ModalPortal.propTypes = {
    onClose: _react2.default.PropTypes.func, // This is called when the dialog should close
    children: _react2.default.PropTypes.node,
    onModalDidMount: _react2.default.PropTypes.func, // optional, called on mount
    onModalWillUnmount: _react2.default.PropTypes.func // optional, called on unmount
};

var ModalBackground = exports.ModalBackground = function (_React$Component3) {
    _inherits(ModalBackground, _React$Component3);

    function ModalBackground(props) {
        _classCallCheck(this, ModalBackground);

        var _this4 = _possibleConstructorReturn(this, (ModalBackground.__proto__ || Object.getPrototypeOf(ModalBackground)).call(this, props));

        _this4.state = {
            // This is set to false as soon as the component has mounted
            // This allows the component to change its css and animate in
            transparent: true
        };
        return _this4;
    }

    _createClass(ModalBackground, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this5 = this;

            // Create a delay so CSS will animate
            requestAnimationFrame(function () {
                return _this5.setState({ transparent: false });
            });
        }
    }, {
        key: 'componentWillLeave',
        value: function componentWillLeave(callback) {
            this.setState({
                transparent: true,
                componentIsLeaving: true
            });

            // There isn't a good way to figure out what the duration is exactly,
            // because parts of the animation are carried out in CSS...
            setTimeout(function () {
                callback();
            }, this.props.duration);
        }
    }, {
        key: 'render',
        value: function render() {
            var transparent = this.state.transparent;


            var overlayStyle = {
                opacity: transparent ? 0 : 0.6
            };

            var containerStyle = {
                opacity: transparent ? 0 : 1
            };

            return _react2.default.createElement(
                'div',
                { className: _styles2.default['liq_modal-background'], style: { zIndex: this.props.zIndex } },
                _react2.default.createElement('div', { style: overlayStyle, className: _styles2.default['liq_modal-background__overlay'] }),
                _react2.default.createElement(
                    'div',
                    { style: containerStyle, className: _styles2.default['liq_modal-background__container'] },
                    this.props.children
                )
            );
        }
    }]);

    return ModalBackground;
}(_react2.default.Component);

ModalBackground.defaultProps = {
    duration: 300,
    zIndex: 1100 // to lay above tooltips and the website header
};

ModalBackground.propTypes = {
    onClose: _react2.default.PropTypes.func,
    duration: _react2.default.PropTypes.number.isRequired,
    zIndex: _react2.default.PropTypes.number.isRequired,
    children: _react2.default.PropTypes.node
};

exports.default = {
    ModalPortal: ModalPortal,
    ModalBackground: ModalBackground,
    ModalContent: ModalContent
};