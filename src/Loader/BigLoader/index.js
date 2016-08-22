import React from 'react';
import CSSModules from 'react-css-modules';
import styles from '../styles.css';
import classNames from 'classnames';
import Spinner from '../Spinner';

/**
 * Returns big standalone loading indicator or empty span-tag.
 * @param {Boolean} props       - The employee who is responsible for the project.
 * @return {Object} Loader      - The loading indicator.
 */
function BigLoader (props) {
    if (!props.loading) {
        return <span></span>;
    }

    return (
        <div styleName={classNames('liq_loader', 'liq_loader--standalone')}>
            <Spinner center />
        </div>
    );
}

/**
 * @memberof BigLoader
 * @namespace props
 * @prop {Object} propTypes         - the props that are passed to this component
 */
BigLoader.propTypes = {
    /**
     * @memberof BigLoader.props
     * @prop {Boolean} loading      - toogles loading state
     */
    loading: React.PropTypes.bool
};

const _BigLoader = CSSModules(BigLoader, styles, {allowMultiple: true});

export default _BigLoader;
export { _BigLoader as BigLoader};
