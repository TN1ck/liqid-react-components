/**
 * Global loader component that can be wrapped around any element.
 * If the component is in loading state, an animated css-loader will be shown instead of the content.
 */
import React from 'react';
import CSSModules from 'react-css-modules';
import styles from '../styles.css';
import classNames from 'classnames';
import Spinner from '../Spinner';
import _ from 'lodash';
/* const {
    animateScroll
}                = require('react-scroll'); */
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
        /* this.scrollToTop = this.scrollToTop.bind(this); */
        this.shrink = this.shrink.bind(this);
        this.unshrink = this.unshrink.bind(this);
    }

    createInlineSpinner () {
        const spinnerType = this.props.type;

        const spinnerStyles = classNames({
            [_.kebabCase(spinnerType)]: spinnerType,

            'sk-three-bounce': true
        });

        return (
            <span key='spinner' styleNames={spinnerStyles}>
                <span className='sk-child sk-bounce1'>bounce1</span>
                <span className='sk-child sk-bounce2'>bounce2</span>
                <span className='sk-child sk-bounce3'>bounce3</span>
            </span>
        );
    }

    createSpinner () {
        if (this.props.loading && !this.props.noSpinner && !this.props.inline) {
            return (
                <Spinner
                    correctCenter={this.props.correctCenter}
                    longDelay={this.props.longDelay}
                />
            );
        } else if (this.props.loading && !this.props.noSpinner) {
            const elements = [];

            if (!this.props.loading) {
                elements.push(
                    <span key='content'>{this.props.children}</span>
                );
            } else {
                elements.push(
                    <span>{this.createInlineSpinner()}</span>
                );
            }

            const classes = classNames('liq_inline-loader', {
                'liq_inline-loader--white': this.props.white
            });

            return (
                <span className={classes}>
                    {elements}
                </span>
            );
        }

        return <span></span>;
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

            'loader': true,
            'loader--active': loading,
            'loader--inactive': !loading,
            'loader--active-background': loading && !this.props.noBackground,
            'loader--min-height': loading && this.props.minHeight,
            'loader--max-height': loading && this.props.maxHeight,
            'loader--center-from-top': this.props.centerFromTop
        });

        const style = {
            float: this.props.floatCSS
        };
        return (
            <div id={this.props.id} styleNames={loaderStyles} className={type} ref='loaderContainer'>
                <div className={'loader__inner'}>
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
    white: React.PropTypes.bool
};

Loader.defaultProps = {
    float: 'left'
};

Loader = CSSModules(Loader, styles, {allowMultiple: true});

export default Loader;
export { Loader };
