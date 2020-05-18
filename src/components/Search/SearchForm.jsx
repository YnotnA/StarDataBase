import React from 'react';
import {useDispatch} from "react-redux";
import {searchItem} from "../../actions/ItemActions";
import { TextField, InputAdornment} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

function SearchForm() {
    const dispatch = useDispatch();

    const searchHandler = (event) => {
        dispatch(searchItem(event.target.value));
    }

    return (
        <TextField
            id="input-with-icon-textfield"
            label="Search"
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <SearchIcon />
                    </InputAdornment>
                ),
            }}
            fullWidth
            onChange={searchHandler}
        />
    )
}

export default SearchForm;