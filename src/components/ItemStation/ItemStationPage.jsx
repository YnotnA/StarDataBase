import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Grid, Typography }  from '@material-ui/core';
import ItemPanel from './ItemStationPanel';
import ItemStationCharts from './ItemStationCharts';
import { useParams } from 'react-router-dom';
import { fetchItemsByStation, clearItemsStation } from '../../actions/ItemStationActions';
import ItemStationTable from './ItemStationTable';

const headCells = [
    { id: 'image', numeric: false, disablePadding: false, label: '' },
    { id: 'name', numeric: false, disablePadding: false, label: 'Name' },
    { id: 'type', numeric: false, disablePadding: false, label: 'Type' },
    { id: 'rank', numeric: false, disablePadding: false, label: 'Rank' },
    { id: 'priceevo', numeric: false, disablePadding: false, label: 'Price Evolution' },
    { id: 'currentPrice', numeric: true, disablePadding: false, label: 'Price' },
  ];

function ItemStationPage() {
    let { id } = useParams();
    const dispatch = useDispatch();
    const station = useSelector(state => state.itemsStation.station);
    const selectItem = useSelector(state => state.itemsStation.selectItem);
    
    useEffect(() => {
        dispatch(fetchItemsByStation(id));
        return () => {
            dispatch(clearItemsStation());
        }
    }, [id])

    return (
        <>
            <Typography variant="h3">
                {station.name}
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <ItemStationCharts/>
                </Grid>
            </Grid>
            <Grid container spacing={3}>
                <Grid item md={8} xs={12}>
                    <ItemStationTable headCells={headCells}/>
                </Grid>
                <Grid container direction={'column'} spacing={3} item md={4} xs={12}>
                    <ItemPanel item={selectItem}/>
                </Grid>   
            </Grid>
        </>
    )
}

export default ItemStationPage;