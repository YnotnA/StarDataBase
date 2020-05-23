import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import { TrendingDown, TrendingUp, TrendingFlat } from '@material-ui/icons';
import { red, green } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
    moneyFont: {
        fontSize: 20
    },
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
                    {value}<img className={classes.moneyImage} src={`${process.env.PUBLIC_URL}/img/money.png`} alt="Credit"/>{trendingIcon()}
                </>
            : 'N/A' }
        </Box>
    )
}

export default Credit;