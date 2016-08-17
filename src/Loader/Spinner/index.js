import React from 'react';

import CSSModules from 'react-css-modules';
import styles from '../styles.css';
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

        // this.correctCenter = this.correctCenter.bind(this);
    }

    render () {
        const type = this.props.type;
        const spinnerStyles = classNames({
            [_.kebabCase(type)]: type,

            'spinner': true,
            // 'spinner--correct': this.props.correctCenter,
            'spinner--long-delay': this.props.longDelay
        });

        let content = this.props.children;

        return (
            <div styleName={spinnerStyles}>
                <div styleName='spinner__inner'></div>
            </div>
        );
    }
}

Spinner.propTypes = {
    correctCenter: React.PropTypes.bool,
    longDelay: React.PropTypes.bool
};

Spinner.defaultProps = {
};

Spinner = CSSModules(Spinner, styles, {allowMultiple: true});

export default Spinner;
export { Spinner };
