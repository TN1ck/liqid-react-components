import React from 'react';

import CSSModules from 'react-css-modules';
import styles from './styles.css';
import classNames from 'classnames';
import _ from 'lodash';

/**
 * Class representing a Spinners for Loader component
 * @namespace Spinner
 * @extends React.Component
 */
class Spinner extends React.Component {
    constructor (props) {
        super(props);
        // this.createAsDiv = this.createAsDiv.bind(this);
        console.log('log from constructor');
    }

    render () {
        const type = this.props.type;
        const spinnerStyles = classNames({
            [_.kebabCase(type)]: type,

            // deactivated
            'color': this.props.color
        });

        let content = this.props.children;

        return (
            <div styleName={spinnerStyles}></div>
        );
    }
}

Spinner.propTypes = {
    type: React.PropTypes.string,

    /**
     * @memberof Button.props
     * @prop {Boolean} deactivated  - should the button be deactivated?
     */
    color: React.PropTypes.bool
};

Spinner.defaultProps = {
};

Spinner = CSSModules(Spinner, styles, {allowMultiple: true});

export default Spinner;
export { Spinner };
