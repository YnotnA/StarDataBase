import {
    FETCH_ITEMS_FAILURE,
    FETCH_ITEMS_REQUEST,
    FETCH_ITEMS_SUCCESS,
    SEARCH_ITEM,
    SELECT_ITEM,
} from "../actions/ItemActions";

const ItemReducer = (state = {items: [], loading: false}, action) => {
    switch (action.type) {
        case FETCH_ITEMS_REQUEST:
            return {
                ...state,
                loading: true
            };
        case FETCH_ITEMS_SUCCESS:
            return {
                loading: false,
                items: action.payload,
                error: ''
            };
        case FETCH_ITEMS_FAILURE:
            return {
                loading: false,
                items: [],
                error: action.payload
            };
        case SEARCH_ITEM:
            return {
                ...state,
                search: action.payload
            }
        case SELECT_ITEM:
            return {
                ...state,
                selectItem: action.payload
            }
        default:
            return state;
    }
};

export default ItemReducer;