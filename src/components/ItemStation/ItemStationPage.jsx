import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Grid, Typography }  from '@material-ui/core';
import ItemStationCharts from './ItemStationCharts';
import { useParams } from 'react-router-dom';
import { fetchItemsByStation, clearItemsStation, searchItemStation } from '../../actions/ItemStationActions';
import ItemStationTable from './ItemStationTable';
import SearchForm from '../Search/SearchForm';
import BackButton from '../Button/BackButton';

const headCells = [
    { id: 'image', numeric: false, disablePadding: false, label: '' },
    { id: 'name', numeric: false, disablePadding: false, label: 'Name' },
    { id: 'subCategory', numeric: false, disablePadding: false, label: 'Sub Category' },
    { id: 'type', numeric: false, disablePadding: false, label: 'Type' },
    { id: 'sellpriceevo', numeric: false, disablePadding: false, label: 'Sell Price Evo.' },
    { id: 'currentSellingPrice', numeric: true, disablePadding: false, label: 'Sell Price' },
    { id: 'buypriceevo', numeric: false, disablePadding: false, label: 'Buy Price Evo.' },
    { id: 'currentBuyingPrice', numeric: true, disablePadding: false, label: 'Buy Price' },
    { id: 'action', numeric: false, disablePadding: false, label: '' },
  ];

function ItemStationPage() {
    let { id } = useParams();
    const dispatch = useDispatch();
    const station = useSelector(state => state.itemsStation.station);
    
    useEffect(() => {
        dispatch(fetchItemsByStation(id));
        return () => {
            dispatch(clearItemsStation());
        }
    }, [id])

    const searchHandler = (event) => {
        dispatch(searchItemStation(event.target.value));
    }

    return (
        <>
            <BackButton/>
            <Typography variant="h3">
                {station.name}
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <ItemStationCharts/>
                </Grid>
            </Grid>
            <Grid container spacing={3}>
                <Grid item>
                    <SearchForm searchHandler={searchHandler}/>
                </Grid>
                <Grid item xs={12}>
                    <ItemStationTable headCells={headCells}/>
                </Grid>
            </Grid>
        </>
    )
}

export default ItemStationPage;