import {
    /*FETCH_ITEMS_FAILURE,*/
    FETCH_ITEMS_REQUEST,
    FETCH_ITEMS_SUCCESS,
    SEARCH_ITEM,
    SELECT_ITEM
} from "./ItemTypes";

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

/*const fetchItemsFailure = error => {
    return {
        type: FETCH_ITEMS_FAILURE,
        payload: error
    }
};*/


export const fetchItems = () => {
    return (dispatch) => {
        dispatch(fetchItemsRequest);

        const items = [
            {
                id: '1',
                name: 'Ajatite ore',
                description: 'Potentially holds goodies.',
                image: '/img/ajatite_ore.png',
                rank: 'worthless',
                type: 'ore',
                prices: [],
                updatedAt: '2012-04-28T18:25:43.511Z'
            },
            {
                id: '2',
                name: 'Ajatite',
                description: 'Potentially holds goodies.',
                image: '/img/ajatite.png',
                rank: 'worthless',
                type: 'refined ore',
                prices: [
                    {
                        price: 0.77,
                        date: "2020-05-15T18:25:43.511Z"
                    }
                ],
                updatedAt: '2020-05-15'
            },
            {
                id: '3',
                name: 'Bastium',
                description: 'Brown as dirt and just about as common.',
                image: '/img/bastium.png',
                rank: 'low',
                type: 'refined ore',
                prices: [
                    {
                        price: 6,
                        date: "2020-05-15T18:25:43.511Z"
                    },
                    {
                        price: 10,
                        date: "2020-05-17T18:25:43.511Z"
                    }
                    ,
                    {
                        price: 12,
                        date: "2020-05-17T20:25:43.511Z"
                    }
                ],
                updatedAt: '2020-05-16T18:25:43.511Z'
            },
            {
                id: '4',
                name: 'Arkanium',
                description: 'Dark emerald green ore like that of a vipers ichor.',
                image: '/img/arkanium.png',
                rank: 'rare',
                type: 'refined ore',
                prices: [
                    {
                        price: 100,
                        date: "2020-05-15T18:25:43.511Z"
                    },
                    {
                        price: 130,
                        date: "2020-05-16T17:25:43.511Z"
                    },
                    {
                        price: 160,
                        date: "2020-05-17T18:25:43.511Z"
                    }
                ],
                updatedAt: '2020-05-16T18:25:43.511Z'
            }
        ];

        items.map(item => {
            item.prices.sort((a, b) => {
                a = new Date(a.date).getTime();
                b = new Date(b.date).getTime();
                   return b < a ? 1 : -1;
                });
            let currentPrice = (item.prices[item.prices.length - 1] !== undefined) ? item.prices[item.prices.length - 1].price : 0;
            item['currentPrice'] = currentPrice
            item['previousPrice'] = (item.prices[item.prices.length - 2] !== undefined) ? item.prices[item.prices.length - 2].price : null;
            item['dataChartPrice'] = [{
                "id": item.name,
                "color": "#467fcf",
                "data": Object.keys(item.prices).map(function(name){
                    return {
                        x: new Date(item.prices[name]['date']),
                        y: item.prices[name]['price']
                    };
                })   
                
                /*[...Object.keys(item.prices).map(function(name){
                    return {
                        x: new Date(item.prices[name]['date']),
                        y: item.prices[name]['price']
                    };
                }), {x: new Date(), y: currentPrice}]  */
            }]
            
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
