import React from 'react';
import { 
    Typography,
    makeStyles,
    Avatar,
    Box,
    Divider,
}  from '@material-ui/core';
import ItemBreadcrumbs from '../Breadcrumbs/ItemBreadcrumbs';
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

function ItemInfo({item}) {
    const classes = useStyles();
    
    return (
        <>
            <div className={classes.section1}>
                <Box display="flex" justifyContent="center">
                    <Avatar src={(null !== item.imgPath)  ? `${process.env.REACT_APP_IMG_URI}${item.imgPath}` : item.imgPath} className={classes.avatar}></Avatar>
                </Box>
                <Typography variant="h4">
                    {item.name}
                </Typography>
                <ItemBreadcrumbs item={item}/>
                <Typography gutterBottom color="textSecondary" variant="body2">
                    {item.description}
                </Typography>
                

            </div>
            <Divider variant="middle"/>
            <div className={classes.section1}>
                <Box display="flex" alignItems="center" justifyContent="space-between">
                    <Typography variant="h5">Selling price</Typography>
                    <Credit value={item.currentSellingPrice} previousValue={item.previousSellingPrice}/>
                </Box>  
                {item.dataChartPrice !== undefined ?
                    <ItemChart dataChartPrice={item.dataChartPrice}/>
                : null}
            </div>
            <Divider variant="middle"/>
            <div className={classes.section1}>
                <Box display="flex" alignItems="center" justifyContent="space-between">
                    <Typography variant="h5">Buying price</Typography>
                    <Credit value={item.currentBuyingPrice} previousValue={item.previousBuyingPrice}/>
                </Box>
            </div>
        </>
    )
}

export default ItemInfo;