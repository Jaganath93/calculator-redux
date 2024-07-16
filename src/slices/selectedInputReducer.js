

 export const selectedInput1Action = (value)=>({
    type: "selectedInput1",
    payload: value
 }
)

export const selectedInput2Action = (value)=>({
    type: "selectedInput2",
    payload: value
 }
)



export const selectedInputReducer = (state='input1',action)=>{
    if(action.type==='selectedInput2') return action.payload = 'input2';
    else if(action.type==='selectedInput1') return action.payload = 'input1';
    else return state;
}