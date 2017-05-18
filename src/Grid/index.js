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
     * @prop {Boolean} fluid        - should the flexbox container be fluid?
     */
    fluid: React.PropTypes.bool,
    /**
     * @memberof Grid.props
     * @prop {String} children      - custom className
     */
    className: React.PropTypes.string,
    /**
     * @memberof Grid.props
     * @prop {String} className     - return this tag instead of a div
     */
    tagName: React.PropTypes.string,
    /**
     * @memberof Grid.props
     * @prop {String} className     - custom className
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
    });
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

module.exports = {
    Grid,
    Col
};
