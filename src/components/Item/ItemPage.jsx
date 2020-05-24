import React, { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { Grid }  from '@material-ui/core';
import { fetchItems, searchItem } from '../../actions/ItemActions';
import ItemTable from './ItemTable';
import SearchForm from '../Search/SearchForm';

const headCells = [
    { id: 'image', numeric: false, disablePadding: false, label: '' },
    { id: 'name', numeric: false, disablePadding: false, label: 'Name' },
    { id: 'category', numeric: false, disablePadding: false, label: 'Category' },
    { id: 'subCategory', numeric: false, disablePadding: false, label: 'Sub Category' },
    { id: 'type', numeric: false, disablePadding: false, label: 'Type' },
    { id: 'action', numeric: false, disablePadding: false, label: '' },
  ];

function ItemPage() {
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(fetchItems());
    }, [])

    const searchHandler = (event) => {
        dispatch(searchItem(event.target.value));
    }

    return (
        <>
            <Grid container spacing={3}>
                <Grid item>
                    <SearchForm searchHandler={searchHandler}/>
                </Grid>
                <Grid item xs={12}>
                    <ItemTable headCells={headCells}/>
                </Grid>
            </Grid>
        </>
    )
}

export default ItemPage;