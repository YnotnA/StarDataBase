import React, { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import { Grid }  from '@material-ui/core';
import ItemTable from './ItemTable';
import ItemPanel from './ItemPanel';
import ItemsChart from './ItemsChart';

function ItemPage() {
    const items = useSelector(state => state.items.items);
    const selectItemId = useSelector(state => state.items.selectItem);
    const [selectItem, setSelectItem] = useState();
    
    useEffect(() => {
        if (items && selectItemId) {
            setSelectItem(items.find(item => item.id === selectItemId))
        }
    }, [items, selectItemId])

    return (
        <>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <ItemsChart/>
                </Grid>
            </Grid>
            <Grid container spacing={3}>
                <Grid item md={8} xs={12}>
                    <ItemTable/>
                </Grid>
                <Grid container direction={'column'} spacing={3} item md={4} xs={12}>
                    <ItemPanel item={selectItem}/>
                </Grid>   
            </Grid>
        </>
    )
}

export default ItemPage;