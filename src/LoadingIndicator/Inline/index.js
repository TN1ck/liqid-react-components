import React        from 'react';
import styles       from '../styles.scss';
import classNames   from 'classnames';

class InlineLoader extends React.Component {
    render () {
        const wrapperClasses = classNames(
            styles['loader-wrap'], {
                [styles.small]: this.props.size === 'small',
                [styles.regular]: (this.props.size === 'regular') || !this.props.size
            }
        );
        return (
            <div className={wrapperClasses}>
                <div className={styles.loader} />
            </div>
        );
    }
}

InlineLoader.propTypes = {
    // small, regular (default), large
    size: React.PropTypes.string
};

export default InlineLoader;
export { InlineLoader };
