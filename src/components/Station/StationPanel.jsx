import React from 'react';
import { Grid }  from '@material-ui/core';
import SearchForm from '../Search/SearchForm';
import { searchStation } from '../../actions/stationActions';
import { useDispatch } from 'react-redux';

function StationPanel() {
    const dispatch = useDispatch();

    const searchHandler = (event) => {
        dispatch(searchStation(event.target.value));
    }

    return (
        <Grid item>
            <SearchForm searchHandler={searchHandler}/>
        </Grid>
    )
}

export default StationPanel;