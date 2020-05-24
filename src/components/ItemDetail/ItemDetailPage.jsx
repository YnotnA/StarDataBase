import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Grid, Typography, Button, makeStyles, Avatar, Box }  from '@material-ui/core';
import { useParams } from 'react-router-dom';
import SearchForm from '../Search/SearchForm';
import { clearItemDetail, fetchItemDetail, searchItemDetail } from '../../actions/ItemDetailActions';
import ItemDetailTable from './ItemDetailTable';
import { Link as RouterLink } from 'react-router-dom';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ItemBreadcrumbs from '../Breadcrumbs/ItemBreadcrumbs';
import { useHistory } from 'react-router-dom'

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
    const history = useHistory();
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
            <Button color="inherit" onClick={() => history.goBack()}><ArrowBackIosIcon/>Back</Button>
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Typography variant="h3">{item.name}</Typography>
                <Avatar src={(null !== item.imgPath) ? `${process.env.REACT_APP_IMG_URI}${item.imgPath}` : item.imgPath} className={classes.avatar}></Avatar>
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