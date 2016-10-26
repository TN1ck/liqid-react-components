import React              from 'react';
import classNames         from 'classnames';
import CSSModules         from 'react-css-modules';
import styles             from '../styles.scss';

class Panel extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            expanded: props.expanded,
            height: 0,
            display: props.expanded ? 'block' : 'none'
        };
        this.updateHeight = this.updateHeight.bind(this);
    }
    shouldComponentUpdate (props, state) {
        return state.height !== this.state.height || state.expanded !== this.state.expanded;
    }
    updateHeight () {
        clearTimeout(this.timeout);
        const panelDom = this.refs.panelContent;
        if (!this.state.expanded) {
            // expand content and store height
            panelDom.style.height = 'auto';
            panelDom.style.display = 'block';
            this.contentHeight = panelDom.offsetHeight;
            panelDom.style.height = 0;
            // force browser to trigger a reflow
            panelDom.offsetHeight;

            // animate height to calculated value
            this.setState({
                height: this.contentHeight,
                expanded: true
            });
            // makes sure the panel changes height on window resize
            this.timeout = setTimeout(() => {
                this.setState({
                    height: 'auto'
                });
            }, 1000);
        } else if (this.state.expanded) {
            panelDom.style.height = this.contentHeight + 'px';
            // force browser to trigger a reflow
            panelDom.offsetHeight;

            this.setState({
                height: 0,
                expanded: false
            });

        }
    }
    render () {
        const transitionSpeed = 0.5;
        const style = {
            display: this.state.display,
            height: this.state.height,
            transition: `all ${this.props.animate ? transitionSpeed : 0}s ease-out`
        };
        const classes = classNames('panel', {
            'padding-left': this.props.buttonLeft
        });

        return (
            <div styleName={classes} onClick={this.updateHeight}>
                {this.props.header}
                <div ref='panelContent' style={style}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

/**
 * @memberof Panel
 * @namespace props
 * @prop {Object} propTypes         - the props that are passed to this component
 */
Panel.propTypes = {
    /**
     * @memberof Panel.props
     * @prop {Boolean} expanded          - Current state of expanded
     */
    expanded: React.PropTypes.bool
};


Panel = CSSModules(Panel, styles, {allowMultiple: true});

export default Panel;
export { Panel as Panel };
