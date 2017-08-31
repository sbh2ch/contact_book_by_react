/**
 * Created by sonbyeonghwa on 2017. 8. 31..
 */
import React, {Component} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ContactItem from './ContactItem';

const Wrapper = styled.div`
    margin-top: 1rem;
`;

class ContactList extends Component {
    static propTypes = {
        contacts: PropTypes.arrayOf(PropTypes.object),
        search: PropTypes.string,
        onToggleFavorite: PropTypes.func,
        onOpenModify: PropTypes.func
    };

    render() {
        const {contacts, onOpenModify, search, onToggleFavorite} = this.props;
        const contactList = contacts
            .filter(c => c.name.indexOf(search) !== -1)
            .sort((a, b) => {
                if (a.name > b.name) return 1;
                if (a.name < b.name) return -1;
                return 0;
            })
            .map(
                contact => (
                    <ContactItem
                        key={contact.id}
                        contact={contact}
                        onOpenModify={onOpenModify}
                    />
                )
            );

        return (
            <Wrapper>
                {contactList}
            </Wrapper>
        );
    }
}

export default ContactList;