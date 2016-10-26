import React      from 'react';
import classNames from 'classnames';
import CSSModules from 'react-css-modules';
import styles     from './styles.scss';

/**
 * @param {Object} props - Props which are passed to the component
 * @return {Object} - Returns a fancy button
 */
function FancyButton (props) {
    const classes = classNames('btn', 'btn-fancy', props.className, {
        'btn-fancy--expanded': props.expanded
    });

    return (
        <button
            id={props.id}
            onClick={props.onClick}
            styleName={classes}
        >
            {props.children}
        </button>
    );
}

const _FancyButton = CSSModules(FancyButton, styles, {allowMultiple: true});

export default _FancyButton;
export { _FancyButton as FancyButton };
