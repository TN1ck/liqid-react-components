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

    createSpinner () {
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
                this.createSpinner()
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

/**
 * Returns standalone big loading indicator or empty span-tag.
 * @param {Boolean} props       - The employee who is responsible for the project.
 * @return {Object} Loader      - The loading indicator.

function Spinner (props) {
    const spinnerClasses = classNames('sk-three-bounce', {
        'sk-three-bounce--absolute': props.absolute
    });
    return (
        <span key='spinner' styleName={spinnerClasses}>
            <span styleName='sk-child sk-bounce1'></span>
            <span styleName='sk-child sk-bounce2'></span>
            <span styleName='sk-child'></span>
        </span>
    );
}
 */

/**
 * Returns standalone big loading indicator or empty span-tag.
 * @param {Boolean} props       - The employee who is responsible for the project.
 * @return {Object} Loader      - The loading indicator.

function InlineLoader (props) {
    const elements = [];

    if (!props.loading) {
        elements.push(<span key='content'>{props.children}</span>);
    } else {
        elements.push(<Spinner key='spinner' absolute={props.absolute} />);
    }

    const classes = classNames('liq_inline-loader', {
        'liq_inline-loader--white': props.white
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
*/

/**
 * @memberof InlineLoader
 * @namespace props
 * @prop {Object} propTypes             - Props that are passed to this component
 */
InlineLoader.propTypes = {
    /**
     * @memberof InlineLoader.props
     * @prop {Boolean} loading          - Toogles the loading state
     */
    loading: React.PropTypes.bool.isRequired,
    /**
     * @memberof InlineLoader.props
     * @prop {Boolean} white            - Show the loading indicator in white
     */
    white: React.PropTypes.bool
};

InlineLoader = CSSModules(InlineLoader, styles, {allowMultiple: true});

export default InlineLoader;
export { InlineLoader as InlineLoader };
