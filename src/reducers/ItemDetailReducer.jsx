import {
    FETCH_ITEM_DETAIL_REQUEST,
    FETCH_ITEM_DETAIL_SUCCESS,
    FETCH_ITEM_DETAIL_FAILURE,
    SEARCH_ITEM_DETAIL,
    CLEAR_ITEM_DETAIL,
    FETCH_ITEM_DETAIL_PRICES_REQUEST,
    FETCH_ITEM_DETAIL_PRICES_SUCCESS,
    FETCH_ITEM_DETAIL_PRICES_FAILURE,
    SELECT_STATION_DETAIL,
    TRANSACTION_TYPE_SELL,
} from "../actions/ItemDetailActions";


const ItemDetailReducer = (
        state = {
            item: {
                imgPath: null,
                stations: [],
                type: {
                    name: null,
                    subCategory: {
                        name: null,
                        category: {
                            name: null
                        }
                    }
                }
            },
            loading: false,
            search: null
            }
        , action
    ) => {
    switch (action.type) {
        case FETCH_ITEM_DETAIL_REQUEST:
            return {
                ...state,
                loading: true
            };
        case FETCH_ITEM_DETAIL_SUCCESS:
            return {
                loading: false,
                item: action.payload,
                error: ''
            };
        case FETCH_ITEM_DETAIL_FAILURE:
            return {
                loading: false,
                item: [],
                error: action.payload
            };
        case FETCH_ITEM_DETAIL_PRICES_REQUEST:
            return {
                ...state,
                loading: true
            };
        case FETCH_ITEM_DETAIL_PRICES_SUCCESS:
            const clone = require('rfdc')()
            const newItem = clone(state.item)
            let station = newItem.stations.find(station => station.id === action.stationId);
            
            action.prices.map(price => {
                price.value = parseFloat(price.value)
                return price
            })

            station[`${action.transactionType}Prices`] = action.prices
        
            station[`${action.transactionType}DataPrice`] = {
                name: station.name,
                data: Object.keys(action.prices).map(function(name){
                    return [parseInt(action.prices[name]['date']), action.prices[name]['value']];
                })
            }

            let currentPrice = (action.prices[action.prices.length - 1] !== undefined) ? action.prices[action.prices.length - 1].value : null;
            let previousPrice = (action.prices[action.prices.length - 2] !== undefined) ? action.prices[action.prices.length - 2].value : null;

            if (null !== currentPrice) {
                station[(action.transactionType === TRANSACTION_TYPE_SELL) ? 'currentSellingPrice' : 'currentBuyingPrice'] = currentPrice
            }

            if (null !== previousPrice) {
                station[(action.transactionType === TRANSACTION_TYPE_SELL) ? 'previousSellingPrice' : 'previousBuyingPrice'] = previousPrice
            }
          
            return {
                loading: false,
                item: newItem,
                error: ''
            };
        case FETCH_ITEM_DETAIL_PRICES_FAILURE:
            return {
                loading: false,
                station: [],
                error: action.payload
            };
        case CLEAR_ITEM_DETAIL:
            return {
                loading: false,
                item: {
                    imgPath: null,
                    stations: [],
                    type: {
                        name: null,
                        subCategory: {
                            name: null,
                            category: {
                                name: null
                            }
                        }
                    }
                },
            }
        case SEARCH_ITEM_DETAIL:
            return {
                ...state,
                search: action.payload
            }
        case SELECT_STATION_DETAIL:
            return {
                ...state,
                selectStation: action.payload
            }
        default:
            return state;
    }
};

export default ItemDetailReducer;