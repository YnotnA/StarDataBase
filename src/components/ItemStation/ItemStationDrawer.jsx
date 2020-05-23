import React, { useEffect } from 'react';
import ItemChart from './ItemChart';
import ItemInfo from './ItemInfo';
import { Drawer, Box, makeStyles } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { selectItemStation } from '../../actions/ItemStationActions';

const useStyles = makeStyles({
    drawer: {
      width: 400,
    }
  });

function ItemStationDrawer({ item, open }) {  
    const classes = useStyles()
    const dispatch = useDispatch();
    
    useEffect(() => {
        toggleDrawer(open)
    }, [open])

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
        dispatch(selectItemStation(item));
    };
    
    return (
        <Drawer anchor={"right"} open={open} onClose={toggleDrawer(false)}>
            <Box
                className={classes.drawer}
                role="presentation"
                onClick={toggleDrawer(false)}
                onKeyDown={toggleDrawer(false)}
            >
                <ItemInfo item={item}/> 
                {item.dataChartPrice !== undefined ?
                    <ItemChart dataChartPrice={item.dataChartPrice}/>
                : null}
            </Box>
        </Drawer>
    )
}

export default ItemStationDrawer;