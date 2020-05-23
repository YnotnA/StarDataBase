import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import { TrendingDown, TrendingUp, TrendingFlat } from '@material-ui/icons';
import { red, green } from '@material-ui/core/colors';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    moneyImage: {
        width: 20
    }
}));

function Credit({value, previousValue = null}) {
    const classes = useStyles();

    const trendingIcon = () => {
        previousValue = (null === previousValue) ? value : previousValue;

        if (value < previousValue) {
            return <TrendingDown style={{ color: red[500] }}/>;
        } else if (value > previousValue) {
            return <TrendingUp style={{ color: green[500] }}/>
        }

        return <TrendingFlat/>       
    }

    return ( 
        <Box className={classes.moneyFont} display="flex" alignItems="center" justifyContent="flex-end">
            {value !== undefined ?
                <>
                <Typography variant="h6">
                    {value}
                </Typography>
                    <img className={classes.moneyImage} src={`${process.env.PUBLIC_URL}/img/money.png`} alt="Credit"/>{trendingIcon()}
                </>
            : <Typography variant="h6">N/A</Typography>}
        </Box>
    )
}

export default Credit;