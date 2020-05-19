import {
    /*FETCH_ITEMS_FAILURE,*/
    FETCH_ITEMS_REQUEST,
    FETCH_ITEMS_SUCCESS,
    SEARCH_ITEM,
    SELECT_ITEM,
    ORDER_ITEM_SUCCESS
} from "./ItemTypes";
import items from "../itemsData";
import moment from 'moment';

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

const orderItemsSuccess = items =>{
    return {
        type: ORDER_ITEM_SUCCESS,
        payload: items
    }
}

export const searchItem = search => {
    return  {
        type: SEARCH_ITEM,
        payload: search
    }
};

export const selectItem = selectId => {
    return {
        type: SELECT_ITEM,
        payload: selectId
    }
}

export const orderItem = (order, orderBy) => {
    return (dispatch) => {
        dispatch(fetchItemsRequest);
    }
}

/*const fetchItemsFailure = error => {
    return {
        type: FETCH_ITEMS_FAILURE,
        payload: error
    }
};*/

export const fetchItems = () => {
    return (dispatch) => {
        dispatch(fetchItemsRequest);


        items.map(item => {
            item.prices.sort((a, b) => {
                a = new Date(a.date).getTime();
                b = new Date(b.date).getTime();
                   return b < a ? 1 : -1;
                });
            let currentPrice = (item.prices[item.prices.length - 1] !== undefined) ? item.prices[item.prices.length - 1].price : 0;
            item['currentPrice'] = currentPrice
            item['previousPrice'] = (item.prices[item.prices.length - 2] !== undefined) ? item.prices[item.prices.length - 2].price : null;
            item['dataChartPrice'] = {
                "name": item.name,
                "data": Object.keys(item.prices).map(function(name){
                    return [moment(item.prices[name]['date']).valueOf(), item.prices[name]['price']];
                })
            }
            
            return item;          
        });

        dispatch(fetchItemsSuccess(items));
        /*axios.get('/api/items')
            .then(response => {
                const items = response.data['hydra:member'];
                dispatch(fetchItemsSuccess(items));
            })
            .catch(error => {
                const errorMsg = error.message;
                dispatch(fetchItemsFailure(errorMsg));
            })*/
    }
};
