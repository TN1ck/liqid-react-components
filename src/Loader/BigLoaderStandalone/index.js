import React from 'react';
import CSSModules from 'react-css-modules';
import styles from '../styles.css';
import classNames from 'classnames';
import Spinner from '../Spinner';

/**
 * Returns big standalone loading indicator or empty span-tag.
 * @param {Boolean} props       - Props which are passed to the component
 * @return {Object} Loader      - The loading indicator
 */
function BigLoaderStandalone (props) {
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
 * @memberof BigLoaderStandalone
 * @namespace props
 * @prop {Object} propTypes         - Props that are passed to this component
 */
BigLoaderStandalone.propTypes = {
    /**
     * @memberof BigLoaderStandalone.props
     * @prop {Boolean} loading      - Toogles the loading state
     */
    loading: React.PropTypes.bool
};

const _BigLoaderStandalone = CSSModules(BigLoaderStandalone, styles, {allowMultiple: true});

export default _BigLoaderStandalone;
export { _BigLoaderStandalone as BigLoaderStandalone};
