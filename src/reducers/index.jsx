import {combineReducers} from "redux";
import ItemReducer from "./ItemReducer";
import StationReducer from "./StationReducer";
import ItemStationReducer from "./ItemStationReducer";
import ItemDetailReducer from "./ItemDetailReducer";

const allReducers = combineReducers({
   items: ItemReducer,
   stations: StationReducer,
   itemsStation: ItemStationReducer,
   itemDetail: ItemDetailReducer,
});

export default allReducers;