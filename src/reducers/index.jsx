import {combineReducers} from "redux";
import ItemReducer from "./ItemReducer";
import StationReducer from "./StationReducer";
import ItemStationReducer from "./ItemStationReducer";

const allReducers = combineReducers({
   items: ItemReducer,
   stations: StationReducer,
   itemsStation: ItemStationReducer,
});

export default allReducers;