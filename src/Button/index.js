import React from 'react';

import CSSModules from 'react-css-modules';
import styles from './styles.css';
import classNames from 'classnames';

/**
 * Class representing a Button in different variations.
 * The tag property allows the button to be used in various situations
 * @namespace Button
 * @extends React.Component
 */
class Button extends React.Component {
    constructor (props) {
        super(props);
    }
    createWithButtonTag (buttonStyles) {
        return (
            <button
                type='button'
                onClick={this.props.onClick}
                styleName={buttonStyles}
            >
                {this.props.children}
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
    createLink (buttonStyles) {
        return (
            <a
                onClick={this.props.onClick}
                href={this.props.href}
                styleName={buttonStyles}
            >
                {this.props.children}
            </a>
        );
    }
    render () {
        const buttonStyles = classNames({
            // types
            'primary': this.props.type === 'primary' || !this.props.type,
            'primary-outlined': this.props.type === 'primaryOutlined',
            'secondary': this.props.type === 'secondary',
            'secondary-outlined': this.props.type === 'secondaryOutlined',
            'link': this.props.type === 'link',

            // deactivated
            'deactivated': this.props.deactivated,

            // sizes
            'small': this.props.small,
            'large': this.props.large
        });

        if (this.props.tag === 'a') {
            return this.createLink(buttonStyles);
        }
        if (this.props.tag === 'button') {
            return this.createWithButtonTag(buttonStyles);
        }
        if (this.props.tag === 'submit') {
            return this.createAsSubmit(buttonStyles);
        }
        return (
            <div
                onClick={this.props.onClick}
                styleName={buttonStyles}
            >
                {this.props.children}
            </div>
        );
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
