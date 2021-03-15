import DetailActionTypes from './detail.types';

const INITIAL_STATE={
    userDetails:[],
}

const detailsReducer=(state=INITIAL_STATE,action)=>{
    switch(action.type){
        case DetailActionTypes.INSERT_DETAILS:
            return{
                ...state,
                userDetails:[...state.userDetails,action.payload]
            }
        default:
            return state
    }
};

export default detailsReducer;