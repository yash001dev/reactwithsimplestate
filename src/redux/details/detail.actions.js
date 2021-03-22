import DetailActionTypes from './detail.types';

export const addDetails=(userDetails)=>({
    type:DetailActionTypes.INSERT_DETAILS,
    payload:userDetails
});

export const editDetails=(userDetails)=>({
    type:DetailActionTypes.UPDATE_DETAILS,
    payload:userDetails
})

export const deleteDetails=(userid)=>({
    type:DetailActionTypes.DELETE_DETAILS,
    payload:userid
})




