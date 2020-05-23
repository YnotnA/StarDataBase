import React from 'react';
import { Grid }  from '@material-ui/core';
import SearchForm from '../Search/SearchForm';
import ItemInfo from './ItemInfo';
import { useDispatch } from 'react-redux';
import { searchItem } from '../../actions/ItemActions';

function ItemPanel({item}) {
    const dispatch = useDispatch();

    const searchHandler = (event) => {
        dispatch(searchItem(event.target.value));
    }

    return (
        <>
            <Grid item>
                <SearchForm searchHandler={searchHandler}/>
            </Grid>
            {item ?
                <>
                    <ItemInfo item={item}/> 
                </>
            : null}
        </>
    )
}

export default ItemPanel;