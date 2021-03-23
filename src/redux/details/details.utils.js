
export const deleteDetails=(state,id)=>{
    console.log("DELETE STARTED.:",id);
    const mainData= state.filter(value=>{
        console.log("VALUE:",value.id!==id);
        return value.id!==id
    });
    console.log("MAINDATA:",mainData);
    return mainData;
}

export const editDetails=(state,data)=>{
   const mainData= state.map(value=>value.id===data.id?data:value);
   return mainData;
}



