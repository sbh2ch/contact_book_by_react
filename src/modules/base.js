import {createAction, handleActions} from 'redux-actions';
import {Map} from 'immutable';

const CHANGE_SEARCH = "base/CHANGE_SEARCH";
const SET_VIEW = "base/SET_VIEW";

export const changeSearch = createAction(CHANGE_SEARCH);
export const setView = createAction(SET_VIEW);

const initialState = Map({
    keyword: '',
    view: 'favorite' // favorite, list
});

export default handleActions({
    [CHANGE_SEARCH]: (state, action) => {
        return state.set('keyword', action.payload);
    },
    [SET_VIEW]: (state, action) => {
        return state.set('view', action.payload);
    }
}, initialState);