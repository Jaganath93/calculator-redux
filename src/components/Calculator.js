import { useDispatch, useSelector } from "react-redux";
import { setInput1 } from "../slices/inputReducer1";
import { selectedInput1Action, selectedInput2Action } from "../slices/selectedInputReducer";
import { setInput2 } from "../slices/inputReducer2";
import { setResult } from "../slices/resultReducer";
import { setOperation } from "../slices/operationReducer";


export const Calculator = ()=>{
    
    const dispatch = useDispatch();

    const input1 = useSelector((state)=> Number(state.input1));
    const input2 = useSelector((state)=> Number(state.input2));
    const operation = useSelector((state)=> state.operation);
    const selectedInput = useSelector((state)=> state.selectedInput);
    const result = useSelector((state)=> Number(state.result));

    

    const handleOperation = (e)=> dispatch(setOperation(e.target.value));

    const handleNumber = (num)=> {
        if(selectedInput === "input1") return dispatch(setInput1(num))
            else if(selectedInput === "input2") return dispatch(setInput2(num))
    };


    const handleSubmit = ()=>{
        let initialResult = 0;        
            if(operation==='+') {
             initialResult = input1 + input2;
             setResult(initialResult);
            }
            else if(operation==='-') {
                initialResult = input1 - input2;
                setResult(initialResult);
               }

            else if(operation==='*') {
                initialResult = input1 * input2;
                setResult(initialResult);
               }
            else if(operation==='/') {
                initialResult = input1 / input2;
                setResult(initialResult);
               }
            else return initialResult;

            return dispatch(setResult(initialResult));
    };
        const handleClear = ()=>{
            dispatch(setInput1(''));
            dispatch(setInput2(''));
            dispatch(selectedInput1Action(''));
            dispatch(selectedInput1Action(''));
            dispatch(setInput1(''));
            dispatch(setResult(''));
        }
      


    return(
        <div>
            <div style={{display:'flex',justifyContent:'center'}}>
                <input placeholder="Input 1" value={input1} type="number"  onChange={(e)=> dispatch(setInput1(e.target.value))}
                    onFocus={()=> dispatch(selectedInput1Action("input1"))}
                    />
                <select value={operation} onChange={handleOperation}>
                    {['+','-','*','/'].map((op)=> <option >{op}</option>)}
                </select>
                
                <input placeholder="Input 2" value={input2} type="number"  onChange={(e)=> dispatch(setInput2(e.target.value))}
                onFocus={()=> dispatch(selectedInput2Action("input2"))}
                />
                <p style={{marginLeft:'10px'}}>=</p>
                <h2 style={{marginLeft:'20px'}}>{result}</h2>
            </div>

            <div style={{border:'1px solid', maxHeight:'200px',textAlign:'center', maxWidth:'25%', marginLeft:'32%', marginTop:'10px'}}>
                <div>
                   {
                    ['1','2','3'].map((num)=> <button onClick={()=> handleNumber(num)}>{num}</button>)
                   }
                </div>
                <div>
                {
                    ['4','5','6'].map((num)=> <button onClick={()=> handleNumber(num)}>{num}</button>)
                   }
                </div>
                <div>
                {
                    ['7','8','9'].map((num)=> <button onClick={()=> handleNumber(num)}>{num}</button>)
                   }
                </div>
                <div>
                    <button onClick={()=> handleNumber('0')}>0</button>
                    <button onClick={handleClear}>C</button>
                     <button onClick={handleSubmit}>S</button>
                   
                </div>
            </div>
        </div>
    );
};