
export const deleteDetails=(state,id)=>{
    const mainData= state.filter(value=>value.id!==id);
    return mainData;
}

export const editDetails=(state,data)=>{
   const mainData= state.map(value=>value.id===data.id?data:value);
   return mainData;
}



