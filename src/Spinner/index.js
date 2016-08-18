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
    }

    render () {
        const type = this.props.type;
        const spinnerStyles = classNames({
            [_.kebabCase(type)]: type,

            'spinner': true,
            'spinner--correct': this.props.correctCenter,
            'spinner--long-delay': this.props.longDelay
        });

        return (
            <div styleName={spinnerStyles}>
                <div className='spinner__inner'></div>
            </div>
        );
    }
}

Spinner.propTypes = {
    correctCenter: React.PropTypes.bool,
    longDelay: React.PropTypes.bool
};

Spinner = CSSModules(Spinner, styles, {allowMultiple: true});

export default Spinner;
export { Spinner };
