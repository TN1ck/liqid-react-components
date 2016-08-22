import React from 'react';

import CSSModules from 'react-css-modules';
import styles from '../styles.css';
import classNames from 'classnames';

/**
 * Spinner for the big loading indicators.
 * @param {Boolean} props       - The employee who is responsible for the project.
 * @return {Object} Object      - Spinner for the big loading indicators.
 */
function Spinner (props) {
    const _classNames = classNames({
        'spinner': true,
        'spinner--correct': props.correctCenter,
        'spinner--long-delay': props.longDelay
    });

    return (
        <div styleName={_classNames} key='one'>
            <div styleName='spinner__inner'></div>
        </div>
    );
}

/**
 * @memberof Spinner
 * @namespace props
 * @prop {Object} propTypes                 - the props that are passed to this component
 */
Spinner.propTypes = {
    /**
     * @memberof Spinner.props
     * @prop {Boolean} correctCenter        - use the correct centering for the circle, looks better for small areas
     */
    correctCenter: React.PropTypes.bool,
    /**
     * @memberof Spinner.props
     * @prop {Boolean} longDelay            - Should the loading indicator animation have a longer delay?
     */
    longDelay: React.PropTypes.bool
};

const _Spinner = CSSModules(Spinner, styles, {allowMultiple: true});

export default _Spinner;
export { _Spinner as Spinner };
