

export const setInput2 = (value)=>({
    type: "setNumber2",
    payload: value
 })
 
 
 export const inputReducer2 = (state= '',action)=>{
     if(action.type === 'setNumber2') return action.payload;
     else return state
 }
 
 
 