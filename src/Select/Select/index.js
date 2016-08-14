import React from 'react';
import classNames from 'classnames';
import SelectItem from '../SelectItem';
import ReactDom from 'react-dom';

import styles from '../styles.scss';

let noMouseTimeout;

/**
 * Find the element that fullfills the predicate, starting from the end of the list
 *
 * @param {Array} list - the list we use
 * @param {function} predicate - the accessor we use to search the list
 * @param {Number} startPosition - where the find starts
 * @returns {Number} The last index where the predicate returned true
 */
function findLastIndex (list, predicate, startPosition) {
    let index = (typeof startPosition === 'number') ?  startPosition : (list.length - 1);
    while (index >= 0) {
        const item = list[index];
        if (predicate(item)) {
            return index;
        }
        index--;
    }
    return -1;
}

/**
 * Find the element that fullfills the predicate, starting from the start of the list
 *
 * @param {Array} list - the list we use
 * @param {function} predicate - the accessor we use to search the list
 * @param {Number} startPosition - where the find starts
 * @returns {Number} The last index where the predicate returnedfindIndex( true
 */
function findIndex (list, predicate, startPosition) {
    let index = (typeof startPosition === 'number') ?  startPosition : 0;
    while (index < list.length) {
        const item = list[index];
        if (predicate(item)) {
            return index;
        }
        index++;
    }
    return -1;
}

/**
 * Class representing a stylable Select Input
 * The input consists of a regular textinput which is styled like a dropdown
 * and disabled for text input
 * This enables us to make the select input tabable like a native browser input
 * @namespace Select
 * @extends React.Component
 */
class Select extends React.Component {
    /**
     * Create a select.
     * Initially the Select is closed.
     * If a defaultValue is given from outside - use it if not deativated
     * @param {Object} props properties handed to the Select
     */
    constructor (props) {
        super(props);
        const defaultValueItemIndex = this.getIndexByValue(props.defaultValue || props.value);
        this.state = {
            closed: true,
            selectedItemIndex: null,
            valueEncapsulated: this.isDeactivatedItem(defaultValueItemIndex) ? null : (props.defaultValue || props.value),
            noMouse: false
        };
        this.openList                  = this.openList.bind(this);
        this.closeList                 = this.closeList.bind(this);
        this.toggleList                = this.toggleList.bind(this);
        this.applyValue                = this.applyValue.bind(this);
        this.keyOnDropdown             = this.keyOnDropdown.bind(this);
        this.selectPreviousItem        = this.selectPreviousItem.bind(this);
        this.selectNextItem            = this.selectNextItem.bind(this);
        this.createShownValue          = this.createShownValue.bind(this);
        this.isDeactivatedItem         = this.isDeactivatedItem.bind(this);
        this.getLastItemIndex          = this.getLastItemIndex.bind(this);
        this.getFirstItemIndex         = this.getFirstItemIndex.bind(this);
        this.scrollToSelected          = this.scrollToSelected.bind(this);
        this.selectSpecificItemByIndex = this.selectSpecificItemByIndex.bind(this);
        this.searchForFirstLetter      = this.searchForFirstLetter.bind(this);
        this.mouseSelectIndex          = this.mouseSelectIndex.bind(this);
        this.getValueByIndex           = this.getValueByIndex.bind(this);
    }
    componentWillReceiveProps (props) {
        if (props.value) {
            if (this.state.valueEncapsulated !== props.value) {
                const index = this.getIndexByValue(props.value);
                this.selectSpecificItemByIndex(index);
                this.setState({
                    valueEncapsulated: props.value
                });
            }
        }
    }
    /**
     * Returns the index for a given value
     * @param {String} value where the index should be found of
     * @returns {Number} Index of value
     */
    getIndexByValue (value) {
        return findIndex(this.getChildren(), item => {
            return item.props.value === value;
        });
    }
    getValueByIndex (index) {
        return this.getChildren()[index] && this.getChildren()[index].props && this.getChildren()[index].props.value;
    }
    /**
     * Retuns the last index of the list which is not disabled
     * @returns {Number} Index of last item in list which is not disabled
     */
    getLastItemIndex () {
        return findLastIndex(this.getChildren(), (item) => {
            return !item.props.disabled;
        });
    }
    /**
     * Returns the react children or empty list when none are there
     * @returns {Array} the children
     */
    getChildren () {
        return this.props.children || [];
    }
    /**
     * Retuns the first index of the list which is not disabled
     * @returns {Number} Index of first item in list which is not  disabled
     */
    getFirstItemIndex () {
        return findIndex(this.getChildren(), item => {
            return !item.props.disabled;
        });
    }
    /**
     * checks if given index is last item in list which is not disabled
     * @param {Number} index which should be checked
     * @returns {Boolean} true if is last index which is not disabled
     */
    isLastItem (index) {
        return (index === this.getLastItemIndex());
    }
    /**
     * checks if given index is first item in list which is not disabled
     * @param {Number} index which should be checked
     * @returns {Boolean} true if is first index which is not disabled
     */
    isFirstItem (index) {
        return (index === this.getFirstItemIndex());
    }
    /**
     * checks if item of given index is deactivated
     * @param {Number} index which should be checked
     * @returns {Boolean} true if item is deactivated
     */
    isDeactivatedItem (index) {
        if (index >= 0) {
            return this.getChildren()[index] && this.getChildren()[index].props.disabled;
        }
        return false;
    }
    /**
     * Open select list
     * @returns {Boolean} state of closed state
     */
    openList () {
        this.setState({
            closed: false
        });
        return this.state.closed;
    }
    /**
     * Close select list and reset index
     * @returns {Boolean} state of closed state
     */
    closeList () {
        this.setState({
            closed: true
        });
        return this.state.closed;
    }
    /**
     * Toggle select list
     * @returns {Boolean} state of closed state
     */
    toggleList () {
        if (!this.props.disabled) {
            this.setState({
                closed: !this.state.closed
            });
        }
        return this.state.closed;
    }
    /**
     * Apply the value of the currently selected index
     * @param {Object} event event handed from the clicked element
     * @returns {Boolean} true if application of value worked
     */
    applyValue (event) {
        if (typeof this.state.selectedItemIndex === 'number') {
            this.setState({
                valueEncapsulated: (this.getChildren()[this.state.selectedItemIndex] && this.getChildren()[this.state.selectedItemIndex].props.value) || ' '
            });
            this.closeList();
            setTimeout(() => {
                this.props.onChange && this.props.onChange(event, this.state.valueEncapsulated);
            }, 0);
            return true;
        }
        return false;
    }
    /**
     * Selects the previous item
     * @returns {Number} newly selected index
     */
    selectPreviousItem () {
        // special case when the application starts
        // we want to select the first element before jumping to the end of the list
        let currentIndex = this.state.selectedItemIndex === null ? 1 : this.state.selectedItemIndex;
        const decrementendIndex = currentIndex === 0 ? this.getChildren().length - 1 : currentIndex - 1;
        let selectedItemIndex = findLastIndex(this.getChildren(), (item) => {
            return !item.props.disabled;
        }, decrementendIndex);
        this.setState({
            selectedItemIndex: selectedItemIndex
        });
        this.scrollToSelected();
        return selectedItemIndex;
    }
    /**
     * Selects the next item
     * @returns {Number} newly selected index
     */
    selectNextItem () {
        let currentIndex = this.state.selectedItemIndex;
        let selectedItemIndex = findIndex(this.getChildren(), item => {
            return !item.props.disabled;
        }, Math.abs((currentIndex + 1) % this.getChildren().length));
        this.setState({
            selectedItemIndex: selectedItemIndex
        });
        this.scrollToSelected();
        return selectedItemIndex;
    }
    /**
     * Scroll to selected item
     * Necessary becaus otherwise you could move outside of the visible area by using key up / down
     * @returns {undefined}
     */
    scrollToSelected () {
        // Prevent mouseOver event while triggering scroll (would be triggered automatically)
        this.setState({
            noMouse: true
        });
        // when scrolling fast by using arrow down / up
        // noMouse could get false because of the delay and trigger the mouseOver bug
        if (noMouseTimeout) {
            clearTimeout(noMouseTimeout);
        }
        setTimeout(() => {
            if (!this.state.closed) {
                const refList = this.refs.selectSimpleList;
                const listHeight = refList.offsetHeight;
                const refSelectedItem = ReactDom.findDOMNode(this.refs['dropdownItem' + this.state.selectedItemIndex]);
                const refSelectedItemOffsetTop = refSelectedItem.offsetTop;
                const refSelectedItemHeight = refSelectedItem.offsetHeight;
                const refSelectedItemOffsetTopBorder = refSelectedItemOffsetTop + refSelectedItemHeight;
                let scrollPosition = refList.scrollTop;

                // collission top
                if ((refSelectedItemOffsetTopBorder - scrollPosition) > listHeight) {
                    ReactDom.findDOMNode(refList).scrollTop = (this.state.selectedItemIndex * refSelectedItemHeight) - (150 - refSelectedItemHeight);
                }
                // collission bottom
                if ((refSelectedItemOffsetTopBorder - scrollPosition) < (0 + refSelectedItemHeight)) {
                    ReactDom.findDOMNode(refList).scrollTop = (this.state.selectedItemIndex * refSelectedItemHeight);
                }
            }
            noMouseTimeout = setTimeout(() => {
                this.setState({
                    noMouse: false
                });
            }, 100);
        }, 0);
    }
    /**
     * Select a specific index in the select list
     * @param   {Number}    index   - index to select
     * @returns {Number}    index of selected item if present otherwise -1
     */
    selectSpecificItemByIndex (index) {
        if (this.getChildren()[index] && !this.getChildren()[index].props.disabled) {
            this.setState({
                selectedItemIndex: index
            });
            return index;
        }
        return -1;
    }
    /**
     * Select a specific index in the select list with mouse
     * Check if mouse selection is allowed
     * @param   {Number}    index   - index to select
     * @returns {Number}    will be returned when selection is possible otherwise -1
     */
    mouseSelectIndex (index) {
        if (!this.state.noMouse) {
            this.selectSpecificItemByIndex(index);
            return index;
        }
        return -1;
    }
    /**
     * Search for index with first char of pressed char
     * @param   {String} code           - the pressed keyCode
     * @param   {Boolean} startFromZero - Start at index 0 with search for letter
     * @returns {String} pressedChar    - the pressed char
     */
    searchForFirstLetter (code, startFromZero = false) {
        const pressedChar = String.fromCharCode(code);
        if (!pressedChar) {
            return;
        }
        const startIndex = startFromZero ? 0 : (this.state.selectedItemIndex + 1);
        const validIndex = (index) => ((index !== -1) && typeof index === 'number');
        let index;

        if (!this.isLastItem(startIndex - 1)) {
            index = findIndex(this.getChildren(), child => {
                if (child.props.value && !child.props.disabled && child.props.children) {
                    return (pressedChar.toLowerCase() === (child.props.children.charAt(0).toLowerCase()));
                }
                return false;
            }, startIndex);
        }

        if (!startFromZero && !validIndex(index)) {
            this.searchForFirstLetter(code, true);
            return pressedChar;
        }

        if (validIndex(index)) {
            this.selectSpecificItemByIndex(index);
            this.scrollToSelected();
        }

        return pressedChar;
    }
    /**
     * Check pressed key on input and react accordingly
     * @param   {Object}    event           - The triggered event on keydown
     * @returns {Number}    pressed code    - The keyCode of the pressed key
     */
    keyOnDropdown (event) {
        const code = event.keyCode;
        // space, down-key, up-key to open the dropdown
        const open = {
            func: this.openList,
            codes: [32, 40, 38]
        };
        // escape key to close the dropdown without changes
        const closing = {
            func: this.closeList,
            codes: [27]
        };
        // enter key to apply changes to dropdown and close it
        const applying = {
            func: this.applyValue,
            codes: [13]
        };
        // press down key to get next item
        const goItemDown = {
            func: this.selectNextItem,
            codes: [40]
        };
        // press up key to get to previous item
        const goItemUp = {
            func: this.selectPreviousItem,
            codes: [38]
        };

        const items = [open, closing, applying, goItemDown, goItemUp];
        let foundFunction = false;

        items.forEach((item) => {
            if (item.codes.includes(code)) {
                event.preventDefault();
                item.func();
                foundFunction = true;
                return code;
            }
        });

        // if the code didn't match to any functionality - use it to search for an item
        if (!foundFunction) {
            this.searchForFirstLetter(code);
        }

        return code;
    }
    /**
     * Show name of current value
     * by finding current value in items array and getting the name
     * @returns {String} Value visually shown in select as current value
     */
    createShownValue () {
        const childWithValue = this.getChildren().filter((child) => {
            return (child.props.value === this.state.valueEncapsulated);
        });
        if (!childWithValue || !childWithValue.length) {
            return '';
        }
        return childWithValue[0].props.children;
    }
    render () {
        const wrapperClasses = classNames(styles.selectSimple, {
            [styles.selectSimpleOpen]: !this.state.closed,
            [styles.disabled]: this.props.disabled
        }, this.props.className);
        return (
            <div
                className={wrapperClasses}
                data-name={this.props.name}
            >
                <div className={styles.overlay} />
                <input
                    type='text'
                    readOnly
                    disabled={this.props.disabled}
                    className={[styles.selectSimpleInput]}
                    onClick={this.toggleList}
                    name={this.props.name}
                    onKeyDown={this.keyOnDropdown}
                    onBlur={this.closeList}
                    value={this.createShownValue()}
                />
                <ul className={styles.selectSimpleList} ref={'selectSimpleList'}>
                    {this.getChildren().map((listItem, listItemIndex) => {
                        const selected = (listItemIndex === this.state.selectedItemIndex);
                        const active = (listItem.props.value === this.state.valueEncapsulated);
                        return (
                            <SelectItem
                                ref={('dropdownItem' + listItemIndex)}
                                key={'dropdown-item-' + listItemIndex}
                                {...this.props}
                                {...listItem.props}
                                onMouseDown={this.applyValue}
                                selected={selected}
                                active={active}
                                indexInList={listItemIndex}
                                onMouseEnter={this.mouseSelectIndex}
                            >
                                {listItem.props.children}
                            </SelectItem>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

/**
 * @memberof Select
 * @namespace props
 * @prop {Object} propTypes         - the props that are passed to this component
 */
Select.propTypes = {
    /**
     * @memberof Select.props
     * @prop {String} name          - the name of the select (used as HTML name attribute on the input)
     */
    name: React.PropTypes.string,
    /**
     * @memberof Select.props
     *
     * @prop {String} value - the value set when one wants to override the internal value initially
     */
    defaultValue: React.PropTypes.string,
    /**
     * @memberof Select.props
     *
     * @prop {String} value - the value set when one wants to override the internal value whenever it differs
     */
    value: React.PropTypes.string,
    /**
     * @memberof Select.props
     * @prop {func} onChange        - Callback called on change of the currently selected value
     */
    onChange: React.PropTypes.func,
    /**
     * @memberof Select.props
     * @prop {String} className     - used className for the select wrap
     */
    className: React.PropTypes.string
};

export default Select;
export { Select };
