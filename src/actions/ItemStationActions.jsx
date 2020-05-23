import Axios from "axios";

export const FETCH_ITEMS_STATION_REQUEST = 'FETCH_ITEMS_STATION_REQUEST';
export const FETCH_ITEMS_STATION_SUCCESS = 'FETCH_ITEMS_STATION_SUCCESS';
export const FETCH_ITEMS_STATION_FAILURE = 'FETCH_ITEMS_STATION_FAILURE';
export const FETCH_ITEM_PRICES_STATION_REQUEST = 'FETCH_ITEM_PRICES_STATION_REQUEST';
export const FETCH_ITEM_PRICES_STATION_SUCCESS = 'FETCH_ITEM_PRICES_STATION_SUCCESS';
export const FETCH_ITEM_PRICES_STATION_FAILURE = 'FETCH_ITEM_PRICES_STATION_FAILURE';
export const CLEAR_ITEMS_STATION = 'CLEAR_ITEMS_STATION';
export const SEARCH_ITEM_STATION = 'SEARCH_ITEM_STATION';
export const SELECT_ITEM_STATION = 'SELECT_ITEM_STATION';

const fetchItemsStationRequest = () => {
    return {
        type: FETCH_ITEMS_STATION_REQUEST
    }
};

const fetchItemsStationFailure = error => {
    return {
        type: FETCH_ITEMS_STATION_FAILURE,
        payload: error
    }
};


const fetchItemsStationSuccess = station => {
    return {
        type: FETCH_ITEMS_STATION_SUCCESS,
        payload: station
    }
};

const fetchItemPricesStationRequest = () => {
    return {
        type: FETCH_ITEM_PRICES_STATION_REQUEST
    }
};

const fetchItemPricesStationFailure = error => {
    return {
        type: FETCH_ITEM_PRICES_STATION_FAILURE,
        payload: error
    }
};


const fetchItemPricesStationSuccess = ( stationId, itemId, prices ) => {
    return {
        type: FETCH_ITEM_PRICES_STATION_SUCCESS,
        stationId,
        itemId,
        prices
    }
}

export const clearItemsStation = () => {
    return {
        type: CLEAR_ITEMS_STATION
    }
}

export const searchItemStation = search => {
    return  {
        type: SEARCH_ITEM_STATION,
        payload: search
    }
};

export const fetchItemsByStation = (stationId) => {
    return (dispatch) => {
        dispatch(fetchItemsStationRequest());
        Axios.get(`${process.env.REACT_APP_API_URI}/api/station/${stationId}`)
            .then(response => {
                dispatch(fetchItemsStationSuccess(response.data));
            })
            .catch(error => {
                dispatch(fetchItemsStationFailure(error.message));
            })
    }
};

export const selectItemStation = item => {
    return {
        type: SELECT_ITEM_STATION,
        payload: item
    }
}

export const fetchItemPricesByStation = (stationId, itemId) => {
    return (dispatch) => {
        dispatch(fetchItemPricesStationRequest());
        Axios.get(`${process.env.REACT_APP_API_URI}/api/price/sell/item/${itemId}/station/${stationId}`)
            .then(response => {
                dispatch(fetchItemPricesStationSuccess(stationId, itemId, response.data));
            })
            .catch(error => {
                dispatch(fetchItemPricesStationFailure(error.message));
            })
    }
}
