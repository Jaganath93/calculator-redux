

export const setInput1 = (value)=>({
   type: "setNumber1",
   payload: value
})


export const inputReducer1 = (state= '',action)=>{
    if(action.type === 'setNumber1') return state + action.payload;
    else return state
   
}


