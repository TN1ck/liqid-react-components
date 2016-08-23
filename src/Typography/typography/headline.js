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
function TypographyHeadline (props) {
    const validTypes = [
        'max',
        'large',
        'regular',
        'regular-bold',
        'small',
        'small-grey',
        'smaller',

        'uppercase',
        'uppercase-small',
        'uppercase-small-grey',
        'uppercase-smallest-grey'
    ];
    const type = (_.includes(validTypes, props.type)) ? props.type : 'regular';

    return (
        <props.tag styleName={classNames('headline--' + type, props.className)}>
            {props.children}
        </props.tag>
    );
}

TypographyHeadline.propTypes = {
    type: React.PropTypes.string.isRequired,
    tag: React.PropTypes.string.isRequired
};

const _TypographyHeadline = CSSModules(TypographyHeadline, styles, {allowMultiple: true});

export default _TypographyHeadline;
export { _TypographyHeadline as _TypographyHeadline };
