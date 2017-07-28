import React from 'react';
import { findDOMNode } from 'react-dom';
import classNames from 'classnames';
import styles from './styles.css';

class InfoBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            placement: '',
            yAxis: '',
            xAxis: '',
            transformX: '0',
            transformY: '0',
            notInViewportTop: false,
            notInViewportRight: false,
            notInViewportBottom: false,
            notInViewportLeft: false
        };
    }

    componentWillMount() {
        this.checkPositioning();
    }

    componentDidMount() {
        const node = findDOMNode(this);
        if (!this.isElementInViewport(node)) {
            this.notInViewportHandler(node);
        } else {
            this.setInViewportPosition();
        }
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

    notInViewportHandler(el) {
        let rect = el.getBoundingClientRect();

        if (rect.top <= 0) {
            console.log('top is not in viewport');
            console.log('then move top to bottom');
            this.setState({
                notInViewportTop: true,
                placement: 'bottom'
            });
        }

        if (rect.left <= 0) {
            console.log('left is not in viewport');
            console.log('then move left to 0');
            this.setState({
                notInViewportLeft: true
                // xAxis: this.props.left
            });
        }

        if (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight)) {
            console.log('bottom is not in viewport');
            console.log('then move bottom to top');
            this.setState({
                notInViewportBottom: true
            });
        }

        if (rect.right >= (window.innerWidth || document.documentElement.clientWidth)) {
            console.log('right is not in viewport');
            console.log('then move right to right (0) of the viewport');
        }
    }

    checkPositioning() {
        const props = this.props;
        const margin = 10;
        if (props.position === 'right' || props.position === 'left') {
            this.setState({
                placement: props.position === 'left' ? 'left' : 'right',
                yAxis: props.centerY,
                xAxis: props.position === 'left' ? props.left - margin : props.right + margin,
                transformX: props.position === 'left' ? '-100%' : '0',
                transformY: '-50%',
            });
        } else {
            this.setState({
                placement: props.position === 'top' ? 'top' : 'bottom',
                yAxis: props.position === 'top' ? props.top - margin : props.bottom + margin,
                xAxis: props.centerX,
                transformX: '-50%',
                transformY: props.position === 'top' ? '-100%' : '0'
            });
        }
    }

    setInViewportPosition() {
        const positions = [
            'top',
            'right',
            'bottom',
            'left'
        ];
        let positioning = (positions.includes(this.props.position)) ? this.props.position : 'top';
        this.setState({
            placement: positioning
        });
    }

    render() {
        let cssStyles = {
            top: `${this.state.yAxis}px`,
            left: `${this.state.xAxis}px`,
            transform: `translate(${this.state.transformX}, ${this.state.transformY})`
        };

        return (
            // ${classNames(`liq_tooltips__hint--not-in-viewport-${notInViewportClasses}`)}
        <span
            className={`
                ${styles.liq_tooltips__hint}
                ${classNames(`liq_tooltips__hint--${this.state.placement}`)}
            `}
            style={cssStyles}
        >
            <div className={styles.liq_tooltips__hint__inner}>
                {this.props.children}
            </div>
        </span>
        );
    }
}

export default InfoBox;
