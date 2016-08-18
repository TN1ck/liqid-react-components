/**
 * Global loader component that can be wrapped around any element.
 * If the component is in loading state, an animated css-loader will be shown instead of the content.
 */
import React from 'react';
import CSSModules from 'react-css-modules';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import animateScroll from 'react-scroll';
import styles from '../styles.css';
import classNames from 'classnames';
import Spinner from '../Spinner';
import _ from 'lodash';
const duration = 600;

/**
 * Class representing a Loader for Loader component
 * @namespace Loader
 * @extends React.Component
 */
class Loader extends React.Component {
    constructor (props) {
        super(props);
        this.createSpinner = this.createSpinner.bind(this);
        this.scrollToTop = this.scrollToTop.bind(this);
        this.shrink = this.shrink.bind(this);
        this.unshrink = this.unshrink.bind(this);
    }

    createBigLoader () {
        if (!this.props.loading) {
            return <span></span>;
        }

        return (
            <div styleName={classNames('liq_loader', 'liq_loader--standalone')}>
                <Spinner center />
            </div>
        );
    }

    createInlineSpinner () {
        const spinnerClasses = classNames('sk-three-bounce', {
            'sk-three-bounce--absolute': this.props.absolute
        });
        return (
            <span key='spinner' styleName={spinnerClasses}>
                <span styleName={'sk-child sk-bounce1'}></span>
                <span styleName={'sk-child sk-bounce2'}></span>
                <span styleName={'sk-child'}></span>
            </span>
        );
    }

    smallSpinnerAlone () {
        return (
            <div key='spinner' styleName={classNames('sk-three-bounce-block', {
                'sk-three-bounce-block--div': this.props.renderAsDiv
            })}
            >
                <div styleName={'sk-child sk-bounce-block1'}></div>
                <div styleName={'sk-child sk-bounce-block2'}></div>
                <div styleName={'sk-child'}></div>
            </div>
        );
    }

    createSpinner () {
        if (this.props.loading && !this.props.noSpinner && !this.props.inline && !this.props.alone && !this.props.small) {
            return (
                <Spinner
                    correctCenter={this.props.correctCenter}
                    longDelay={this.props.longDelay}
                />
            );
        } else if (this.props.loading && !this.props.noSpinner && !this.props.alone) {
            const elements = [];

            if (!this.props.loading) {
                elements.push(
                    <span key='content'>{this.props.children}</span>
                );
            } else {
                elements.push(
                    <span>{this.createInlineSpinner(this.props.absolute)}</span>
                );
            }

            const classes = classNames('liq_inline-loader', {
                'liq_inline-loader--white': this.props.white
            });

            return (
                <span styleName={classes}>
                    {elements}
                </span>
            );
            // BigLoader
        } else if (this.props.loading && !this.props.noSpinner && this.props.alone && !this.props.small) {
            return (
                this.createBigLoader()
            );
        } else if (this.props.loading && !this.props.noSpinner && this.props.alone) {
            const elements = [];

            elements.push(<div styleName='liq_small-loader__content' key='content'>{this.props.children}</div>);
            if (this.props.loading) {
                elements.push(
                    // <Spinner key='spinner' renderAsDiv={this.props.renderAsDiv} />
                    // <span>{this.smallSpinnerAlone(this.props.renderAsDiv)}</span>
                    <div key='spinner' styleName={classNames('sk-three-bounce-block', {
                        'sk-three-bounce-block--div': this.props.renderAsDiv
                    })}
                    >
                        <div styleName={'sk-child sk-bounce-block1'}></div>
                        <div styleName={'sk-child sk-bounce-block2'}></div>
                        <div styleName={'sk-child'}></div>
                    </div>
                );
            }

            const smalltype = this.props.smalltype;
            const smallLoaderStyles = classNames({
                [_.kebabCase(smalltype)]: smalltype,

                'liq_small-loader': true,
                'pull-left': !this.props.noFloat,
                'liq_small-loader--active': this.props.loading,
                'liq_small-loader--min-height': this.props.minHeight,
                'liq_small-loader--min-height-small': this.props.minHeightSmall
            });

            return (
                <div classNames={smallLoaderStyles} styleName={smalltype}>
                    <ReactCSSTransitionGroup
                        transitionName='fade'
                        transitionEnterTimeout={0}
                        transitionLeaveTimeout={0}
                        transitionLeave={false}
                        component={this.props.renderAsDiv ? 'div' : 'span'}
                    >
                        {elements}
                    </ReactCSSTransitionGroup>
                </div>
            );
        }

        return <span>no spinner created</span>;
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

    render () {
        const loading = this.props.loading;
        const type = this.props.type;
        const loaderStyles = classNames({
            [_.kebabCase(type)]: type,

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
            <div id={this.props.id} classNames={loaderStyles} styleName={type} ref='loaderContainer'>
                <div styleName={'liq_loader__inner'}>
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
    // long delay
    longDelay: React.PropTypes.bool,
    // no spinner
    noSpinner: React.PropTypes.bool,
    // inline loader
    inline: React.PropTypes.bool,
    // color of the loader will be white
    white: React.PropTypes.bool,
    alone: React.PropTypes.bool,
    small: React.PropTypes.bool
};

Loader.defaultProps = {
    float: 'left'
};

Loader = CSSModules(Loader, styles, {allowMultiple: true});

export default Loader;
export { Loader };
