/**
 * Global loader component that can be wrapped around any element.
 * If the component is in loading state, an animated css-loader will be shown instead of the content.
 */
const React      = require('react');
const classNames = require('classnames');
const Spinner    = require('./Spinner.js');
const {
    animateScroll
}                = require('react-scroll');

const duration = 600;

class Loader extends React.Component {
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
        const classnames = classNames({
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
            <div id={this.props.id} style={style} className={classnames} ref='loaderContainer'>
                <div className={'liq_loader__inner'}>
                    {this.props.children}
                </div>
                {this.createSpinner()}
            </div>
        );
    }
}

Loader.propTypes = {
    // Toggle the loading state
    loading: React.PropTypes.bool.isRequired,
    // CSS value for float to const the loader float
    floatCSS: React.PropTypes.string,
    // use the correct centering for the circle, looks better for small areas
    correctCenter: React.PropTypes.bool,
    // long dealy
    longDelay: React.PropTypes.bool,
    // no spinner
    noSpinner: React.PropTypes.bool
};

Loader.defaultProps = {
    float: 'left'
};

module.exports = Loader;
