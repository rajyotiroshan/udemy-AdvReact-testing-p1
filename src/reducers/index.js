import { combineReducers} from 'redux';
import commentReducers from 'reducers/comments';

export default combineReducers({
    comments: commentReducers
});