import { combineReducers } from 'redux';
import userReducer from './userReducer';
import tweetReducer from './tweetReducer';
import ervillReducer from './ervillReducer';

export default combineReducers({
    user: userReducer,
    tweets: tweetReducer,
    ervill: ervillReducer
});