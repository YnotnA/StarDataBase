import React from 'react';
import { 
    Typography,
    makeStyles,
    Box,
    Divider,
}  from '@material-ui/core';
import Credit from '../Credit/Credit';
import ItemChart from './ItemChart';

const useStyles = makeStyles((theme) => ({
    section1: {
      margin: theme.spacing(2),
    },
    avatar: {
        width: theme.spacing(15),
        height: theme.spacing(15),
        margin: theme.spacing(1)
    },
}));

function StationInfo({station}) {
    const classes = useStyles();
    
    return (
        <>
            <div className={classes.section1}>
                <Typography variant="h4">
                    {station.name}
                </Typography>
            </div>
            <Divider variant="middle"/>
            <div className={classes.section1}>
                <Box display="flex" alignItems="center" justifyContent="space-between">
                    <Typography variant="h5">Selling price</Typography>
                    <Credit value={station.currentSellingPrice} previousValue={station.previousSellingPrice}/>
                </Box>  
                {station.sellDataPrice !== undefined ?
                    <ItemChart dataPrice={station.sellDataPrice}/>
                : null}
            </div>
            <Divider variant="middle"/>
            <div className={classes.section1}>
                <Box display="flex" alignItems="center" justifyContent="space-between">
                    <Typography variant="h5">Buying price</Typography>
                    <Credit value={station.currentBuyingPrice} previousValue={station.previousBuyingPrice}/>
                </Box>
                {station.buyDataPrice !== undefined ?
                    <ItemChart dataPrice={station.buyDataPrice}/>
                : null}
            </div>
        </>
    )
}

export default StationInfo;