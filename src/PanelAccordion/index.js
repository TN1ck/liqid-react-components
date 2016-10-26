import React              from 'react';
import classNames         from 'classnames';
import CSSModules         from 'react-css-modules';
import styles             from './styles.scss';
import Panel              from './Panel';
import CheckBoxInput      from '../CheckBoxInput';
import FancyButton        from '../FancyButton';
import AnimatedPlusButton from '../AnimatedPlusButton';

class PanelAccordion extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            expanded: props.expanded
        };
        this.onClick = this.onClick.bind(this);
        this.onKeyPress = this.onKeyPress.bind(this);
    }
    onClick () {
        if (!this.props.children) {
            return;
        }
        const expanded = !this.state.expanded;
        this.setState({expanded});
        this.props.callback && this.props.callback(expanded);
        this.props.trackingCallback && this.props.trackingCallback();

        setTimeout(function () {
            const event = document.createEvent('Event');
            event.initEvent('resize', true, true);
            window.dispatchEvent(event);
        }, 0);
    }
    onKeyPress (e) {
        if (e.charCode === 13) { // enter-key
            this.onClick(e);
        }
    }
    getHeader (type) {
        const expanded = this.props.expanded || this.state.expanded;

        let button;
        if (this.props.buttonLeft || this.props.buttonRight) {
            button = (
                <AnimatedPlusButton
                    active={this.props.children ? !expanded : false}
                />
            );
        }

        let headerAdditionalContent;
        if (this.props.headerAdditionalContent) {
            headerAdditionalContent = (
                <div styleName='put-right'>
                    {this.props.headerAdditionalContent}
                </div>
            );
        }

        const headerContent = this.props.header;
        const headers = {
            fancy: () => {
                return (
                    <FancyButton expanded={expanded}>
                        {headerContent}
                    </FancyButton>
                );
            },
            checkbox: () => {
                return (
                    <CheckBoxInput
                        name={this.props.name}
                        checked={expanded}
                        label={headerContent}
                    />
                );
            },
            default: () => {
                return (
                    <div>
                        <span styleName='panel-animated-plus-button'>
                            {button}
                        </span>
                        {headerContent}
                        {headerAdditionalContent}
                    </div>
                );
            }
        };

        return (headers[type] || headers.default)();
    }
    render () {
        const header = (
            <div
                styleName='panel-header'
                tabIndex='0'
                onClick={this.onClick}
                onKeyPress={this.onKeyPress}
                id={this.props.id}
            >
                {this.getHeader(this.props.type)}
            </div>
        );

        return (
            <Panel
                expanded={this.state.expanded}
                header={header}
                buttonLeft={this.props.buttonLeft}
                animate={this.props.animate}
            >
                {this.props.children}
            </Panel>
        );
    }
}

/**
 * @memberof PanelAccordion
 * @namespace props
 * @prop {Object} propTypes         - the props that are passed to this component
 */
PanelAccordion.propTypes = {
    /**
     * @memberof PanelAccordion.props
     * @prop {Object} header            - Header element of panel
     */
    header: React.PropTypes.oneOfType([
        React.PropTypes.object,
        React.PropTypes.string
    ]),
    /**
     * @memberof PanelAccordion.props
     * @prop {String} type              - Defines type of panel
     */
    type: React.PropTypes.string,
    /**
     * @memberof PanelAccordion.props
     * @prop {Boolean} animate           - Should the height be animated?
     */
    animate: React.PropTypes.bool,
    /**
     * @memberof PanelAccordion.props
     * @prop {Boolean} expanded          - Current state of expanded
     */
    expanded: React.PropTypes.bool
};


PanelAccordion = CSSModules(PanelAccordion, styles, {allowMultiple: true});

export default PanelAccordion;
export { PanelAccordion as PanelAccordion };
