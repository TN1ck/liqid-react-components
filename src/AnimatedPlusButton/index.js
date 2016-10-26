import React      from 'react';
import classNames from 'classnames';
import CSSModules from 'react-css-modules';
import styles     from './styles.scss';

/**
 * @param {Object} props - Props which are passed to the component
 * @return {Object} - Returns an animated plus button
 */
function AnimatedPlusButton (props) {
    const classes = classNames( 'animated-plus-button', {
        'animated-plus-button--right': props.rightButton,
        'animated-plus-button--active': props.active,
        'animated-plus-button--left': props.leftButton,
        'animated-plus-button--tiny': props.tinyButtons
    });

    return (
        <div styleName={classes}>
            <div styleName='horizontal'></div>
            <div styleName='vertical'></div>
        </div>
    );
}

const _AnimatedPlusButton = CSSModules(AnimatedPlusButton, styles, {allowMultiple: true});

export default _AnimatedPlusButton;
export { _AnimatedPlusButton as AnimatedPlusButton };
