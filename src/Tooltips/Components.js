import React from 'react';
import { findDOMNode } from 'react-dom';
import classNames from 'classnames';
import styles from './styles.css';

class InfoBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notInViewport: false
        };
    }

    componentDidMount() {
        const node = findDOMNode(this);
        if (!this.isElementInViewport(node)) {
            this.notInViewportHandler();
        }
    }

    notInViewportHandler() {
        this.setState({
            notInViewport: true
        });
    }

    isElementInViewport (el) {
        let rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    render() {
        return (
        <span
            className={`
                ${styles.liq_tooltips__hint}
                ${this.state.notInViewport ? 'liq_tooltips__hint--not-in-viewport' : classNames(`liq_tooltips__hint--${this.props.position}`)}
            `}
            style={this.state.notInViewport ? this.props.reposition : this.props.cssStyles}
        >
            <div className={styles.liq_tooltips__hint__inner}>
                {this.props.children}
            </div>
        </span>
        );
    }
}

export default InfoBox;
