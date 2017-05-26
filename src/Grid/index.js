import React from 'react';
import classNames from 'classnames';

import styles from './styles.scss';

/**
 * Grid wrapper component
 * @param {Object} props      - The props for the component
 * @returns {React.Component} - Component to be returned
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
    // Define from which breakpoints on the elements should flex
    xs: 'fb-col-xs',
    sm: 'fb-col-sm',
    md: 'fb-col-md',
    lg: 'fb-col-lg',
    // Define from which breakpoints on the given offset should be applied
    xsOffset: 'fb-col-xs-offset',
    smOffset: 'fb-col-sm-offset',
    mdOffset: 'fb-col-md-offset',
    lgOffset: 'fb-col-lg-offset'
};
/**
 * Column component
 * @param {Object} props      - The props for the component
 * @returns {React.Component} - Component to be returned
 */
function Col (props) {
    const colBaseClasses = Object.keys(props).filter((key) => { // filter props that match any item in classMap
        return classMap[key];
    }).map((key) => { // take care of valid classnames
        const colBase = !(typeof props[key] === 'boolean') ? (classMap[key] + '-' + props[key]) : classMap[key];
        return colBase;
    }).join(' ').toString();

    const hasBreakpoint = props.xs || props.sm || props.md || props.lg;
    const classes = classNames('fb-col', props.className, colBaseClasses, {
        'fb-flex': !props.noFlex,
        'reverse': props.reverse,
        [classMap.xs]: !hasBreakpoint
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
     * @prop {ColModificatorType} xs        - display as column from xs-breakpoint on
     */
    xs: ColModificatorType,
    /**
     * @memberof Col.props
     * @prop {ColModificatorType} sm        - display as column from sm-breakpoint on
     */
    sm: ColModificatorType,
    /**
     * @memberof Col.props
     * @prop {ColModificatorType} md        - display as column from md-breakpoint on
     */
    md: ColModificatorType,
    /**
     * @memberof Col.props
     * @prop {ColModificatorType} lg        - display as column from lg-breakpoint on
     */
    lg: ColModificatorType,
    /**
     * @memberof Col.props
     * @prop {number} xsOffset              - add an xs offset to the column
     */
    xsOffset: React.PropTypes.number,
    /**
     * @memberof Col.props
     * @prop {number} smOffset              - add an sm offset to the column
     */
    smOffset: React.PropTypes.number,
    /**
     * @memberof Col.props
     * @prop {number} mdOffset              - add an md offset to the column
     */
    mdOffset: React.PropTypes.number,
    /**
     * @memberof Col.props
     * @prop {number} lgOffset              - add an lg offset to the column
     */
    lgOffset: React.PropTypes.number,
    /**
     * @memberof Col.props
     * @prop {boolean} reverse              - display elements reversed
     */
    reverse: React.PropTypes.bool,
    /**
     * @memberof Col.props
     * @prop {string} className             - classes that should be added to the column
     */
    className: React.PropTypes.string,
    /**
     * @memberof Col.props
     * @prop {string} tagName               - tag that should be used instead of a div
     */
    tagName: React.PropTypes.string,
    /**
     * @memberof Col.props
     * @prop {Object} children              - content which should be wrapped by the column
     */
    children: React.PropTypes.node,
    /**
     * @memberof Col.props
     * @prop {boolean} noFlex               - should the column not be displayed as flex item?
     */
    noFlex: React.PropTypes.bool
};


/**
 * Converts string from hyphen to cameCase
 * @param {string} string - String that should be converted
 * @returns {string}      - Converted string
 */
function toCamelCase (string) { // TODO: In utility
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

// Valid props that can be used to modify behaviour
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
    const modificators = modificatorKeys.filter((modificatorKey) => { // filter modificatorKeys that are matching props
        const key = toCamelCase(modificatorKey);
        return props[key];
    }).map((modificatorKey) =>{ // create valid classnames
        const value = props[toCamelCase(modificatorKey)];
        return `fb-${modificatorKey}-${value}`;
    });

    const classes = classNames(props.className, modificators, {
        // Col
        [`fb-col-${props.column}`]: props.column,
        // Row
        'fb-row': !props.noFlex,
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
     * @prop {RowModificatorType} xs, sm, md, lg    - place left for given viewport
     */
    start: RowModificatorType,
    /**
     * @memberof Row.props
     * @prop {RowModificatorType} xs, sm, md, lg    - center boxes and text for given viewport
     */
    center: RowModificatorType,
    /**
     * @memberof Row.props
     * @prop {RowModificatorType} xs, sm, md, lg    - place right for given viewport
     */
    end: RowModificatorType,
    /**
     * @memberof Row.props
     * @prop {RowModificatorType} xs, sm, md, lg    - center boxes and not the text-content itself
     */
    blockcenter: RowModificatorType,
    /**
     * @memberof Row.props
     * @prop {RowModificatorType} xs, sm, md, lg    - vertical align top
     */
    top: RowModificatorType,
    /**
     * @memberof Row.props
     * @prop {RowModificatorType} xs, sm, md, lg    - vertical align middle
     */
    middle: RowModificatorType,
    /**
     * @memberof Row.props
     * @prop {RowModificatorType} xs, sm, md, lg    - vertical align bottom
     */
    bottom: RowModificatorType,
    /**
     * @memberof Row.props
     * @prop {RowModificatorType} xs, sm, md, lg    - distribute unused space around items evenly
     */
    around: RowModificatorType,
    /**
     * @memberof Row.props
     * @prop {RowModificatorType} xs, sm, md, lg    - stretch items to fill space
     */
    stretch: RowModificatorType,
    /**
     * @memberof Row.props
     * @prop {RowModificatorType} xs, sm, md, lg    - distribute unused space between items
     */
    between: RowModificatorType,
    /**
     * @memberof Row.props
     * @prop {RowModificatorType} xs, sm, md, lg    - make element first first in the order
     */
    first: RowModificatorType,
    /**
     * @memberof Row.props
     * @prop {RowModificatorType} xs, sm, md, lg    - make element last first in the order
     */
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
    children: React.PropTypes.node,
    /**
     * @memberof Col.props
     * @prop {boolean} noFlex                       - should the row not be displayed as flex item?
     */
    noFlex: React.PropTypes.bool
};

module.exports = {
    Grid,
    Col,
    Row
};
