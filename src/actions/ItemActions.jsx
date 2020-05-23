import Axios from "axios";

export const FETCH_ITEMS_REQUEST = 'FETCH_ITEMS_REQUEST';
export const FETCH_ITEMS_SUCCESS = 'FETCH_ITEMS_SUCCESS';
export const FETCH_ITEMS_FAILURE = 'FETCH_ITEMS_FAILURE';
export const SEARCH_ITEM = 'SEARCH_ITEM';
export const SELECT_ITEM = 'SELECT_ITEM';

const fetchItemsRequest = () => {
    return {
        type: FETCH_ITEMS_REQUEST
    }
};

const fetchItemsSuccess = items => {
    return {
        type: FETCH_ITEMS_SUCCESS,
        payload: items
    }
};

const fetchItemsFailure = error => {
    return {
        type: FETCH_ITEMS_FAILURE,
        payload: error
    }
};

export const searchItem = search => {
    return  {
        type: SEARCH_ITEM,
        payload: search
    }
};

export const selectItem = item => {
    return {
        type: SELECT_ITEM,
        payload: item
    }
}

export const fetchItems = () => {
    return (dispatch) => {
        dispatch(fetchItemsRequest());
        Axios.get(`${process.env.REACT_APP_API_URI}/api/item`)
            .then(response => {
                dispatch(fetchItemsSuccess(response.data));
            })
            .catch(error => {
                dispatch(fetchItemsFailure(error.message));
            })
    }
};
