/**
 * Standard UI elements container and card in material design style.
 * A Container is the wrapper element for Cards with a gray background.
 * Cards have a white background with a slight shadow effect.
 */
import React from 'react';
import classNames from 'classnames';
import CSSModules from 'react-css-modules';
import styles from './styles.css';
import { Col, Row, Grid, Modal } from 'react-bootstrap';
import BLACK_CIRCLE from '/Users/florianzia/Documents/liqid/liqid-react-components/constants/unicode.js';
import Loader from '../Loader';
import createSimpleReactWrapper from '/Users/florianzia/Documents/liqid/liqid-react-components/utils/createSimpleReactWrapper.js';
const Typography  = require('/Users/florianzia/Documents/liqid/liqid-react-components/src/Typography/typography/index.js');

/**
 * Create a container
 * @param {Object} props            - Props which are passed to the function
 * @return {Object} Container      - Wrapper for Card
 */
function Container (props) {
    return (
        <div styleName={classNames(
            'liq_container'
        )}
            {...props}
        >
            {props.children}
        </div>
    );
}

/**
 * Creates a card which classes for styling are defined through the passed props
 * @param {Object} props            - Props which are passed to the function
 * @returns {Object} Card           - section with recieved children
 */
function Card (props) {
    const cardClasses = classNames({
        'liq_card': true,
        'liq_card--low-height': props.fixedHeightLow,
        'liq_card--regular-height': props.fixedHeight,
        'liq_card--expanded--height': props.fixedHeightLarge,
        'liq_card--ghost': props.transparent,
        'liq_card--large-padding': props.largePadding,
        'liq_card--sticky-footer': props.stickyFooter,
        'liq_card--padding-simple': props.paddingSimple,
        'liq_card--padding-small': props.paddingSmall,
        'liq_card--padding-none': props.noPadding,
        'liq_card--border-light': props.borderLight
    }, props.styleName);

    let innerContent = props.children;

    if (typeof props.loading !== 'undefined') {
        innerContent = (
            <Loader noBackground loading={props.loading}>
                {props.children}
            </Loader>
        );
    }

    return (
        <section {...props} styleName={cardClasses}>
            {innerContent}
        </section>
    );
}

/**
 * @memberof Card
 * @namespace props
 * @prop {Object} propTypes         - the props that are passed to this component
 */
Card.propTypes = {
    /**
     * @memberof Card.props
     * @prop {Boolean} fixedHeight           - Set if card should have a fixed height (e.g. for questionnaires)
     */
    fixedHeight: React.PropTypes.bool,
    /**
     * @memberof Card.props
     * @prop {Boolean} fixedHeightLow        - Set if card should have a low fixed height
     */
    fixedHeightLow: React.PropTypes.bool,
    /**
     * @memberof Card.props
     * @prop {Boolean} fixedHeightLarge      - Set if card should have a fixed height with larger buttons (e.g. start of risk assessment)
     */
    fixedHeightLarge: React.PropTypes.bool,
    /**
     * @memberof Card.props
     * @prop {Boolean} transparent           - Set if card should have transparent background
     */
    transparent: React.PropTypes.bool,
    /**
     * @memberof Card.props
     * @prop {Boolean} loading              - Set if a loader should be shown in the card
     */
    loading: React.PropTypes.bool,
    /**
     * @memberof Card.props
     * @prop {Boolean} paddingSimple        - Set if there should be a padding in the card
     */
    paddingSimple: React.PropTypes.bool,
    /**
     * @memberof Card.props
     * @prop {Boolean} paddingSmall        - Set if there should be a small padding in the card
     */
    paddingSmall: React.PropTypes.bool,
    /**
     * @memberof Card.props
     * @prop {Boolean} noPadding           - Set if there should be no padding in the card
     */
    noPadding: React.PropTypes.bool,
    /**
     * @memberof Card.props
     * @prop {Boolean} borderLight         - Set if there should be a visible border around the card
     */
    borderLight: React.PropTypes.bool
};

/**
 * Returns big standalone loading indicator or empty span-tag.
 * @param {Boolean} props       - The employee who is responsible for the project.
 * @return {Object} Loader      - The loading indicator.
 */
function CardHeaderDots (props) {
    const questionCounter = props.questionCounter;
    const questionLength = props.questionLength;

    return (
        <div styleName='liq_step-indicator'>
            <small id={`liq_question_${questionCounter}`}>
                {[...Array(questionCounter)].map((c, i) => {
                    return (
                        <span key={i} styleName='liq_step-indicator__unfilled'>
                            {BLACK_CIRCLE}
                        </span>
                    );
                })}
                <span styleName='liq_step-indicator__filled'>
                    {BLACK_CIRCLE}
                </span>
                {[...Array(questionLength - questionCounter)].map((c, i) => {
                    return (
                        <span key={i} styleName='liq_step-indicator__unfilled'>
                            {BLACK_CIRCLE}
                        </span>
                    );
                })}
            </small>
        </div>
    );
}

/**
 * Returns big standalone loading indicator or empty span-tag.
 * @param {Boolean} props       - The employee who is responsible for the project.
 * @return {Object} Loader      - The loading indicator.
 */
function CardHeader (props) {
    let counter;
    if (props.hasCounter) {
        counter = (
            <CardHeaderDots
                questionCounter={props.questionCounter}
                questionLength={props.questionLength}
            />
        );
    }
    const cardHeaderClasses = classNames({
        'liq_card__header': true,
        'liq_card__header--low-margin': props.lowMargin,
        'liq_card__header--has-bottom-border': props.hasBottomBorder
    });

    let headlineType = props.hasThinFont ? 'regular' : 'large';

    let title = (
        <Typography.Headline
            className
            type={headlineType}
            tag='h1'
        >
            {props.children}
        </Typography.Headline>
    );
    if (props.blank) {
        title = (
            <div>
                {props.children}
            </div>
        );
    }

    return (
        <header styleName={cardHeaderClasses}>
            {title}
            {counter}
        </header>
    );
}

CardHeader.propTypes = {
    hasBottomBorder: React.PropTypes.bool,
    // show counter
    hasCounter: React.PropTypes.bool,
    // the number of the current question
    questionLength: React.PropTypes.number,
    // how many questions are there in total
    questionCounter: React.PropTypes.number,
    // Font is very thin (weight 200)
    hasThinFont: React.PropTypes.bool,
    // sub-title
    subTitle: React.PropTypes.oneOfType([
        React.PropTypes.string,
        React.PropTypes.object
    ]),
    blank: React.PropTypes.bool
};

/**
 * Returns big standalone loading indicator or empty span-tag.
 * @param {Boolean} props       - The employee who is responsible for the project.
 * @return {Object} Loader      - The loading indicator.
 */
function CardFooter (props) {
    const cardFooterClasses = classNames('liq_card__footer', {
        'liq_card__footer--no-top-margin': props.noTopMargin,
        'liq_card__footer--min-height': props.minHeight,
        'liq_card__footer--large-top-margin': props.largeTopMargin
    }, props.styleName);
    return (
        <footer styleName={cardFooterClasses}>
            {props.children}
        </footer>
    );
}

CardFooter.propTypes = {
    noTopMargin: React.PropTypes.bool,
    largeTopMargin: React.PropTypes.bool
};

/**
 * Returns big standalone loading indicator or empty span-tag.
 * @param {Boolean} props       - The employee who is responsible for the project.
 * @return {Object} Loader      - The loading indicator.
 */
function CardSidebar (props) {
    const cardSidebarClasses = classNames('liq_card__sidebar', {
        'liq_card__sidebar--navigation-container': props.isResponsiveNavigation
    }, props.styleName);
    return (
        <nav styleName={cardSidebarClasses}>
            {props.children}
        </nav>
    );
}

CardSidebar.propTypes = {
    isResponsiveNavigation: React.PropTypes.bool
};

/**
 * Returns big standalone loading indicator or empty span-tag.
 * @param {Boolean} props       - The employee who is responsible for the project.
 * @return {Object} Loader      - The loading indicator.
 */
function CardContent (props) {
    const cardContentClasses = classNames('liq_content-area', {
        'liq_card__content': true,
        'liq_card__content--low-margin': props.lowMargin,
        'liq_card__content--enhanced-margin': props.enhancedMargin,
        'liq_card__content--relative': props.relative

    }, props.styleName);
    return (
        <div styleName={cardContentClasses}>
            {props.children}
        </div>
    );
}

CardContent.propTypes = {
    lowMargin: React.PropTypes.bool,
    enhancedMargin: React.PropTypes.bool,
    relative: React.PropTypes.bool
};

const CardContentLeft = createSimpleReactWrapper('div', 'liq_content-area__left');
const CardContentRight = createSimpleReactWrapper('div', 'liq_content-area__right');

/**
 * Returns big standalone loading indicator or empty span-tag.
 * @param {Boolean} props       - The employee who is responsible for the project.
 * @return {Object} Loader      - The loading indicator.
 */
function CardTextBlock (props) {
    const cardTextBlockClasses = classNames({
        'liq_text-block': true
    }, props.styleName);
    return (
        <Row styleName={cardTextBlockClasses}>
            <Col xs={12} sm={10} smOffset={1}>
                <Typography.Textblock
                    type='large'
                    tag='p'
                >
                    {props.children}
                </Typography.Textblock>
            </Col>
        </Row>
    );
}

CardTextBlock.propTypes = {
    largerText: React.PropTypes.bool,
    bottomMargin: React.PropTypes.bool
};

/**
 * Returns big standalone loading indicator or empty span-tag.
 * @param {Boolean} props       - The employee who is responsible for the project.
 * @return {Object} Loader      - The loading indicator.
 */
function WrappedCard (props) {
    let content = (
        <Grid>
            <Container>
                <Card {...props}>
                    {props.children}
                </Card>
            </Container>
        </Grid>
    );
    if (props.small) {
        content = (
            <Grid>
                <Container>
                    <Col
                        styleName='liq_container liq_container--small'
                        xs={12}
                        sm={6}
                        smOffset={3}
                        md={4}
                        mdOffset={4}
                    >
                        <Card {...props}>
                            {props.children}
                        </Card>
                    </Col>
                </Container>
            </Grid>
        );
    }
    return content;
}

WrappedCard.propTypes = {
    small: React.PropTypes.bool
};

/**
 * Returns big standalone loading indicator or empty span-tag.
 * @param {Boolean} props       - The employee who is responsible for the project.
 * @return {Object} Loader      - The loading indicator.
 */
function ModalCard (props) {
    const modalCardClasses = classNames('liq_card-modal', props.styleName);
    return (
        <Modal {...props} styleName={modalCardClasses}>
            <div styleName='liq_card-modal__close-button' onClick={props.onHide}>
                {'×'}
            </div>
            {props.children}
        </Modal>
    );
}

const _Container = CSSModules(Container, styles, {allowMultiple: true});
const _Card = CSSModules(Card, styles, {allowMultiple: true});
const _CardHeader = CSSModules(CardHeader, styles, {allowMultiple: true});
const _CardContent = CSSModules(CardContent, styles, {allowMultiple: true});
const _CardTextBlock = CSSModules(CardTextBlock, styles, {allowMultiple: true});
const _CardFooter = CSSModules(CardFooter, styles, {allowMultiple: true});
const _CardSidebar = CSSModules(CardSidebar, styles, {allowMultiple: true});
const _CardContentLeft = CSSModules(CardContentLeft, styles, {allowMultiple: true});
const _CardContentRight = CSSModules(CardContentRight, styles, {allowMultiple: true});
const _WrappedCard = CSSModules(WrappedCard, styles, {allowMultiple: true});
const _ModalCard = CSSModules(ModalCard, styles, {allowMultiple: true});

export default {
    Container,
    Card,
    CardHeader,
    CardContent,
    CardTextBlock,
    CardFooter,
    CardSidebar,
    CardContentLeft,
    CardContentRight,
    WrappedCard,
    ModalCard
};

export {
    _Container as Container,
    _Card as Card,
    _CardHeader as CardHeader,
    _CardContent as CardContent,
    _CardTextBlock as CardTextBlock,
    _CardFooter as CardFooter,
    _CardSidebar as CardSidebar,
    _CardContentLeft as CardContentLeft,
    _CardContentRight as CardContentRight,
    _WrappedCard as WrappedCard,
    _ModalCard as ModalCard
};