import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Grid, Typography, makeStyles, Avatar, Box }  from '@material-ui/core';
import { useParams } from 'react-router-dom';
import SearchForm from '../Search/SearchForm';
import { clearItemDetail, fetchItemDetail, searchItemDetail } from '../../actions/ItemDetailActions';
import ItemDetailTable from './ItemDetailTable';
import ItemBreadcrumbs from '../Breadcrumbs/ItemBreadcrumbs';
import BackButton from '../Button/BackButton';
import ItemAvatar from '../Avatar/ItemAvatar';


const headCells = [
    { id: 'name', numeric: false, disablePadding: false, label: 'Name' },
    { id: 'sellpriceevo', numeric: false, disablePadding: false, label: 'Sell Price Evo.' },
    { id: 'currentSellingPrice', numeric: true, disablePadding: false, label: 'Sell Price' },
    { id: 'buypriceevo', numeric: false, disablePadding: false, label: 'Buy Price Evo.' },
    { id: 'currentBuyingPrice', numeric: true, disablePadding: false, label: 'Buy Price' },
    { id: 'action', numeric: false, disablePadding: false, label: '' },
];

const useStyles = makeStyles((theme) => ({
    section1: {
        margin: theme.spacing(0,0,4,0),
    },
    avatar: {
        width: theme.spacing(10),
        height: theme.spacing(10),
    },
}));

function ItemDetailPage() {
    let { id } = useParams();
    const classes = useStyles();
    const dispatch = useDispatch();
    const item = useSelector(state => state.itemDetail.item);
    
    useEffect(() => {
        dispatch(fetchItemDetail(id));
        return () => {
            dispatch(clearItemDetail());
        }
    }, [id])

    const searchHandler = (event) => {
        dispatch(searchItemDetail(event.target.value));
    }

    return (
        <>
            <BackButton/>
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Typography variant="h3">{item.name}</Typography>
                <ItemAvatar item={item} className={classes.avatar}/>
            </Box>
            <ItemBreadcrumbs item={item}/>
            <Typography variant="body1" className={classes.section1}>
                {item.description}
            </Typography>
            <Grid container spacing={3}>
                <Grid item>
                    <SearchForm searchHandler={searchHandler}/>
                </Grid>
                <Grid item xs={12}>
                    <ItemDetailTable headCells={headCells}/>
                </Grid>
            </Grid>
        </>
    )
}

export default ItemDetailPage;