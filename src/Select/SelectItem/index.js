import React from 'react';
import classNames from 'classnames';
import styles from '../styles.css';

/**
 * Class represeting a single SeletItem
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
            >
                {content}
            </li>
        );
    }
}

export default SelectItem;
export { SelectItem };
