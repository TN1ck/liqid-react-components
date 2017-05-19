import React from 'react';
import classNames from 'classnames';

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
     * @prop {string} tagName     - return this tag instead of a div
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
    const classes = classNames('fb-col', props.className, {
        'reverse': props.reverse,
        'fb-flex': props.displayAsFlex
    });
    const Tag = props.tagName || 'div';
    const colBaseClass = Object.keys(props).filter((key) => {
        return classMap[key];
    }).map((key) => {
        return typeof key !== 'boolean' ? classMap[key] + '-' + key : classMap[key];
    }).join(' ').toString();

    console.log(classes);
    console.log(colBaseClass);

    return (
        <Tag
            className={classes}
            onClick={props.onClick}
        >
            {props.children}
        </Tag>
    );
}

const ModificatorType = React.PropTypes.oneOfType([React.PropTypes.number, React.PropTypes.bool, React.PropTypes.string]);
Col.propTypes = {
    /**
     * @memberof Col.props
     * @prop {ModificatorType} xs, sm, md, lg                   - which width should the column have?
     */
    xs: ModificatorType,
    sm: ModificatorType,
    md: ModificatorType,
    lg: ModificatorType,
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

module.exports = {
    Grid,
    Col
};
