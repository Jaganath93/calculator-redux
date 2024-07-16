import { applyMiddleware, combineReducers, compose, legacy_createStore as createStore } from "redux";
import { inputReducer1 } from "./slices/inputReducer1";
import { selectedInputReducer } from "./slices/selectedInputReducer";
import { inputReducer2 } from "./slices/inputReducer2";
import { operationReducer } from "./slices/operationReducer";
import { resultReducer } from "./slices/resultReducer";


// const input1 = (state = {value:0}, action)=>{
//     return state = action.payload;
// }

// const input2 = (state = {value:0}, action)=>{
//    return state = action.payload;
// }

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const allReducers = combineReducers({
        input1:inputReducer1,
        input2: inputReducer2,
        operation: operationReducer,
        selectedInput: selectedInputReducer,
        result: resultReducer
    })



export const store = createStore(allReducers, composeEnhancers(
    applyMiddleware()
));


