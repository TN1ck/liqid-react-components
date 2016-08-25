/**
 * Global loader component that can be wrapped around any element.
 * If the component is in loading state, an animated css-loader will be shown instead of the content.
 */
import React from 'react';
import CSSModules from 'react-css-modules';
import styles from '../styles.css';
import classNames from 'classnames';
import Spinner from '../Spinner';
import animateScroll from 'react-scroll';

const duration = 600;

class BigLoader extends React.Component {
    constructor (props) {
        super(props);
        this.scrollToTop = this.scrollToTop.bind(this);
        this.shrink = this.shrink.bind(this);
        this.unshrink = this.unshrink.bind(this);
        this.createSpinner = this.createSpinner.bind(this);
    }
    // this function should be used from a ref from another component
    scrollToTop () {
        const dom = this.refs.loaderContainer;
        const height = dom.offsetHeight;
        const currentHeight = height + 'px';
        dom.style.height = currentHeight;
        animateScroll.scrollToTop({
            duration: duration,
            smooth: true,
            delay: 0
        });
    }

    shrink () {
        setTimeout(() => {
            const newHeight = window.innerHeight + 'px';
            const dom = this.refs.loaderContainer;
            dom.style.height = newHeight;
        }, duration);
    }

    unshrink (callback) {
        setTimeout(() => {
            const dom = this.refs.loaderContainer;
            dom.style.height = 'auto';
            callback && callback();
        }, duration);
    }

    createSpinner () {
        if (this.props.loading && !this.props.noSpinner) {
            return (
                <Spinner
                    correctCenter={this.props.correctCenter}
                    longDelay={this.props.longDelay}
                />
            );
        }
        return <span></span>;
    }
    render () {
        const loading = this.props.loading;
        const loaderClassNames = classNames({
            'liq_loader': true,
            'liq_loader--active': loading,
            'liq_loader--inactive': !loading,
            'liq_loader--active-background': loading && !this.props.noBackground,
            'liq_loader--min-height': loading && this.props.minHeight,
            'liq_loader--max-height': loading && this.props.maxHeight,
            'liq_loader--center-from-top': this.props.centerFromTop
        });
        const style = {
            float: this.props.floatCSS
        };

        return (
            <div id={this.props.id} style={style} styleName={loaderClassNames} ref='loaderContainer'>
                <div styleName={'liq_loader__inner'}>
                    {this.props.children}
                </div>
                {this.createSpinner()}
            </div>
        );
    }
}

/**
 * @memberof Loader
 * @namespace props
 * @prop {Object} propTypes             - Props that are passed to this component
 */
BigLoader.propTypes = {
    /**
     * @memberof NewLoader.props
     * @prop {Boolean} big              - Toogle the loading state
     */
    loading: React.PropTypes.bool.isRequired,
    /**
     * @memberof NewLoader.props
     * @prop {Boolean} big              - CSS value for float to const the loader float
     */
    floatCSS: React.PropTypes.string,
    /**
     * @memberof NewLoader.props
     * @prop {Boolean} big              - Use the correct centering for the circle, looks better for small areas
     */
    correctCenter: React.PropTypes.bool,
    /**
     * @memberof NewLoader.props
     * @prop {Boolean} big              - Use the correct centering for the circle, looks better for small areas
     */
    longDelay: React.PropTypes.bool,
    /**
     * @memberof NewLoader.props
     * @prop {Boolean} noSpinner        - Don't show the spinner while loading
     */
    noSpinner: React.PropTypes.bool,
    /**
     * @memberof NewLoader.props
     * @prop {Boolean} noBackground     - Set background white and show a shadow.
     */
    noBackground: React.PropTypes.bool
};

BigLoader.defaultProps = {
    float: 'left'
};

BigLoader = CSSModules(BigLoader, styles, {allowMultiple: true});

export default BigLoader;
export { BigLoader as BigLoader };
