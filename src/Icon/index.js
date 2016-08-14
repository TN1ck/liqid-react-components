import React from 'react';

import styles from './styles.scss';
import icons from './getIcons';

/**
 * Class representing an Icon
 * @namespace Icon
 * @extends React.Component
 */
class Icon extends React.Component {
    render () {
        return (
            <div
                className={styles.icon}
                dangerouslySetInnerHTML={{__html: icons[this.props.value]}}
            />
        );
    }
}

/**
 * @memberof Icon
 * @namespace props
 * @prop {Object} propTypes         - the props that are passed to this component
 */
Icon.propTypes = {
    /**
     * @memberof Icon.props
     * @prop {String} type          - type of icon, for example arrow-left
     */
    value: React.PropTypes.string
};

export default Icon;
export { Icon };
