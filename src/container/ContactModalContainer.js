import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import ContactModal from '../components/ContactModal';
import Dimmed from '../components/Dimmed';

import * as modalActions from '../modules/modal';
import * as contactsActions from '../modules/contacts';

import shortId from 'shortid';

class ContactModalContainer extends Component {
    handleHide = () => {
        const {ModalActions} = this.props;

        ModalActions.hide();
    };

    handleChange = ({name, value}) => {
        const {ModalActions} = this.props;

        ModalActions.change({
            name,
            value
        });
    };

    handleAction = {
        create: () => {
            const {ContactActions, modal} = this.props;
            const {name, phone, color} = modal.get('contact').toJS();
            const id = shortId.generate();

            ContactActions.create({
                id,
                name,
                phone,
                color
            });

            this.handleHide();
        },
        modify: () => {
            const {ContactActions, modal} = this.props;
            const {id, name, phone} = modal.get('contact').toJS();

            ContactActions.modify({
                id,
                contact: {
                    name,
                    phone
                }
            });

            this.handleHide();
        },
    };

    handleRemove = () => {
        const {ContactActions, modal} = this.props;
        const id = modal.getIn(['contact', 'id']);

        ContactActions.remove(id);
        this.handleHide();
    };

    render() {
        const {modal} = this.props;
        const {visible, mode, contact} = modal.toJS();

        const {
            handleHide,
            handleAction,
            handleRemove,
            handleChange
        } = this;

        return (
            <div>
                <ContactModal
                    visible={visible}
                    mode={mode}
                    name={contact.name}
                    phone={contact.phone}
                    color={contact.color}
                    onChange={handleChange}
                    onRemove={handleRemove}
                    onHide={handleHide}
                    onAction={handleAction[mode]}
                />
                <Dimmed visible={visible}/>
            </div>
        )
    }
}

export default connect((state) => ({
    modal: state.modal
}), (dispatch) => ({
    ModalActions: bindActionCreators(modalActions, dispatch),
    ContactActions: bindActionCreators(contactsActions, dispatch)
}))(ContactModalContainer);