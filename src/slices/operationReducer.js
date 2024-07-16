
export const setOperation = (value)=>({
    type: "setOperation",
    payload:value
})



export const operationReducer = (state='+',action)=>{
    if(action.type === "setOperation") return action.payload;
    else return state;
};