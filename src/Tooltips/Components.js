import React from 'react';
import classNames from 'classnames';
import styles from './styles.css';

const InfoBox = ({position, cssStyles, children}) => {
    return (
        <span
            className={`
                ${styles.liq_tooltips__hint}
                ${classNames('liq_tooltips__hint--' + position)}
            `}
            style={cssStyles}
        >
            <span className={styles.liq_tooltips__hint__inner}>
                {children}
            </span>
        </span>
    );
};

export default InfoBox;
