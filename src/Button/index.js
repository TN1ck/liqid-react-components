import React from 'react';

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
                className={buttonStyles}
            >
                {this.props.children}
            </button>
        );
    }
    createAsSubmit (buttonStyle) {
        return (
            <input
                type='submit'
                value={this.props.children}
                className={buttonStyle}
            />
        );
    }
    render () {
        const buttonStyles = classNames(styles.button, {
            // types
            [styles.primary]: this.props.type === 'primary' || !this.props.type,
            [styles.primaryOutlined]: this.props.type === 'primaryOutlined',
            [styles.secondary]: this.props.type === 'secondary',
            [styles.secondaryOutlined]: this.props.type === 'secondaryOutlined',
            [styles.link]: this.props.type === 'link',

            // deactivated
            [styles.deactivated]: this.props.deactivated,

            // sizes
            [styles.small]: this.props.small,
            [styles.large]: this.props.large
        },
            this.props.className
        );

        if (this.props.tag === 'button') {
            return this.createWithButtonTag(buttonStyles);
        }
        if (this.props.tag === 'submit') {
            return this.createAsSubmit(buttonStyles);
        }
        return (
            <div
                className={buttonStyles}
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
     * @prop {String} deactivated   - should the button be deactivated?
     */
    deactivated: React.PropTypes.bool,
    /**
     * @memberof Button.props
     * @prop {String} size          - normal, large or small button
     */
    size: React.PropTypes.string
};

export default Button;
export { Button };
