'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Components = require('./Components.js');

var _styles = require('./styles.css');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * The base Modal, which wraps the content Components
 * @param {Object} props The props for the component
 * @returns {React.Component} Component to be returned
 */
function Modal(_ref) {
    var onHide = _ref.onHide,
        className = _ref.className,
        children = _ref.children,
        show = _ref.show,
        showButton = _ref.showButton,
        id = _ref.id;

    return show ? _react2.default.createElement(
        _Components.ModalPortal,
        null,
        _react2.default.createElement(
            _Components.ModalBackground,
            { onClose: onHide },
            _react2.default.createElement(
                'div',
                { className: (0, _classnames2.default)(_styles2.default.liq_modal, className), key: 'modal' },
                _react2.default.createElement(
                    'div',
                    { className: _styles2.default['liq_modal-dialog'], id: id },
                    _react2.default.createElement(
                        _Components.ModalContent,
                        { onClose: onHide, showButton: showButton },
                        children
                    )
                )
            )
        )
    ) : null;
}

Modal.PropTypes = {
    onHide: _react2.default.PropTypes.func,
    className: _react2.default.PropTypes.string,
    children: _react2.default.PropTypes.node,
    show: _react2.default.PropTypes.bool,
    id: _react2.default.PropTypes.string
};

/**
 * The Modals body
 * @param {Object} props The props for the component
 * @returns {React.Component} Component to be returned
 */
function ModalBody(_ref2) {
    var children = _ref2.children;

    return _react2.default.createElement(
        'div',
        { className: _styles2.default['liq_modal-content__body'] },
        children
    );
}

/**
 * The Modals footer
 * @param {Object} props The props for the component
 * @returns {React.Component} Component to be returned
 */
function ModalFooter(props) {
    var btnStyles = ['default', 'half-small', 'half-large'];
    var style = btnStyles.includes(props.btnStyle) ? props.btnStyle : 'default';
    return _react2.default.createElement(
        'div',
        {
            className: '\n                ' + _styles2.default['liq_modal-content__footer'] + '\n                ' + (0, _classnames2.default)('liq_modal-content__footer--btn-' + style) + '\n            '
        },
        props.children
    );
}

/**
 * The Modals header
 * @param {Object} props The props for the component
 * @returns {React.Component} Component to be returned
 */
function ModalHeader(_ref3) {
    var children = _ref3.children;

    return _react2.default.createElement(
        'div',
        { className: _styles2.default['liq_modal-content__header'] },
        children
    );
}

/**
 * The Modals title
 * @param {Object} props The props for the component
 * @returns {React.Component} Component to be returned
 */
function ModalTitle(_ref4) {
    var children = _ref4.children;

    return _react2.default.createElement(
        'h4',
        { className: _styles2.default['liq_modal-content__title'] },
        children
    );
}

Modal.Body = ModalBody;
Modal.Footer = ModalFooter;
Modal.Header = ModalHeader;
Modal.Title = ModalTitle;

Modal.Footer.defaultProps = {
    btnStyles: 'default'
};

Modal.Footer.propTypes = {
    btnStyles: _react2.default.PropTypes.string
};

exports.default = Modal;