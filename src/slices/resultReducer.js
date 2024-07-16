
export const setResult = (value)=>({
    type:"result",
    payload: value
})



export const resultReducer = (state='',action)=>{
    if(action.type==="result") return action.payload;
    else return state;
};