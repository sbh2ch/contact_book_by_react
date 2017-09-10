import {createAction, handleActions} from 'redux-actions';
import {List, Map, fromJS} from 'immutable';

const CREATE = 'contact/CREATE';
const MODIFY = 'contact/MODIFY';
const REMOVE = 'contact/REMOVE';
const TOGGLE_FAVORITE = 'contact/TOGGLE_FAVORITE';
const LOAD_CONTACTS = 'contact/LOAD_CONTACTS';

export const create = createAction(CREATE); // id, name, phone, color
export const modify = createAction(MODIFY); // id, contact: {name, phone}
export const remove = createAction(REMOVE); // id
export const toggleFavorite = createAction(TOGGLE_FAVORITE); // id
export const loadContacts = createAction(LOAD_CONTACTS);

const initialState = List([
    Map({
        "id": "SyKw5cyAl",
        "name": "m416",
        "phone": "010-0000-0000",
        "color": "#40c057",
        "favorite": true
    }),
    Map({
        "id": "BJcFqc10l",
        "name": "sks",
        "phone": "010-0000-0002",
        "color": "#fd7e14",
        "favorite": false
    }),
    Map({
        "id": "BJUcqqk0l",
        "name": "m24",
        "phone": "010-0000-0003",
        "color": "#15aabf",
        "favorite": true
    }),
    Map({
        "id": "rJHoq91Cl",
        "name": "m16",
        "phone": "010-0000-0004",
        "color": "#e64980",
        "favorite": true
    })
]);

export default handleActions({
    [CREATE]: (state, action) => {
        return state.push(Map({
            ...action.payload
        }))
    },
    [MODIFY]: (state, action) => {
        const index = state.findIndex(contact => contact.get('id') === action.payload.id);
        return state.set(index, action.payload.contact);
    },
    [REMOVE]: (state, action) => {
        const index = state.findIndex(contact => contact.get('id') === action.payload.id);

        return state.delete(index);
    },
    [TOGGLE_FAVORITE]: (state, action) => {
        const index = state.findIndex(contact => contact.get('id') === action.payload);

        return state.update(index, contact => contact.set('favorite', !contact.get('favorite')));
    },
    [LOAD_CONTACTS]: (state) => {
        const storageList = JSON.parse(localStorage.getItem('contactList'));
        if (storageList) {
            return fromJS(storageList);
        }

        return state;

    }
}, initialState);