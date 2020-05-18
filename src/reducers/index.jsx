import ItemReducer from "./ItemReducer";
import {combineReducers} from "redux";

const allReducers = combineReducers({
   items: ItemReducer
});

export default allReducers;