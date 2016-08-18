import React from 'react';
import CSSModules from 'react-css-modules';
import styles from '../styles.css';
import classNames from 'classnames';
import Spinner from '../Spinner';

/**
 * Class representing a BigLoader for Loader component
 * @namespace BigLoader
 * @extends React.Component
 */
class BigLoader extends React.Component {
    constructor (props) {
        super(props);
    }

    render () {

        if (!this.props.loading) {
            return <span></span>;
        }

        return (
            <div styleName={classNames('liq_loader', 'liq_loader--standalone')}>
                <Spinner center />
            </div>
        );
    }
}

BigLoader.propTypes = {
    loading: React.PropTypes.bool
};

BigLoader = CSSModules(BigLoader, styles, {allowMultiple: true});

export default BigLoader;
export { BigLoader };
