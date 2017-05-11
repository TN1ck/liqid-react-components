/**
 * Most of this code is adapated from https://github.com/qimingweng/react-modal-dialog
 */

import React from 'react';
import ReactDOM from 'react-dom';
import EventStack from './EventStack';

import styles from './styles.css';

const ESCAPE = 27;

/**
 * Get the keycode from an event
 * @param {Event} event The browser event from which we want the keycode from
 * @returns {Number} The number of the keycode
 */
function getKeyCodeFromEvent (event) {
    return  event.which || event.keyCode || event.charCode;
}

// Render into subtree is necessary for parent contexts to transfer over
// For example, for react-router
const renderSubtreeIntoContainer = ReactDOM.unstable_renderSubtreeIntoContainer;

export class ModalContent extends React.Component {
    constructor (props) {
        super(props);
        this.handleGlobalClick = this.handleGlobalClick.bind(this);
        this.handleGlobalKeydown = this.handleGlobalKeydown.bind(this);
    }
    componentWillMount () {
        /**
        * This is done in the componentWillMount instead of the componentDidMount
        * because this way, a modal that is a child of another will have register
        * for events after its parent
        */
        this.eventToken = EventStack.addListenable([
            [ 'click', this.handleGlobalClick ],
            [ 'keydown', this.handleGlobalKeydown ]
        ]);
    }
    componentWillUnmount () {
        EventStack.removeListenable(this.eventToken);
    }
    shouldClickDismiss (event) {
        const { target } = event;
        // This piece of code isolates targets which are fake clicked by things
        // like file-drop handlers
        if (target.tagName === 'INPUT' && target.type === 'file') {
            return false;
        }
        if (!this.props.dismissOnBackgroundClick) {
            if (target !== this.refs.self || this.refs.self.contains(target)) {
                return false;
            }
        } else {
            if (target === this.refs.self || this.refs.self.contains(target)) {
                return false;
            }
        }
        return true;
    }
    handleGlobalClick (event) {
        if (this.shouldClickDismiss(event)) {
            if (typeof this.props.onClose === 'function') {
                this.props.onClose(event);
            }
        }
    }
    handleGlobalKeydown (event) {
        if (getKeyCodeFromEvent(event) === ESCAPE) {
            if (typeof this.props.onClose === 'function') {
                this.props.onClose(event);
            }
        }
    }
    render () {

        return (
            <div
                ref="self"
                className={styles['liq_modal-content']}
            >
                {
                    (this.props.showButton && this.props.onClose) ?
                    <button className={styles['liq_modal-close']} onClick={this.props.onClose}>
                        <span aria-hidden='true'>{'×'}</span>
                    </button> : null
                }
                {this.props.children}
            </div>
        );
    }
}

ModalContent.propTypes = {
    showButton: React.PropTypes.bool,
    onClose: React.PropTypes.func, // required for the close button
    className: React.PropTypes.string,
    children: React.PropTypes.node,
    dismissOnBackgroundClick: React.PropTypes.bool
};

ModalContent.defaultProps = {
    dismissOnBackgroundClick: true,
    showButton: true
};

export class ModalPortal extends React.Component {
    componentDidMount () {
        // disable scrolling on body
        document.body.classList.add('liq_modal-open');

        // Create a div and append it to the body
        this._target = document.body.appendChild(document.createElement('div'));

        // Mount a component on that div
        this._component = renderSubtreeIntoContainer(this, this.props.children, this._target);

        // A handler call in case you want to do something when a modal opens, like add a class to the body or something
        if (typeof this.props.onModalDidMount === 'function') {
            this.props.onModalDidMount();
        }
    }
    componentDidUpdate () {
        // When the child component updates, we have to make sure the content rendered to the DOM is updated to
        this._component = renderSubtreeIntoContainer(this, this.props.children, this._target);
    }
    componentWillUnmount () {
        /**
        * Let this be some discussion about fading out the components on unmount.
        * Right now, there is the issue that if a stack of components are layered
        * on top of each other, and you programmatically dismiss the bottom one,
        * it actually takes some time for the animation to catch up to the top one,
        * because each modal doesn't send a dismiss signal to its children until
        * it itself is totally gone...
        */

        const done = () =>  {
            // Modal will unmount now
            // Call a handler, like onModalDidMount
            if (typeof this.props.onModalWillUnmount === 'function') {
                this.props.onModalWillUnmount();
            }

            // Remove the node and clean up after the target
            ReactDOM.unmountComponentAtNode(this._target);
            document.body.removeChild(this._target);
            document.body.classList.remove('liq_modal-open');
        };

        // A similar API to react-transition-group
        if (typeof this._component.componentWillLeave === 'function') {
            // Pass the callback to be called on completion
            this._component.componentWillLeave(done);
        } else {
            // Call completion immediately
            done();
        }
    }
    render () {
        return null;
    } // This doesn't actually return anything to render
}

ModalPortal.propTypes = {
    onClose: React.PropTypes.func, // This is called when the dialog should close
    children: React.PropTypes.node,
    onModalDidMount: React.PropTypes.func, // optional, called on mount
    onModalWillUnmount: React.PropTypes.func // optional, called on unmount
};

export class ModalBackground extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            // This is set to false as soon as the component has mounted
            // This allows the component to change its css and animate in
            transparent: true
        };
    }
    componentDidMount () {
        // Create a delay so CSS will animate
        requestAnimationFrame(() => this.setState({ transparent: false }));
    }
    componentWillLeave (callback) {
        this.setState({
            transparent: true,
            componentIsLeaving: true
        });

        // There isn't a good way to figure out what the duration is exactly,
        // because parts of the animation are carried out in CSS...
        setTimeout(() => {
            callback();
        }, this.props.duration);
    }
    render () {
        const { transparent } = this.state;

        const overlayStyle = {
            opacity: transparent ? 0 : 0.6
        };

        const containerStyle = {
            opacity: transparent ? 0 : 1
        };

        return (
            <div className={styles['liq_modal-background']} style={{zIndex: this.props.zIndex}}>
                <div style={overlayStyle} className={styles['liq_modal-background__overlay']} />
                <div style={containerStyle} className={styles['liq_modal-background__container']}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

ModalBackground.defaultProps = {
    duration: 300,
    zIndex: 1100 // to lay above tooltips and the website header
};

ModalBackground.propTypes = {
    onClose: React.PropTypes.func,
    duration: React.PropTypes.number.isRequired,
    zIndex: React.PropTypes.number.isRequired,
    children: React.PropTypes.node
};

export default {
    ModalPortal,
    ModalBackground,
    ModalContent
};
