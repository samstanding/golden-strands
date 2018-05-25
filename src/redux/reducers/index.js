import { combineReducers } from 'redux';
import user from './userReducer';
import login from './loginReducer';
import { blog } from './blogReducer';

const store = combineReducers({
    user,
    login,
    blog,
});

export default store;