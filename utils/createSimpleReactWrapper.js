const React      = require('react');
const _          = require('lodash');
const classNames = require('classnames');

/**
* Function to create a simple React-Wrapper for a class, used to reduce Boilerplate
* for really simple React-classes
* @param {string} tag           - The html-tag the new class shall have
* @param {string} className     - The className the component has
* @param {string} classNameDict - The classNameDict with keys of props that will add new classes
* @returns {object} createSimpleReactWrapper
*
*/
const createSimpleReactWrapper = (tag, className, classNameDict = {}) => {
    return React.createClass({
        render () {
            const classNameDictProps = _.mapValues(classNameDict, v => this.props[v]);
            return React.createElement(tag, _.omit(_.extend({}, this.props, {
                className: classNames(className, this.props.className, classNameDictProps)
            }), 'children'), this.props.children);
        }
    });
};

module.exports = createSimpleReactWrapper;
