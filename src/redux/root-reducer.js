import {combineReducers} from 'redux';
import detailsReducer from './details/detail.reducers';

const rootReducer=combineReducers({
    details:detailsReducer
})

export default rootReducer;