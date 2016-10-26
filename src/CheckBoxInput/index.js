/**
 * Animated checkbox in material design style.
 */
import React      from 'react';
import classNames from 'classnames';
import CSSModules from 'react-css-modules';
import styles     from './styles.scss';
import _          from 'lodash';

const CheckBoxInput = React.createClass({
    getInitialState () {
        return {
            checked: false
        };
    },

    getDefaultProps () {
        return {
            onChange: () => {}
        };
    },

    onClick (e) {
        e.preventDefault();
        const newState = !(this.props.checked || this.state.checked);
        this.setState({
            checked: newState
        });
        this.props.onChange(newState);
    },

    render () {
        const checked  = !!(this.state.checked || this.props.checked);
        const label = this.props.label;

        const classes = classNames('checkbox', {
            'inline': this.props.inline,
            'error': this.props.error,
            'disabled': this.props.disabled
        });

        return (
            <div
                styleName={classes}
            >
                <span
                    id={this.props.name}
                    onClick={this.onClick}
                >
                    <input
                        ref='input'
                        styleName='filled-in'
                        name={this.props.name}
                        type='checkbox'
                        onChange={_.noop}
                        checked={checked}
                    />
                    <label>{label}</label>
                </span>
                {this.props.tooltipSeparated}
            </div>
        );
    }
});

/**
 * @memberof CheckBoxInput
 * @namespace props
 * @prop {Object} propTypes     - the props that are passed to this component
 */
CheckBoxInput.propTypes = {
    /**
     * @memberof CheckBoxInput.props
     * @prop {String} checked           - Is checkbox checked?
     */
    checked: React.PropTypes.bool,
    /**
     * @memberof CheckBoxInput.props
     * @prop {String} inline            - Should checkbox be inlined?
     */
    inline: React.PropTypes.bool,
    /**
     * @memberof CheckBoxInput.props
     * @prop {String} inline            - Should checkbox be inlined?
     */
    label: React.PropTypes.oneOfType([
        React.PropTypes.string,
        React.PropTypes.element
    ]),
    /**
     * @memberof CheckBoxInput.props
     * @prop {String} inline            - Should checkbox be inlined?
     */
    // Error messages
    error: React.PropTypes.oneOfType([
        React.PropTypes.boolean,
        React.PropTypes.string,
        React.PropTypes.element
    ]),
    /**
     * @memberof CheckBoxInput.props
     * @prop {String} inline            - Should checkbox be inlined?
     */
    // Function that will be executed on change
    onChange: React.PropTypes.func.isRequired,
    /**
     * @memberof CheckBoxInput.props
     * @prop {String} inline            - Should checkbox be inlined?
     */
    /** Separated tooltip which is not part of the label **/
    tooltipSeparated: React.PropTypes.object // eslint-disable-line
};

const _CheckBoxInput = CSSModules(CheckBoxInput, styles, {allowMultiple: true});

export default _CheckBoxInput;
export { _CheckBoxInput as CheckBoxInput };
