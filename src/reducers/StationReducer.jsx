import {
    FETCH_STATIONS_REQUEST,
    FETCH_STATIONS_SUCCESS,
    FETCH_STATIONS_FAILURE,
    SEARCH_STATION,
} from "../actions/stationActions";

const StationReducer = (state = {stations: [], loading: false, search: null}, action) => {
    switch (action.type) {
        case FETCH_STATIONS_REQUEST:
            return {
                ...state,
                loading: true
            };
        case FETCH_STATIONS_SUCCESS:
            return {
                loading: false,
                stations: action.payload,
                error: ''
            };
        case FETCH_STATIONS_FAILURE:
            return {
                loading: false,
                stations: [],
                error: action.payload
            };
        case SEARCH_STATION:
            return {
                ...state,
                search: action.payload
            }
        default:
            return state;
    }
};

export default StationReducer;