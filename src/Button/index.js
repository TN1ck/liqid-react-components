/**
 * Class representing a stylable Button
 * @namespace Button
 * @extends React.Component
 */
class Button extends React.Component {
    render () {
        return (
            <div>
            </div>
        );
    }
}

/**
 * @memberof Button
 * @namespace props
 * @prop {Object} propTypes - the props that are passed to this component
 */
Select.propTypes = {
    /**
     * @memberof Button.props
     * @prop {String} name - the name of the select (used as HTML name attribute on the input, if submit or button used)
     */
    name: React.PropTypes.string,
    /**
     * @memberof Button.props
     * @prop {String} type - the type of the button - changes the tag used
     * For example: when using button <button> is used. For 'submit' input type="submit" is used.
     */
    type: React.PropTypes.string,
    /**
     * @memberof Button.props
     * @prop {String} children - the content of the button
     */
    children: React.PropTypes.object,
    /**
     * @memberof Button.props
     * @prop {func} onClick - Callback called on click of the button
     */
    onClick: React.PropTypes.func,
    /**
     * @memberof Button.props
     * @prop {String} className - used className for the button
     */
    className: React.PropTypes.string,

    /**
     * @memberof Button.props
     * @prop {Boolean} deactivated - is button deactivated?
     */
    deactivated: React.PropTypes.bool,
    /**
     * @memberof Button.props
     * @prop {String} size - small, normal, large
     */
    size: React.PropTypes.string,
    /**
     * @memberof Button.props
     * @prop {Boolean} loading - is button loading? (show indicator and deactivate)
     */
    loading: React.PropTypes.bool
};

export { Button as Button };