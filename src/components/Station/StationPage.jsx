import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Grid }  from '@material-ui/core';
import { fetchStations } from '../../actions/stationActions';
import StationPanel from './StationPanel';
import StationTable from './StationTable';

const headCells = [
    { id: 'name', numeric: false, disablePadding: false, label: 'Name' },
    { id: 'action', numeric: false, disablePadding: false, label: '' },
  ];

function StationPage() {
    const dispatch = useDispatch();
    const stations = useSelector(state => state.stations.stations);
    
    useEffect(() => {
        dispatch(fetchStations());
    }, [])

    return (
        <>
            <Grid container spacing={3}>
                <Grid item md={8} xs={12}>
                    <StationTable stations={stations} headCells={headCells}/>
                </Grid>
                <Grid container direction={'column'} spacing={3} item md={4} xs={12}>
                    <StationPanel/>
                </Grid>   
            </Grid>
        </>
    )
}

export default StationPage;