import React, {Component} from 'react';
import Header from './components/Header';
import Container from './components/Container';
import ViewSelectorContainer from './container/ViewSelectorContainer';
import * as contactActions from './modules/contacts';
import {bindActionCreators} from 'redux';
import InputContainer from './container/InputContainer';
import FavoriteListContainer from './container/FavoriteListContainer';
import FloatingButtonContainer from './container/FloatingButtonContainer';
import ContactModalContainer from './container/ContactModalContainer';
import ContactListContainer from './container/ContactListContainer';

import {connect} from 'react-redux'

class App extends Component {
    componentDidUpdate(prevProps, prevState) {
        localStorage.setItem('contactList', JSON.stringify(this.props.contacts.toJS()));
    }

    componentDidMount() {
        const {ContactActions} = this.props;
        ContactActions.loadContacts();
    }

    render() {
        const {view} = this.props;

        return (
            <div>
                <Header/>
                <ViewSelectorContainer/>
                <ContactModalContainer/>
                <Container visible={view === 'favorite'}>
                    <FavoriteListContainer/>
                </Container>
                <Container visible={view === 'list'}>
                    <InputContainer/>
                    <ContactListContainer/>
                </Container>
                <FloatingButtonContainer/>
            </div>
        );
    };
}


export default connect(
    (state) => {
        return {
            view: state.base.get('view'),
            contacts: state.contacts
        }
    }, (dispatch) => ({
        ContactActions: bindActionCreators(contactActions, dispatch)
    }))(App);