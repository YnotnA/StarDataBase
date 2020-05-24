import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Credit from '../Credit/Credit';
import { LineChart, Line, YAxis } from 'recharts';
import { fetchItemSellPricesByStation, selectStationDetail, fetchItemBuyPricesByStation } from '../../actions/ItemDetailActions';
import { Button, makeStyles, Drawer, Box, Link } from '@material-ui/core';
import StationInfo from './StationInfo';
import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles({
    drawer: {
      width: 250,
      "@media (min-width: 500px)": {
        width: 400,
      }
    }
});

function ItemDetailRow({ station }) {
    const classes = useStyles()
    const dispatch = useDispatch();
    const item = useSelector(state => state.itemDetail.item);
    const [drawer, setDrawer] = useState(false)
    
    useEffect(() => {
        dispatch(fetchItemSellPricesByStation(station.id, item.id))    
        dispatch(fetchItemBuyPricesByStation(station.id, item.id))    
    }, [])

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
        dispatch(selectStationDetail(station));
        setDrawer(open);
    };

    return (
        <>
            <TableRow hover>
                <TableCell>
                    <Link component={RouterLink} to={`/StarDataBase/station/${station.id}/items`} color="inherit">{station.name}</Link>
                </TableCell>
                <TableCell>
                    {station.sellPrices !== undefined && station.sellPrices.length > 1 ?
                        <LineChart width={100} height={30} data={station.sellPrices}>
                            <Line type="monotone" dataKey="value" stroke="#8884d8" strokeWidth={2} dot={false} isAnimationActive={false} />
                            <YAxis type="number" hide={true} domain={['auto', 'auto']} />
                        </LineChart>
                    : null}
                </TableCell>
                <TableCell align="right">
                    <Credit value={station.currentSellingPrice} previousValue={station.previousSellingPrice}/>
                </TableCell>
                <TableCell>
                    {station.buyPrices !== undefined && station.buyPrices.length > 1 ?
                        <LineChart width={100} height={30} data={station.buyPrices}>
                            <Line type="monotone" dataKey="value" stroke="#8884d8" strokeWidth={2} dot={false} isAnimationActive={false} />
                            <YAxis type="number" hide={true} domain={['auto', 'auto']} />
                        </LineChart>
                    : null}
                </TableCell>
                <TableCell align="right">
                    <Credit value={station.currentBuyingPrice} previousValue={station.previousBuyingPrice}/>
                </TableCell>
                <TableCell align="right">
                    <Button size="small" variant="contained" color="primary" onClick={toggleDrawer(true)}>Show</Button>
                </TableCell>
            </TableRow>
            <Drawer anchor={"right"} open={drawer} onClose={toggleDrawer(false)}>
                <Box
                    className={classes.drawer}
                    role="presentation"
                    onClick={toggleDrawer(false)}
                    onKeyDown={toggleDrawer(false)}
                >
                    <StationInfo station={station}/>
                </Box>
            </Drawer>
        </>
    )
}

export default ItemDetailRow;