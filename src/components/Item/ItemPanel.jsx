import React from 'react';
import { Grid }  from '@material-ui/core';
import SearchForm from '../Search/SearchForm';
import ItemChart from './ItemChart';
import ItemInfo from './ItemInfo';

function ItemPanel({item}) {

    return (
        <>
            <Grid item>
                <SearchForm/>
            </Grid>
            {item ?
                <>
                    <ItemInfo name={item.name} description={item.description}/> 
                    <ItemChart dataChartPrice={item.dataChartPrice}/>
                </>
            : null}
        </>
    )
}

export default ItemPanel;