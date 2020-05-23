import React from 'react';
import { TextField, InputAdornment} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

function SearchForm({ searchHandler }) {
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