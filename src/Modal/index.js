import React from 'react';
import classNames from 'classnames';
import {
    ModalPortal,
    ModalBackground,
    ModalContent
} from './Components.js';

import styles from './styles.css';

/**
 * The base Modal, which wraps the content Components
 * @param {Object} props The props for the component
 * @returns {React.Component} Component to be returned
 */
function Modal ({onHide, className, children, show, showButton, id}) {
    return (
        show ?
        (
            <ModalPortal>
                <ModalBackground onClose={onHide}>
                    <div className={classNames(styles.liq_modal, className)} key='modal'>
                        <div className={styles['liq_modal-dialog']} id={id}>
                            <ModalContent onClose={onHide} showButton={showButton}>
                                {children}
                            </ModalContent>
                        </div>
                    </div>
                </ModalBackground>
            </ModalPortal>
        ) : null
    );
}

Modal.PropTypes = {
    onHide: React.PropTypes.func,
    className: React.PropTypes.string,
    children: React.PropTypes.node,
    show: React.PropTypes.bool,
    id: React.PropTypes.string
};

/**
 * The Modals body
 * @param {Object} props The props for the component
 * @returns {React.Component} Component to be returned
 */
function ModalBody ({children}) {
    return (
        <div className={styles['liq_modal-content__body']}>
            {children}
        </div>
    );
}

/**
 * The Modals footer
 * @param {Object} props The props for the component
 * @returns {React.Component} Component to be returned
 */
function ModalFooter ({children}) {
    return (
        <div className={styles['liq_modal-content__footer']}>
            {children}
        </div>
    );
}

/**
 * The Modals header
 * @param {Object} props The props for the component
 * @returns {React.Component} Component to be returned
 */
function ModalHeader ({children}) {
    return (
        <div className={styles['liq_modal-content__header']}>
            {children}
        </div>
    );
}

/**
 * The Modals title
 * @param {Object} props The props for the component
 * @returns {React.Component} Component to be returned
 */
function ModalTitle ({children}) {
    return (
        <h4 className={styles['liq_modal-content__title']}>
            {children}
        </h4>
    );
}

Modal.Body = ModalBody;
Modal.Footer = ModalFooter;
Modal.Header = ModalHeader;
Modal.Title = ModalTitle;

export default Modal;
