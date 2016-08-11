import React from 'react';

import CSSModules from 'react-css-modules';
import styles from './styles.css';
import classNames from 'classnames';
import _ from 'lodash';

import Icon from '../Icon';

/**
 * Class representing a Button in different variations.
 * The tag property allows the button to be used in various situations
 * @namespace Button
 * @extends React.Component
 */
class Button extends React.Component {
    constructor (props) {
        super(props);

        this.createWithButtonTag = this.createWithButtonTag.bind(this);
        this.createAsSubmit = this.createAsSubmit.bind(this);
        this.createLink = this.createWithButtonTag.bind(this);
        this.createAsDiv = this.createAsDiv.bind(this);
    }
    createWithButtonTag (buttonStyles, content) {
        return (
            <button
                type='button'
                onClick={this.props.onClick}
                styleName={buttonStyles}
            >
                {content}
            </button>
        );
    }
    createAsSubmit (buttonStyles) {
        return (
            <input
                type='submit'
                onClick={this.props.onClick}
                value={this.props.children}
                styleName={buttonStyles}
            />
        );
    }
    createLink (buttonStyles, content) {
        return (
            <a
                onClick={this.props.onClick}
                href={this.props.href}
                styleName={buttonStyles}
            >
                {content}
            </a>
        );
    }
    createAsDiv (buttonStyles, content) {
        return (
            <div
                onClick={this.props.onClick}
                styleName={buttonStyles}
            >
                {content}
            </div>
        );
    }
    render () {
        const type = this.props.type || 'primary';
        const buttonStyles = classNames({
            [_.kebabCase(type)]: type,

            // deactivated
            'deactivated': this.props.deactivated,

            // sizes
            'small': this.props.small,
            'large': this.props.large
        });

        const tagFunctions = {
            'a': this.createLink,
            'button': this.createWithButtonTag,
            'submit': this.createAsSubmit,
            'div': this.createAsDiv
        };
        const tag = this.props.tag || 'div';

        let icon;
        if (this.props.icon) {
            icon = (
                <Icon
                    value={this.props.icon}
                />
            );
        }

        let content = [icon, this.props.children];
        if (this.props.iconPosition === 'right') {
            content = _.reverse(content);
        }
        return tagFunctions[tag](buttonStyles, content);
    }
}

/**
 * @memberof Button
 * @namespace props
 * @prop {Object} propTypes         - the props that are passed to this component
 */
Button.propTypes = {
    /**
     * @memberof Button.props
     * @prop {String} type          - the type of the button
     */
    type: React.PropTypes.string,
    /**
     * @memberof Button.props
     * @prop {String} tag           - the tag of the button (for example a link ..)
     */
    tag: React.PropTypes.string,
    /**
     * @memberof Button.props
     * @prop {Boolean} deactivated  - should the button be deactivated?
     */
    deactivated: React.PropTypes.bool,
    /**
     * @memberof Button.props
     * @prop {String} size          - normal, large or small button
     */
    size: React.PropTypes.string,
    /**
     * @memberof Button.props
     * @prop {Func} onClick         - function called after pressing link
     */
    onClick: React.PropTypes.func,
    /**
     * @memberof Button.props
     * @prop {Boolean} loading      - should the Button show a loading indicator?
     */
    loading: React.PropTypes.bool
};

Button = CSSModules(Button, styles, {allowMultiple: true});

export default Button;
export { Button };
