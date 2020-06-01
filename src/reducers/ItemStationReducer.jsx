import {
    FETCH_ITEMS_STATION_REQUEST,
    FETCH_ITEMS_STATION_SUCCESS,
    FETCH_ITEMS_STATION_FAILURE,
    FETCH_ITEM_PRICES_STATION_REQUEST,
    FETCH_ITEM_PRICES_STATION_SUCCESS,
    CLEAR_ITEMS_STATION,
    SELECT_ITEM_STATION,
    SEARCH_ITEM_STATION,
    FETCH_ITEM_PRICES_STATION_FAILURE,
    COMBINE_SERIES_CHART,
} from "../actions/ItemStationActions";
import moment from 'moment';

const clone = require('rfdc')()

const ItemStationReducer = (
        state = {
                station: {
                    items:[]
                },
                loading: false,
                search: null,
                seriesChart: [],
                error: null,
            }
        , action
    ) => {
    switch (action.type) {
        case FETCH_ITEMS_STATION_REQUEST:
            return {
                ...state,
                loading: true
            };
        case FETCH_ITEMS_STATION_SUCCESS:
            return {
                ...state,
                loading: false,
                station: action.payload,
                error: null
            };
        case FETCH_ITEMS_STATION_FAILURE:
            return {
                loading: false,
                station: [],
                error: action.payload
            };
        case FETCH_ITEM_PRICES_STATION_REQUEST:
            return {
                ...state,
                loading: true
            };
        case FETCH_ITEM_PRICES_STATION_SUCCESS:
            const newStation = clone(state.station)
            let item = newStation.items.find(item => item.id === action.itemId);
            
            action.prices.map(price => {
                price.value = parseFloat(price.value)
                return price
            })

            item[`${action.transactionType}Prices`] = action.prices
        
            item[`${action.transactionType}DataPrice`] = {
                name: item.name,
                data: Object.keys(action.prices).map(function(name){
                    return [parseInt(action.prices[name]['date']), action.prices[name]['value']];
                })
            }

            return {
                ...state,
                loading: false,
                station: newStation,
            };
        case FETCH_ITEM_PRICES_STATION_FAILURE:
            return {
                loading: false,
                station: [],
                error: action.payload
            };
        case CLEAR_ITEMS_STATION:
            return {
                loading: false,
                station: {
                    items: []
                },
                seriesChart: [],
            }
        case SEARCH_ITEM_STATION:
            return {
                ...state,
                search: action.payload
            }
        case SELECT_ITEM_STATION:
            return {
                ...state,
                selectItem: action.payload
            }
        case COMBINE_SERIES_CHART:
            let combinedSerie = []
            const items = state.station.items
            const newItems = clone(items)

            newItems.map(item => {
                if (item.sellDataPrice !== undefined && item.sellDataPrice.data.length > 0)  {
                    item.sellDataPrice.data = [...item.sellDataPrice.data, [moment().valueOf(), parseFloat(item.currentSellingPrice)]]
                    combinedSerie = [...combinedSerie, item.sellDataPrice]
                }
                return item
            })
            return {
                ...state,
                seriesChart: combinedSerie
            }
        default:
            return state;
    }
};

export default ItemStationReducer;