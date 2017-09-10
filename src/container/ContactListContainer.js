import {connect} from 'react-redux';
import * as contactActions from '../modules/contacts';
import * as modalActions from '../modules/modal';
import ContactList from '../components/ContactList';

import React, {Component} from 'react';
import {bindActionCreators} from 'redux';

class ContactListContainer extends Component {
    handleOpenModify = (id) => {
        const {contacts, ModalActions} = this.props;

        const contact = contacts.find(contact => contact.get('id') === id);
        ModalActions.show({
            mode: 'modify',
            contact: contact.toJS()
        });
    };

    handleOnToggleFavorite = (id) => {
        const {ContactActions} = this.props;
        ContactActions.toggleFavorite(id);
    };

    render() {
        const {contacts, keyword} = this.props;

        return (
            <ContactList
                contacts={contacts}
                search={keyword}
                onOpenModify={this.handleOpenModify}
                onToggleFavorite={this.handleOnToggleFavorite}
            />
        )
    }

}

export default connect((state) => ({
    keyword: state.base.get('keyword'),
    contacts: state.contacts
}), (dispatch) => ({
    ContactActions: bindActionCreators(contactActions, dispatch),
    ModalActions: bindActionCreators(modalActions, dispatch)
}))(ContactListContainer);