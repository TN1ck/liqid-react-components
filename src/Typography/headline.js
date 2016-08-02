import React from 'react';
import classNames from 'classnames';
import _ from 'lodash';

/**
 * Class representing a Headline
 * Hierarchical order can be chosen with tag
 * Type defines visual order
 * @extends React.Component
 * @returns {JSX} headline
 * @param {Object} props props handed to headline
 */
function Headline (props) {
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
        <props.tag className={classNames('headline--' + type, props.className)}>
            {props.children}
        </props.tag>
    );
}

Headline.propTypes = {
    type: React.PropTypes.string.isRequired,
    tag: React.PropTypes.string.isRequired
};

export default Headline;
export {
    Headline
};
