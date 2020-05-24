import Axios from "axios";

export const FETCH_ITEM_DETAIL_REQUEST = 'FETCH_ITEM_DETAIL_REQUEST';
export const FETCH_ITEM_DETAIL_SUCCESS = 'FETCH_ITEM_DETAIL_SUCCESS';
export const FETCH_ITEM_DETAIL_FAILURE = 'FETCH_ITEM_DETAIL_FAILURE';
export const FETCH_ITEM_DETAIL_PRICES_REQUEST = 'FETCH_ITEM_DETAIL_PRICES_REQUEST';
export const FETCH_ITEM_DETAIL_PRICES_SUCCESS = 'FETCH_ITEM_DETAIL_PRICES_SUCCESS';
export const FETCH_ITEM_DETAIL_PRICES_FAILURE = 'FETCH_ITEM_DETAIL_PRICES_FAILURE';
export const CLEAR_ITEM_DETAIL = 'CLEAR_ITEM_DETAIL';
export const SEARCH_ITEM_DETAIL = 'SEARCH_ITEM_DETAIL';
export const SELECT_STATION_DETAIL = 'SELECT_STATION_DETAIL';
export const TRANSACTION_TYPE_SELL = 'sell'
export const TRANSACTION_TYPE_BUY = 'buy'

const fetchItemDetailRequest = () => {
    return {
        type: FETCH_ITEM_DETAIL_REQUEST
    }
};

const fetchItemDetailSuccess = item => {
    return {
        type: FETCH_ITEM_DETAIL_SUCCESS,
        payload: item
    }
};

const fetchItemDetailFailure = error => {
    return {
        type: FETCH_ITEM_DETAIL_FAILURE,
        payload: error
    }
};

const fetchItemPricesStationRequest = () => {
    return {
        type: FETCH_ITEM_DETAIL_PRICES_REQUEST
    }
};

const fetchItemPricesStationFailure = error => {
    return {
        type: FETCH_ITEM_DETAIL_PRICES_FAILURE,
        payload: error
    }
};


const fetchItemPricesStationSuccess = ( stationId, itemId, prices, transactionType ) => {
    return {
        type: FETCH_ITEM_DETAIL_PRICES_SUCCESS,
        stationId,
        itemId,
        prices,
        transactionType
    }
}

export const searchItemDetail = search => {
    return  {
        type: SEARCH_ITEM_DETAIL,
        payload: search
    }
};

export const clearItemDetail = () => {
    return {
        type: CLEAR_ITEM_DETAIL
    }
}

export const selectStationDetail = station => {
    return {
        type: SELECT_STATION_DETAIL,
        payload: station
    }
}

export const fetchItemDetail = itemId => {
    return (dispatch) => {
        dispatch(fetchItemDetailRequest());
        Axios.get(`${process.env.REACT_APP_API_URI}/api/item/${itemId}`)
            .then(response => {
                dispatch(fetchItemDetailSuccess(response.data));
            })
            .catch(error => {
                dispatch(fetchItemDetailFailure(error.message));
            })
    }
};

export const fetchItemSellPricesByStation = (stationId, itemId) => {
    return fetchItemPricesByStation(stationId, itemId, TRANSACTION_TYPE_SELL);
}

export const fetchItemBuyPricesByStation = (stationId, itemId) => {
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