import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Grid }  from '@material-ui/core';
import ItemPanel from './ItemPanel';
import { fetchItems } from '../../actions/ItemActions';
import ItemTable from './ItemTable';

const headCells = [
    { id: 'image', numeric: false, disablePadding: false, label: '' },
    { id: 'name', numeric: false, disablePadding: false, label: 'Name' },
    { id: 'category', numeric: false, disablePadding: false, label: 'Category' },
    { id: 'subCategory', numeric: false, disablePadding: false, label: 'Sub Category' },
    { id: 'type', numeric: false, disablePadding: false, label: 'Type' },
    { id: 'rank', numeric: false, disablePadding: false, label: 'Rank' },
  ];

function ItemPage() {
    const dispatch = useDispatch();
    const selectItem = useSelector(state => state.items.selectItem);
    
    useEffect(() => {
        dispatch(fetchItems());
    }, [])

    return (
        <>
            <Grid container spacing={3}>
                <Grid item md={8} xs={12}>
                    <ItemTable headCells={headCells}/>
                </Grid>
                <Grid container direction={'column'} spacing={3} item md={4} xs={12}>
                    <ItemPanel item={selectItem}/>
                </Grid>   
            </Grid>
        </>
    )
}

export default ItemPage;