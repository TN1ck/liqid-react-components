'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _styles = require('./styles.css');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var InfoBox = function InfoBox(_ref) {
    var position = _ref.position,
        cssStyles = _ref.cssStyles,
        children = _ref.children;

    return _react2.default.createElement(
        'span',
        {
            className: '\n                ' + _styles2.default.liq_tooltips__hint + '\n                ' + (0, _classnames2.default)('liq_tooltips__hint--' + position) + '\n            ',
            style: cssStyles
        },
        _react2.default.createElement(
            'span',
            { className: _styles2.default.liq_tooltips__hint__inner },
            children
        )
    );
};

exports.default = InfoBox;