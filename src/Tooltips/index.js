import React from 'react';
import ReactDOM from 'react-dom';
import InfoBox from './Components.js';

import styles from './styles.css';

/**
 * Tooltips component
 * @param {Object} props The props for the component
 * @returns {React.Component} Component to be returned
 */
class Tooltips extends React.Component {
    constructor(props) {
        super(props);
        this.getPositions = this.getPositions.bind(this);
        this.handleMouseOver = this.handleMouseOver.bind(this);
        this.handleMouseOut = this.handleMouseOut.bind(this);
        this.state = {
            yAxis: '',
            xAsis: '',
            hover: false
        };
    }

    componentDidMount() {
        this.getPositions();
        this.mountContainer();
    }

    componentDidUpdate() {

        if (this.state.hover) {
            this.mountNode();
        } else {
            this.unMountNode();
        }
    }

    componentWillUnmount() {
        this.unmountContainer();
    }

    mountContainer() {
        this.body = document.body;
        this.container = document.createElement('div');
        this.body.appendChild(this.container);
    }

    mountNode() {
        const positions = [
            'top',
            'right',
            'bottom',
            'left'
        ];
        const placement = (positions.includes(this.props.position)) ? this.props.position : 'top';

        let infoBoxStyles = {
            top: `${this.state.yAxis}px`,
            left: `${this.state.xAxis}px`
        };

        // body.insertBefore(this.container, body.firstChild);
        this.body.append(this.container);
        ReactDOM.unstable_renderSubtreeIntoContainer(
            this,
            <InfoBox
                position={placement}
                cssStyles={infoBoxStyles}
            >
                {this.props.children}
            </InfoBox>,
            this.container
        );
    }

    unMountNode() {
        ReactDOM.unmountComponentAtNode(this.container);
    }

    unmountContainer() {
        this.body.removeChild(this.container);
    }

    getPositions() {
        const el = ReactDOM.findDOMNode(this);
        const position = el.getBoundingClientRect();
        const top = position.top;
        const right = position.right;
        const left = position.left;
        const width = position.width;
        const height = position.height;
        const centerY = top + height / 2;
        const centerX = left + width / 2;

        if (this.props.position === 'right' || this.props.position === 'left') {
            this.setState({
                yAxis: centerY,
                xAxis: this.props.position === 'left' ? left : right
            });
        } else {
            this.setState({
                yAxis: top,
                xAxis: centerX
            });
        }
    }

    handleMouseOver() {
        this.setState({
            hover: true
        });
    }

    handleMouseOut() {
        this.setState({
            hover: false
        });
    }

    render() {
        return (
            <span
                className={styles.liq_tooltips}
                onMouseOver={this.handleMouseOver}
                onMouseOut={this.handleMouseOut}
            >
                { this.props.text ?
                    <span className={styles.liq_tooltips__text}>
                        {this.props.text}
                    </span> :
                    null
                }
                <span className={styles.liq_tooltips__icon}>
                    <svg viewBox='0 0 80 80'>
                        <path d='M40 80c22.09 0 40-17.91 40-40S62.09 0 40 0 0 17.91 0 40s17.91 40 40 40zM28.13 23.55c.68-.6 1.425-1.17 2.235-1.71.81-.54 1.685-1.01 2.625-1.41.94-.4 1.96-.715 3.06-.945 1.1-.23 2.29-.345 3.57-.345 1.74 0 3.325.24 4.755.72 1.43.48 2.655 1.165 3.675 2.055 1.02.89 1.81 1.965 2.37 3.225s.84 2.67.84 4.23c0 1.52-.22 2.835-.66 3.945-.44 1.11-.99 2.075-1.65 2.895-.66.82-1.385 1.53-2.175 2.13l-2.235 1.695c-.7.53-1.305 1.05-1.815 1.56s-.815 1.085-.915 1.725l-.69 4.38h-5.07l-.51-4.89c-.12-.94.015-1.765.405-2.475.39-.71.91-1.36 1.56-1.95.65-.59 1.375-1.16 2.175-1.71.8-.55 1.55-1.15 2.25-1.8.7-.65 1.285-1.38 1.755-2.19s.705-1.775.705-2.895c0-.72-.135-1.365-.405-1.935-.27-.57-.645-1.06-1.125-1.47-.48-.41-1.055-.725-1.725-.945-.67-.22-1.395-.33-2.175-.33-1.14 0-2.105.125-2.895.375s-1.46.53-2.01.84c-.55.31-1.015.59-1.395.84-.38.25-.72.375-1.02.375-.72 0-1.24-.3-1.56-.9l-1.95-3.09zm5.67 35.37c0-.62.115-1.21.345-1.77.23-.56.545-1.04.945-1.44.4-.4.88-.72 1.44-.96.56-.24 1.16-.36 1.8-.36.64 0 1.235.12 1.785.36.55.24 1.03.56 1.44.96.41.4.735.88.975 1.44.24.56.36 1.15.36 1.77 0 .64-.12 1.235-.36 1.785-.24.55-.565 1.025-.975 1.425-.41.4-.89.715-1.44.945-.55.23-1.145.345-1.785.345-.64 0-1.24-.115-1.8-.345-.56-.23-1.04-.545-1.44-.945-.4-.4-.715-.875-.945-1.425-.23-.55-.345-1.145-.345-1.785z' fill='#ddd' fillRule='evenodd'/>
                    </svg>
                </span>
            </span>
        );
    }
}

Tooltips.defaultProps = {
    position: 'bottom'
};

Tooltips.propTypes = {
    position: React.PropTypes.string,
    text: React.PropTypes.oneOfType([
        React.PropTypes.string,
        React.PropTypes.element
    ])
};

export default Tooltips;

export {
    Tooltips
};
