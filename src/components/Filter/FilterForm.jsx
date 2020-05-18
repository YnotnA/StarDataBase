import React from 'react';
import {useDispatch} from "react-redux";
import {searchItem} from "../../actions/ItemActions";
import { TextField, InputAdornment, FormControl, FormLabel, FormGroup, FormControlLabel, Checkbox, Paper, Grid, Card, CardContent} from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import SearchIcon from '@material-ui/icons/Search';


function FilterForm() {
    /*const dispatch = useDispatch();

    const searchHandler = (event) => {
        dispatch(searchItem(event.target.value));
    }*/

    const top100Films = [
        {
            'title': 'pipou'
        },
        {
            'title': 'Jean'
        }
        
    ]

    const handleChange = (event, newValue) => {
        console.log(newValue)
    }

    return (
        <Grid item>
        <Autocomplete
            multiple
            id="tags-standard"
            options={top100Films}
            getOptionLabel={(option) => option.title}
            onChange={handleChange}
            renderInput={(params) => (
            <TextField
                {...params}
                variant="standard"
                label="Type"
                placeholder="Types"
            />
            )}
        />
        </Grid>
    )
}

export default FilterForm;