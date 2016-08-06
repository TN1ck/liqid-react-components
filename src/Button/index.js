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
    render () {
        const buttonStyles = classNames(styles.button, {
            [styles.primary]: this.props.type === 'primary' || !this.props.type,
            [styles.secondary]: this.props.type === 'secondary',
            [styles.ghost]: this.props.style === 'ghost',
            [styles.deactivated]: this.props.deactivated
        }, this.props.className);
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
     * @prop {String} style         - the style of the button
     */
    style: React.PropTypes.string,
    /**
     * @memberof Button.props
     * @prop {String} deactivated   - should the button be deactivated?
     */
    deactivated: React.PropTypes.bool
};

export default Button;
export { Button };
