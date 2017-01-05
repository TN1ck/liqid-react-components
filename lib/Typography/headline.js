'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Headline = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Class representing a Headline
 * Hierarchical order can be chosen with tag
 * Type defines visual order
 * @extends React.Component
 * @returns {JSX} headline
 * @param {Object} props props handed to headline
 */
function Headline(props) {
    var validTypes = ['max', 'large', 'regular', 'regular-bold', 'small', 'small-grey', 'smaller', 'uppercase', 'uppercase-small', 'uppercase-small-grey', 'uppercase-smallest-grey'];
    var type = validTypes.includes(props.type) ? props.type : 'regular';

    return _react2.default.createElement(
        props.tag,
        { className: (0, _classnames2.default)('headline--' + type, props.className) },
        props.children
    );
}

Headline.propTypes = {
    type: _react2.default.PropTypes.string.isRequired,
    tag: _react2.default.PropTypes.string.isRequired
};

exports.default = Headline;
exports.Headline = Headline;