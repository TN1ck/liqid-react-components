import React from 'react';
import Modal from './index.js';
import {
    storiesOf,
    setAddon
} from '@kadira/storybook';
import infoAddon from '@kadira/react-storybook-addon-info';

setAddon(infoAddon);

class ToggleModal extends React.Component {
    constructor (props) {
        super(props);
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.state = {
            show: false
        };
    }
    openModal () {
        this.setState({
            show: true
        });
    }
    closeModal () {
        this.setState({
            show: false
        });
    }
    render () {
        return (
            <div>
                <button
                    onClick={this.openModal}
                >
                    {'toggle modal'}
                </button>
                <Modal
                    onHide={this.closeModal}
                    show={this.state.show}
                    {...this.props}
                >
                    <Modal.Header>
                        <Modal.Title>
                            {'lorem'}
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {'Body Text'}
                        {this.props.children}
                    </Modal.Body>
                    <Modal.Footer>
                        {'Footer'}
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}


storiesOf('Modal', module)
    .addWithInfo(
        'Simple Modal',
        'General Modal usage',
        () => (
            <Modal
                show
            >
                <Modal.Header>
                    <Modal.Title>
                        {'Header Text'}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {'Body Text'}
                </Modal.Body>
                <Modal.Footer>
                    {'Footer'}
                </Modal.Footer>
            </Modal>
        ), {
            source: true,
            inline: false,
            propTables: [Modal]
        }
    )
     .addWithInfo(
        'Modal with a button trigger',
        'General Modal usage',
        () => {
            return <ToggleModal />;
        }, {
            source: true,
            inline: false,
            propTables: [Modal]
        }
    )
    .addWithInfo(
        'Modal with a button trigger, without close button',
        'General Modal usage',
        () => {
            return <ToggleModal showButton={false} />;
        }, {
            source: true,
            inline: false,
            propTables: [Modal]
        }
    )
    .addWithInfo(
        'Modal in Modal',
        'General Modal usage',
        () => {
            return (
                <ToggleModal>
                    <ToggleModal />
                </ToggleModal>
            );
        }, {
            source: true,
            inline: false,
            propTables: [Modal]
        }
    );
