import React from 'react';
import classNames from 'classnames';
import CSSModules from 'react-css-modules';
import styles from '../styles.css';
const Typography  = require('../../Typography/typography/index.js');

/**
 * Creates an InlineCard
 * @param {Object} props            - Props which are passed to the function
 * @return {Object} Object          - InlineCard container
 */
function InlineCard (props) {
    const classes = classNames('liq_inline-card', {
        'liq_inline-card--warning': props.warning,
        'liq_inline-card--half-card': props.halfCard,
        'liq_inline-card--no-bottom-padding': props.noBottomPadding
    }, props.styleName);

    return (
        <div styleName={classes}>
            {props.children}
        </div>
    );
}

InlineCard.propTypes = {
    /**
     * @memberof InlineCard.props
     * @prop {string} styleName             - Custom classnames that are added.
     */
    styleName: React.PropTypes.string,
    /**
     * @memberof InlineCard.props
     * @prop {Boolean} warning              - Should the card be used as warning?
     */
    warning: React.PropTypes.bool,
    /**
     * @memberof InlineCard.props
     * @prop {Boolean} halfCard             - Should the card be a half card?
     */
    halfCard: React.PropTypes.bool,
    /**
     * @memberof InlineCard.props
     * @prop {Boolean} noBottomPadding      - Should the header be inside the top border?
     */
    noBottomPadding: React.PropTypes.bool
};

/**
 * Creates a header for InlineCard
 * @param {Object} props            - Props which are passed to the function
 * @return {Object} Object          - Header for inline Card
 */
function InlineCardHeader (props) {
    let basicClass = 'liq_inline-card__header';

    if (props.inHeader) {
        basicClass = 'liq_inline-card__header-inside-top-border';
    }
    let headlineType = props.inHeader ? 'uppercase-smallest-grey' : 'uppercase-small';

    if (props.simpleStyle) {
        headlineType = 'regular-bold';
    }

    return (
        <Typography.Headline styleName={classNames(basicClass, props.styleName)} type={headlineType} tag='h3'>
            {props.children}
        </Typography.Headline>
    );
}

InlineCardHeader.propTypes = {
    /**
     * @memberof Card.props
     * @prop {Boolean} inHeader           - Should the header be inside the top border?
     */
    inHeader: React.PropTypes.bool,
    /**
     * @memberof Card.props
     * @prop {Boolean} simpleStyle        - Headline text in regular-bold?
     */
    simpleStyle: React.PropTypes.bool
};

/**
 * Creates a subheader for InlineCard
 * @param {Object} props            - Props which are passed to the function
 * @return {Object} Object          - Subheader for inline Card
 */
function InlineCardSubHeader (props) {
    let classes = 'liq_inline-card__sub-header';

    return (
        <Typography.Headline styleName={classes} type='uppercase-small-grey' tag='h4'>
            {props.children}
        </Typography.Headline>
    );
}

/**
 * Creates the body for InlineCard
 * @param {Object} props            - Props which are passed to the function
 * @return {Object} Object          - Body for InlineCard
 */
function InlineCardBody (props) {
    const classes = classNames('liq_inline-card__body', {
        'liq_inline-card__body--padding-vertical-regular': props.verticalPaddingRegular
    });
    return (
        <div styleName={classes}>
            {props.children}
        </div>
    );
}

InlineCardBody.propTypes = {
    /**
     * @memberof Card.props
     * @prop {Boolean} verticalPaddingRegular        - Add vertical padding to the body.
     */
    verticalPaddingRegular: React.PropTypes.bool
};

/**
 * Creates a footer for InlineCard
 * @param {Object} props            - Props which are passed to the function
 * @return {Object} Object          - Footer for InlineCard
 */
function InlineCardFooter (props) {
    const classes = classNames('liq_inline-card__footer', {
        'liq_inline-card__footer--has-border': props.hasBorder
    });
    return (
        <div styleName={classes}>
            {props.children}
        </div>
    );
}

InlineCardFooter.propTypes = {
    /**
     * @memberof Card.props
     * @prop {Boolean} hasBorder        - Should the footer have a border?
     */
    hasBorder: React.PropTypes.bool
};

const _InlineCard = CSSModules(InlineCard, styles, {allowMultiple: true});
const _InlineCardHeader = CSSModules(InlineCardHeader, styles, {allowMultiple: true});
const _InlineCardSubHeader = CSSModules(InlineCardSubHeader, styles, {allowMultiple: true});
const _InlineCardBody = CSSModules(InlineCardBody, styles, {allowMultiple: true});
const _InlineCardFooter = CSSModules(InlineCardFooter, styles, {allowMultiple: true});

export default {
    InlineCard: _InlineCardHeader,
    InlineCardHeader: _InlineCardSubHeader,
    InlineCardSubHeader: _InlineCard,
    InlineCardBody: _InlineCardBody,
    InlineCardFooter: _InlineCardFooter
};

export {
    _InlineCard as InlineCard,
    _InlineCardHeader as InlineCardHeader,
    _InlineCardSubHeader as InlineCardSubHeader,
    _InlineCardBody as InlineCardBody,
    _InlineCardFooter as InlineCardFooter
};
