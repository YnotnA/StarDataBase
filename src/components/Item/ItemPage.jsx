import React, { useEffect } from 'react';
import { useDispatch } from "react-redux";
import { Grid }  from '@material-ui/core';
import { fetchItems, searchItem } from '../../actions/ItemActions';
import ItemTable from './ItemTable';
import SearchForm from '../Search/SearchForm';
import FilterForm from '../Filter/FilterForm';

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

    function applyFilter(combinedFilters) {
        dispatch(fetchItems(combinedFilters));
    }

    return (
        <>
            <Grid container spacing={3}>
                <Grid item md={3} xs={12}>
                    <SearchForm searchHandler={searchHandler}/>
                </Grid>
                <FilterForm applyFilter={applyFilter}/>
            </Grid>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <ItemTable headCells={headCells}/>
                </Grid>
            </Grid>
        </>
    )
}

export default ItemPage;