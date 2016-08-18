/**
 * Global loader component that can be wrapped around any element.
 * If the component is in loading state, an animated css-loader will be shown instead of the content.
 */
import React from 'react';
import classNames from 'classnames';
import CSSModules from 'react-css-modules';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import styles from '../styles.css';


class InlineLoader extends React.Component {
    constructor (props) {
        super(props);
    }

    spinner () {
        const spinnerClasses = classNames('sk-three-bounce', {
            'sk-three-bounce--absolute': this.props.absolute
        });
        return (
            <span key='spinner' styleName={spinnerClasses}>
                <span styleName='sk-child sk-bounce1'></span>
                <span styleName='sk-child sk-bounce2'></span>
                <span styleName='sk-child'></span>
            </span>
        );
    }

    render () {
        const elements = [];

        if (!this.props.loading) {
            elements.push(
                <span key='content'>{this.props.children}</span>
            );
        } else {
            elements.push(
                this.spinner()
            );
        }

        const classes = classNames('liq_inline-loader', {
            'liq_inline-loader--white': this.props.white
        });

        return (
            <span styleName={classes}>
                <ReactCSSTransitionGroup
                    transitionName='fade'
                    transitionEnterTimeout={0}
                    transitionLeaveTimeout={0}
                    transitionLeave={false}
                >
                    {elements}
                </ReactCSSTransitionGroup>
            </span>
        );
    }
}

InlineLoader.propTypes = {
    // Toggle the loading state
    loading: React.PropTypes.bool.isRequired,
    white: React.PropTypes.bool
};

InlineLoader = CSSModules(InlineLoader, styles, {allowMultiple: true});

export { InlineLoader as InlineLoader };
