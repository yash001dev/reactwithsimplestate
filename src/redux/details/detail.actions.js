import DetailActionTypes from './detail.types';

export const addDetails=(userDetails)=>({
    type:DetailActionTypes.INSERT_DETAILS,
    payload:userDetails
});


