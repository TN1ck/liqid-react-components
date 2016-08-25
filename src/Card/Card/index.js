/**
 * Standard UI elements container and card in material design style.
 * A Container is the wrapper element for Cards with a gray background.
 * Cards have a white background with a slight shadow effect.
 */
import React from 'react';
import classNames from 'classnames';
import CSSModules from 'react-css-modules';
import styles from '../styles.css';
import { Col, Row, Grid, Modal } from 'react-bootstrap';
import BLACK_CIRCLE from '/Users/florianzia/Documents/liqid/liqid-react-components/constants/unicode.js';
import Loader from '../../Loader';
import createSimpleReactWrapper from '/Users/florianzia/Documents/liqid/liqid-react-components/utils/createSimpleReactWrapper.js';
const Typography  = require('/Users/florianzia/Documents/liqid/liqid-react-components/src/Typography/typography/index.js');

/**
 * Creates a container for WrappedCard
 * @param {Object} props            - Props which are passed to the function
 * @return {Object} Container       - Wrapper for Card
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
 * @param {Object} props           - Props which are passed to the function
 * @return {Object} Card           - Section with recieved children
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
        <section styleName={cardClasses}>
            {innerContent}
        </section>
    );
}

/**
 * @memberof Card
 * @namespace props
 * @prop {Object} propTypes         - Props that are passed to this component
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
 * Creates a header for Card with dots
 * @param {Object} props            - Props which are passed to the function
 * @return {Object} Object          - Header with dots for Card
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
 * Creates a header for Card
 * @param {Object} props            - Props which are passed to the function
 * @return {Object} Object          - Header for Card
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
    /**
     * @memberof Card.props
     * @prop {Boolean} hasBottomBorder          - Show a border under the card header.
     */
    hasBottomBorder: React.PropTypes.bool,
    /**
     * @memberof Card.props
     * @prop {Boolean} hasCounter               - Show the counter in the card header.
     */
    hasCounter: React.PropTypes.bool,
    /**
     * @memberof Card.props
     * @prop {number} questionLength            - The number of the current question.
     */
    questionLength: React.PropTypes.number,
    /**
     * @memberof Card.props
     * @prop {number} questionCounter           - How many questions are there in total?
     */
    questionCounter: React.PropTypes.number,
    /**
     * @memberof Card.props
     * @prop {Boolean} hasThinFont              - Should the font be displayed very light (font-weight: 200)
     */
    hasThinFont: React.PropTypes.bool,
    /**
     * @memberof Card.props
     * @prop {Object} subTitle                  - Defines the subtitle.
     */
    subTitle: React.PropTypes.oneOfType([
        React.PropTypes.string,
        React.PropTypes.object
    ]),
    /**
     * @memberof Card.props
     * @prop {Boolean} blank                    - Should the card header be blank?
     */
    blank: React.PropTypes.bool
};

/**
 * Creates a footer for Card
 * @param {Object} props            - Props which are passed to the function
 * @return {Object} Object          - Footer for Card
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
    /**
     * @memberof Card.props
     * @prop {Boolean} noTopMargin         - Should there be no top margin?
     */
    noTopMargin: React.PropTypes.bool,
    /**
     * @memberof Card.props
     * @prop {Boolean} largeTopMargin      - Should there be a large top margin?
     */
    largeTopMargin: React.PropTypes.bool
};

/**
 * Creates a sidebar for Card
 * @param {Object} props            - Props which are passed to the function
 * @return {Object} Object          - Sidebar for Card
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
    /**
     * @memberof Card.props
     * @prop {Boolean} isResponsiveNavigation      - Should the navigation be responsive?
     */
    isResponsiveNavigation: React.PropTypes.bool
};

/**
 * Creates the card content
 * @param {Object} props            - Props which are passed to the function
 * @return {Object} Object          - Content for the card
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
    /**
     * @memberof Card.props
     * @prop {Boolean} lowMargin            - Should the content have a low top margin?
     */
    lowMargin: React.PropTypes.bool,
    /**
     * @memberof Card.props
     * @prop {Boolean} enhancedMargin       - Should the content have a enhanced margin?
     */
    enhancedMargin: React.PropTypes.bool,
    /**
     * @memberof Card.props
     * @prop {Boolean} relative             - Should the content be relative positioned?
     */
    relative: React.PropTypes.bool
};

const CardContentLeft = createSimpleReactWrapper('div', 'liq_content-area__left');
const CardContentRight = createSimpleReactWrapper('div', 'liq_content-area__right');

/**
 * Creates a Textblock for Card
 * @param {Object} props            - Props which are passed to the function
 * @return {Object} Object          - Textblock for the card
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
    /**
     * @memberof Card.props
     * @prop {Boolean} largerText          - Should the text be large?
     */
    largerText: React.PropTypes.bool,
    /**
     * @memberof Card.props
     * @prop {Boolean} bottomMargin        - Should the textblock have a bottom margin?
     */
    bottomMargin: React.PropTypes.bool
};

/**
 * Creates Card wrapped in Container
 * @param {Object} props            - Props which are passed to the function
 * @return {Object} Object          - Wrapped Card
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
    /**
     * @memberof Card.props
     * @prop {Boolean} small        - Should the wrapped card be smaller?
     */
    small: React.PropTypes.bool
};

/**
 * Creates a modal for Card
 * @param {Object} props            - Props which are passed to the function
 * @return {Object} Object          - Card in a modal
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
