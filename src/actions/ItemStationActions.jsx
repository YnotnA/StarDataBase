import Axios from "axios";

export const FETCH_ITEMS_STATION_REQUEST = 'FETCH_ITEMS_STATION_REQUEST';
export const FETCH_ITEMS_STATION_SUCCESS = 'FETCH_ITEMS_STATION_SUCCESS';
export const FETCH_ITEMS_STATION_FAILURE = 'FETCH_ITEMS_STATION_FAILURE';
export const FETCH_ITEM_PRICES_STATION_REQUEST = 'FETCH_ITEM_PRICES_STATION_REQUEST';
export const FETCH_ITEM_PRICES_STATION_SUCCESS = 'FETCH_ITEM_PRICES_STATION_SUCCESS';
export const FETCH_ITEM_PRICES_STATION_FAILURE = 'FETCH_ITEM_PRICES_STATION_FAILURE';
export const COMBINE_SERIES_CHART = 'COMBINE_SERIES_CHART'
export const CLEAR_ITEMS_STATION = 'CLEAR_ITEMS_STATION';
export const SEARCH_ITEM_STATION = 'SEARCH_ITEM_STATION';
export const SELECT_ITEM_STATION = 'SELECT_ITEM_STATION';
export const TRANSACTION_TYPE_SELL = 'sell'
export const TRANSACTION_TYPE_BUY = 'buy'

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


const fetchItemPricesStationSuccess = ( stationId, itemId, prices, transactionType ) => {
    return {
        type: FETCH_ITEM_PRICES_STATION_SUCCESS,
        stationId,
        itemId,
        prices,
        transactionType
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

export const selectItemStation = item => {
    return {
        type: SELECT_ITEM_STATION,
        payload: item
    }
}

export const combineSeriesChart = () => {
    return {
        type: COMBINE_SERIES_CHART
    }
}

export const fetchItemsByStation = (stationId, filters = {}) => {
    return (dispatch) => {
        dispatch(fetchItemsStationRequest());
        Axios.get(`${process.env.REACT_APP_API_URI}/api/station/${stationId}`, {params: filters})
            .then(response => {
                dispatch(fetchItemsStationSuccess(response.data));
                response.data.items.map(item => {
                    dispatch(fetchItemSellPricesByStation(stationId, item.id))
                    dispatch(fetchItemBuyPricesByStation(stationId, item.id))
                    return item
                })
                dispatch(combineSeriesChart())
            })
            .catch(error => {
                dispatch(fetchItemsStationFailure(error.message));
            })
    }
};

const fetchItemSellPricesByStation = (stationId, itemId) => {
    return fetchItemPricesByStation(stationId, itemId, TRANSACTION_TYPE_SELL);
}

const fetchItemBuyPricesByStation = (stationId, itemId) => {
    return fetchItemPricesByStation(stationId, itemId, TRANSACTION_TYPE_BUY);
}

const fetchItemPricesByStation = (stationId, itemId, type = TRANSACTION_TYPE_SELL) => {
    return (dispatch) => {
        dispatch(fetchItemPricesStationRequest());
        Axios.get(`${process.env.REACT_APP_API_URI}/api/price/${type}/item/${itemId}/station/${stationId}`)
            .then(response => {
                dispatch(fetchItemPricesStationSuccess(stationId, itemId, response.data, type));
            })
            .catch(error => {
                dispatch(fetchItemPricesStationFailure(error.message));
            })
    }
}
