/**
 * Global header for questionnaires
 */
import React from 'react';
import _ from 'lodash';
import classNames from 'classnames';
import CSSModules from 'react-css-modules';
import styles from '../styles.scss';

/**
 * Represents a book.
 * @constructor
 * @param {string} props - The title of the book.
 * @param {string} author - The author of the book.
 */
function TypographyTextBlock (props) {
    const validTypes = [
        'large',
        'regular',
        'small',

        'muted-small',
        'muted-normal'
    ];
    const type = (_.includes(validTypes, props.type)) ? props.type : 'regular';

    return (
        <props.tag styleName={
            classNames('textblock--' + type, props.className, {
                'textblock--limittedWidth': props.limittedTextWidth
            })}
        >
            {props.children}
        </props.tag>
    );
}

TypographyTextBlock.propTypes = {
    type: React.PropTypes.string.isRequired,
    tag: React.PropTypes.string.isRequired
};

const _TypographyTextBlock = CSSModules(TypographyTextBlock, styles, {allowMultiple: true});

export default _TypographyTextBlock;
export { _TypographyTextBlock as _TypographyTextBlock };
