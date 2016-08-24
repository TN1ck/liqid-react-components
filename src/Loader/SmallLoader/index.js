/**
 * Global loader component that can be wrapped around any element.
 * If the component is in loading state, an animated css-loader will be shown instead of the content.
 */
import React from 'react';
import classNames from 'classnames';
import CSSModules from 'react-css-modules';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import styles from '../styles.css';

/**
 * Class representing a SmallLoader for Loader component
 * @namespace SmallLoader
 * @extends React.Component
 */
class SmallLoader extends React.Component {
    constructor (props) {
        super(props);
    }

    createSpinner () {
        return (
            <div key='spinner' styleName={classNames('sk-three-bounce-block', {
                'sk-three-bounce-block--div': this.props.renderAsDiv
            })}
            >
                <div styleName='sk-child sk-bounce-block1'></div>
                <div styleName='sk-child sk-bounce-block2'></div>
                <div styleName='sk-child'></div>
            </div>
        );
    }

    render () {
        const elements = [];

        elements.push(
            <div styleName='liq_small-loader__content' key='content'>{this.props.children}</div>
        );
        if (this.props.loading) {
            elements.push(
                this.createSpinner()
            );
        }

        return (
            <div styleName={classNames(
                'liq_small-loader', {
                    // 'pull-left': !this.props.noFloat, // not available right now
                    'liq_small-loader--active': this.props.loading,
                    'liq_small-loader--min-height': this.props.minHeight,
                    'liq_small-loader--min-height-small': this.props.minHeightSmall
                }
            )}
            >
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
}


/**
 * Returns spinner for.
 * @param {Boolean} props       - The employee who is responsible for the project.
 * @return {Object} Object      - Spinner for SmallLoader.

function Spinner (props) {
    return (
        <div key='spinner' styleName={classNames('sk-three-bounce-block', {
            'sk-three-bounce-block--div': props.renderAsDiv
        })}
        >
            <div styleName='sk-child sk-bounce-block1'></div>
            <div styleName='sk-child sk-bounce-block2'></div>
            <div styleName='sk-child sk-bounce-block3'></div>
        </div>
    );
}

/**
 * Returns small loading indicator.
 * @param {Boolean} props       - The employee who is responsible for the project.
 * @return {Object} Object      - The small loading indicator.

function Loader (props) {
    const elements = [];

    elements.push(<div styleName='liq_small-loader__content' key='content'>{props.children}</div>);
    if (props.loading) {
        elements.push(<Spinner key='spinner' renderAsDiv={props.renderAsDiv} />);
    }

    return (
        <div styleName={classNames(
            'liq_small-loader', {
                'pull-left': !props.noFloat,
                'liq_small-loader--active': props.loading,
                'liq_small-loader--min-height': props.minHeight,
                'liq_small-loader--min-height-small': props.minHeightSmall
            }
        )}
        >
            <ReactCSSTransitionGroup
                transitionName='fade'
                transitionEnterTimeout={0}
                transitionLeaveTimeout={0}
                transitionLeave={false}
                component={props.renderAsDiv ? 'div' : 'span'}
            >
                {elements}
            </ReactCSSTransitionGroup>
        </div>
    );
}
*/

/**
 * @memberof SmallLoader
 * @namespace props
 * @prop {Object} propTypes             - Props that are passed to this component
 */
SmallLoader.propTypes = {
    /**
     * @memberof SmallLoader.props
     * @prop {Boolean} loading          - Toogle the loading state
     */
    loading: React.PropTypes.bool,
    /**
     * @memberof SmallLoader.props
     * @prop {Boolean} renderAsDiv      - Wrap the loading indicator in div-tags
     */
    renderAsDiv: React.PropTypes.bool
};

SmallLoader = CSSModules(SmallLoader, styles, {allowMultiple: true});

export default SmallLoader;
export { SmallLoader as SmallLoader };
