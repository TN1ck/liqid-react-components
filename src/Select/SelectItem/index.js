import React from 'react';
import classNames from 'classnames';
import styles from '../styles.css';

/**
 * Class represeting a single SeletItem
 * @namespace Select
 * @extends React.Component
 */
class SelectItem extends React.Component {
    constructor (props) {
        super(props);
        this.onMouseEnter = this.onMouseEnter.bind(this);
    }
    onMouseEnter () {
        this.props.onMouseEnter(this.props.indexInList);
    }
    render () {
        const classes = classNames(styles.selectSimpleListItem, {
            [styles.selectSimpleListItemSelected]: this.props.selected,
            [styles.selectSimpleListItemActive]: this.props.active,
            [styles.selectSimpleListItemDisabled]: this.props.disabled,
            [styles.selectSimpleListItemEmpty]: !this.props.children || !this.props.children.length,
            [styles.listSeparator]: this.props.separator
        });
        const content = (this.props.children && this.props.children.length) ? this.props.children : '\u00a0';
        return (
            <li
                className={classes}
                onMouseEnter={this.onMouseEnter}
                onMouseDown={this.props.onMouseDown}
                data-value={this.props.value}
            >
                {content}
            </li>
        );
    }
}

/**
 * @memberof SelectItem
 * @namespace props
 * @prop {Object} propTypes         - the props that are passed to this component
 */
SelectItem.propTypes = {
    /**
     * @memberof Select.props
     * @prop {Boolean} active       - is the item currently active?
     */
    active: React.PropTypes.bool,
    /**
     * @memberof Select.props
     * @prop {Boolean} selected     - is the item currently selected?
     */
    selected: React.PropTypes.bool,
    /**
     * @memberof Select.props
     * @prop {Boolean} disabled     - is the item currently disabled?
     */
    disabled: React.PropTypes.bool,
    /**
     * @memberof Select.props
     * @prop {Boolean} separator    - is the item a spearator?
     */
    separator: React.PropTypes.bool,
    /**
     * @memberof Select.props
     * @prop {String} children       - text in SelectItem
     */
    children: React.PropTypes.string
};

export default SelectItem;
export { SelectItem };
