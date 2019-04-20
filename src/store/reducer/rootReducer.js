import { combineReducers } from "redux";
import FbPostReducer from "./components/FbPostReducer";

const rootReducers = combineReducers ({
  
    fbPost : FbPostReducer,
})

export default rootReducers;