import React from 'react';
import { findDOMNode } from 'react-dom';
import classNames from 'classnames';
import styles from './styles.css';

class InfoBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            placement: '',
            boxWidth: 'auto',
            yAxis: '',
            xLeftAxis: '',
            xRightAxis: 'auto',
            transformX: '0',
            transformY: '0'
        };
    }

    componentWillMount() {
        this.checkInViewportPositioning();
        this.setInViewportPositionName();
    }

    componentDidMount() {
        const node = findDOMNode(this);
        this.checkandAdjustWidth(node);
        if (!this.isElementInViewport(node)) {
            // this.props.onOutOfViewportCheck(node);
            this.notInViewportHandler(node);
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
        // TODO: getBoundingClientRect does not take transform into consideration so when element is not on the right // side of the viewport it is not accurate. Need to fix.
        let rect = el.getBoundingClientRect();

        if (rect.top <= 0 ) {
            // console.log('top is not in viewport');
            // console.log('then move top to bottom');
            this.setState({
                placement: 'bottom'
            });
            this.positionBottom();
            // return;
        }


        if (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight)) {
            // console.log('bottom is not in viewport');
            // console.log('then move bottom to top');
            this.setState({
                placement: 'top'
            });
            this.positionTop();
            // return;
        }

        if (rect.right >= (window.innerWidth || document.documentElement.clientWidth)) {
            // console.log('right is not in viewport');
            // console.log('then move right to 0');
            this.setState({
                xLeftAxis: 'auto',
                xRightAxis: 0,
                transformX: '0'
            });
            // return;
        }

        if (rect.left <= 0) {
            // console.log('left is not in viewport');
            // console.log('then move left to 0');
            this.setState({
                xLeftAxis: this.props.left,
                transformX: '0'
            });
            // return;
        }
    }

    checkandAdjustWidth(el) {
        // adjust width of the inner container to suit long dynamic text
        let rect = el.getBoundingClientRect();

        if (rect.height > rect.width) {
            this.setState({
                boxWidth: rect.height
            });
        }
    }

    positionTop() {
        let margin = 10;
        this.setState({
            yAxis: this.props.top - margin,
            xLeftAxis: `${this.props.centerX}px`,
            transformX: '-50%',
            transformY: '-100%'
        });
    }

    positionRight() {
        let margin = 10;
        this.setState({
            yAxis: this.props.centerY,
            xLeftAxis: `${this.props.right + margin}px`,
            transformX: '0',
            transformY: '-50%'
        });
    }

    positionLeft() {
        let margin = 10;
        this.setState({
            yAxis: this.props.centerY,
            xLeftAxis: `${this.props.left - margin}px`,
            transformX: '-100%',
            transformY: '-50%'
        });
    }

    positionBottom() {
        let margin = 10;
        this.setState({
            yAxis: this.props.bottom + margin,
            xLeftAxis: `${this.props.centerX}px`,
            transformX: '-50%',
            transformY: '0'
        });
    }


    checkInViewportPositioning() {
        let position = this.props.position;

        switch (position) {
        case 'top':
            this.positionTop();
            break;
        case 'right':
            this.positionRight();
            break;
        case 'bottom':
            this.positionBottom();
            break;
        case 'left':
            this.positionLeft();
            break;
        default:
            this.positionTop();
        }
    }

    setInViewportPositionName() {
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
            width: `${this.state.boxWidth}px`,
            top: `${this.state.yAxis}px`,
            right: `${this.state.xRightAxis}px`,
            left: `${this.state.xLeftAxis}`,
            transform: `translate(${this.state.transformX}, ${this.state.transformY})`
        };

        return (
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
