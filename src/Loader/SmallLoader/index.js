/**
 * Global loader component that can be wrapped around any element.
 * If the component is in loading state, an animated css-loader will be shown instead of the content.
 */
import React from 'react';
import classNames from 'classNames';
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

SmallLoader.propTypes = {
    // Toggle the loading state
    loading: React.PropTypes.bool,
    renderAsDiv: React.PropTypes.bool
};

SmallLoader = CSSModules(SmallLoader, styles, {allowMultiple: true});

export default SmallLoader;
export { SmallLoader as SmallLoader };
