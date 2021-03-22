import DetailActionTypes from './detail.types';
import { deleteDetails,editDetails } from './details.utils';

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

        case DetailActionTypes.DELETE_DETAILS:
            console.log("DELETE DETAILS:",state);
            return{
                ...state,
                userDetails:deleteDetails(state.userDetails,action.payload)
            }

        case DetailActionTypes.UPDATE_DETAILS:
            console.log("DELETE DETAILS:",state);
            return{
                ...state,
                useDetails:editDetails(state.userDetails,action.payload)
            }
            
        default:
            return state
    }
};

export default detailsReducer;