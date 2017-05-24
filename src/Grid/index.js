import React from 'react';
import classNames from 'classnames';

import styles from './styles.scss';

/**
 * Grid wrapper component
 * @param {Object} props The props for the component
 * @returns {React.Component} Component to be returned
 */
function Grid (props) {
    const containerClass = props.fluid ? 'fb-container-fluid' : 'fb-container';
    const classes = classNames(props.className, containerClass);
    const Tag = props.tagName || 'div';

    return (
        <Tag className={classes}>
            {props.children}
        </Tag>
    );
}

Grid.propTypes = {
    /**
     * @memberof Grid.props
     * @prop {boolean} fluid        - should the flexbox container be fluid?
     */
    fluid: React.PropTypes.bool,
    /**
     * @memberof Grid.props
     * @prop {string} children      - custom className
     */
    className: React.PropTypes.string,
    /**
     * @memberof Grid.props
     * @prop {string} tagName       - return this tag instead of a div
     */
    tagName: React.PropTypes.string,
    /**
     * @memberof Grid.props
     * @prop {string} className     - custom className
     */
    children: React.PropTypes.oneOfType([
        React.PropTypes.any
    ])
};


const classMap = {
    xs: 'fb-col-xs',
    sm: 'fb-col-sm',
    md: 'fb-col-md',
    lg: 'fb-col-lg',
    xsOffset: 'fb-col-xs-offset',
    smOffset: 'fb-col-sm-offset',
    mdOffset: 'fb-col-md-offset',
    lgOffset: 'fb-col-lg-offset'
};
/**
 * Column component
 * @param {Object} props - The props for the component
 * @returns {React.Component} - Component to be returned
 */
function Col (props) {
    const colBaseClasses = Object.keys(props).filter((key) => { // filter props that match any item in classMap
        return classMap[key];
    }).map((key) => { // create valid classnames
        const colBase = !(typeof props[key] === 'boolean') ? (classMap[key] + '-' + props[key]) : classMap[key];
        return colBase;
    }).join(' ').toString();

    const classes = classNames('fb-col', props.className, colBaseClasses, {
        'reverse': props.reverse,
        'fb-flex': props.displayAsFlex
    });

    const Tag = props.tagName || 'div';
    return (
        <Tag
            className={classes}
            onClick={props.onClick}
        >
            {props.children}
        </Tag>
    );
}

const ColModificatorType = React.PropTypes.oneOfType([React.PropTypes.number, React.PropTypes.bool, React.PropTypes.string]);
Col.propTypes = {
    /**
     * @memberof Col.props
     * @prop {ColModificatorType} xs, sm, md, lg                - which width should the column have?
     */
    xs: ColModificatorType,
    sm: ColModificatorType,
    md: ColModificatorType,
    lg: ColModificatorType,
    /**
     * @memberof Col.props
     * @prop {number} xsOffset, smOffset, mdOffset, lgOffset    - add an offset to the column
     */
    xsOffset: React.PropTypes.number,
    smOffset: React.PropTypes.number,
    mdOffset: React.PropTypes.number,
    lgOffset: React.PropTypes.number,
    /**
     * @memberof Col.props
     * @prop {boolean} reverse                                  - display elements reversed
     */
    reverse: React.PropTypes.bool,
    /**
     * @memberof Col.props
     * @prop {string} className                                 - classes that should be added to the column
     */
    className: React.PropTypes.string,
    /**
     * @memberof Col.props
     * @prop {string} tagName                                   - tag that should be used instead of a div
     */
    tagName: React.PropTypes.string,
    /**
     * @memberof Col.props
     * @prop {Object} children                                  - content which should be wrapped by the column
     */
    children: React.PropTypes.node,
    /**
     * @memberof Col.props
     * @prop {boolean} displayAsFlex                            - should the column be displayed as flex item?
     */
    displayAsFlex: React.PropTypes.bool
};


/**
 * Converts string from hyphen to cameCase
 * @param {string} string - String that should be converted
 * @returns {string} - Converted string
 */
function toCamelCase (string) {
    const regex = /-([a-z])/g; // search for hyphen which is followed by a lowercase letter
    return (
        string.replace(
            regex,
            (letter) => {
                return letter[1].toUpperCase(); // strip hyphen and return letter as uppercase
            }
        )
    );
}

// Props that can be passed to modify behaviour
const modificatorKeys = [
    'start', 'center', 'end', 'top', 'middle',
    'blockcenter',
    'bottom', 'around', 'between', 'first', 'last',
    'stretch', 'no-reverse-col', 'reverse-col', 'reverse-row', 'no-reverse-row'
];
/**
 * Row component
 * @param {Object} props - The props for the component
 * @returns {React.Component} - Component to be returned
 */
function Row (props) {
    const modificators = modificatorKeys.filter((modificatorKey) => { // filter modificatorKeys that match recieved prop
        const key = toCamelCase(modificatorKey);
        return props[key];
    }).map((modificatorKey, index, key) =>{ // create valid classnames
        const value = props[key];
        return `fb-${modificatorKey}-${value}`;
    });

    const classes = classNames('fb-row', props.className, modificators, {
        // Col
        [`fb-col-${props.column}`]: props.column,
        // Row
        [`fb-row-${props.row}`]: props.row,
        'fb-row--no-gutter': props.noGutter,
        'fb-row--gutter-top-bottom': props.gutterTopBottom
    });

    const Tag = props.tagName || 'div';
    return (
        <Tag
            className={classes}
            onClick={props.onClick}
        >
            {props.children}
        </Tag>
    );
}

const sizes = ['xs', 'sm', 'md', 'lg'];
const RowModificatorType = React.PropTypes.oneOf(sizes);
Row.propTypes = {
    /**
     * @memberof Row.props
     * @prop {boolean} reverse                      - display elements reversed
     */
    reverse: React.PropTypes.bool,
    /**
     * @memberof Row.props
     * @prop {RowModificatorType} xs, sm, md, lg    - which width should the row have?
     */
    start: RowModificatorType,
    /** Center boxes and text **/
    center: RowModificatorType,
    end: RowModificatorType,
    /** Does only center boxes and not the text-content itself **/
    blockcenter: RowModificatorType,
    top: RowModificatorType,
    middle: RowModificatorType,
    bottom: RowModificatorType,
    around: RowModificatorType,
    stretch: RowModificatorType,
    between: RowModificatorType,
    first: RowModificatorType,
    last: RowModificatorType,
    /**
     * @memberof Row.props
     * @prop {string} className                     - classes that should be added to the row
     */
    className: React.PropTypes.string,
    /**
     * @memberof Row.props
     * @prop {string} tagName                       - tag that should be used instead of a div
     */
    tagName: React.PropTypes.string,
    /**
     * @memberof Row.props
     * @prop {Object} children                      - content which should be wrapped by the row
     */
    children: React.PropTypes.node
};

module.exports = {
    Grid,
    Col,
    Row
};
