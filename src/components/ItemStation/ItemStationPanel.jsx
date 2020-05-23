import React from 'react';
import { Grid }  from '@material-ui/core';
import SearchForm from '../Search/SearchForm';
import ItemChart from './ItemChart';
import ItemInfo from './ItemInfo';
import { useDispatch } from 'react-redux';
import { searchItemStation } from '../../actions/ItemStationActions';

function ItemStationPanel({item}) {
    const dispatch = useDispatch();

    const searchHandler = (event) => {
        dispatch(searchItemStation(event.target.value));
    }

    return (
        <>
            <Grid item>
                <SearchForm searchHandler={searchHandler}/>
            </Grid>
            {item ?
                <>
                    <ItemInfo item={item}/> 
                    {item.dataChartPrice !== undefined ?
                        <ItemChart dataChartPrice={item.dataChartPrice}/>
                    : null}
                </>
            : null}
        </>
    )
}

export default ItemStationPanel;