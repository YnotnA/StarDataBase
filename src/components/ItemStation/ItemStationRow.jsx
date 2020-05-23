import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Avatar from '@material-ui/core/Avatar';
import Credit from '../Credit/Credit';
import { LineChart, Line, YAxis } from 'recharts';
import { fetchItemPricesByStation, selectItemStation } from '../../actions/ItemStationActions';
import { Button, makeStyles, Drawer, Box } from '@material-ui/core';
import ItemInfo from './ItemInfo';

const useStyles = makeStyles({
    drawer: {
      width: 400,
    }
});

function ItemStationRow({ item }) {
    const classes = useStyles()
    const dispatch = useDispatch();
    const station = useSelector(state => state.itemsStation.station);
    const [drawer, setDrawer] = useState(false)
    
    useEffect(() => {
        dispatch(fetchItemPricesByStation(station.id, item.id))    
    }, [])

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
        dispatch(selectItemStation(item));
        setDrawer(open);
    };

    return (
        <>
            <TableRow hover>
                <TableCell>
                    <Avatar src={(null !== item.imgPath)  ? `${process.env.REACT_APP_IMG_URI}${item.imgPath}` : item.imgPath}></Avatar>
                </TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.type.subCategory.name}</TableCell>
                <TableCell>{item.type.name}</TableCell>
                <TableCell>
                    {item.prices !== undefined && item.prices.length > 1 ?
                        <LineChart width={100} height={30} data={item.prices}>
                            <Line type="monotone" dataKey="value" stroke="#8884d8" strokeWidth={2} dot={false} isAnimationActive={false} />
                            <YAxis type="number" hide={true} domain={['auto', 'auto']} />
                        </LineChart>
                    : null}
                </TableCell>
                <TableCell align="right">
                    <Credit value={item.currentSellingPrice} previousValue={item.previousSellingPrice}/>
                </TableCell>
                <TableCell align="right">
                    <Credit value={item.currentBuyingPrice} previousValue={item.previousBuyingPrice}/>
                </TableCell>
                <TableCell align="right">
                    <Button variant="contained" color="primary" onClick={toggleDrawer(true)}>Show</Button>
                </TableCell>
            </TableRow>
            <Drawer anchor={"right"} open={drawer} onClose={toggleDrawer(false)}>
                <Box
                    className={classes.drawer}
                    role="presentation"
                    onClick={toggleDrawer(false)}
                    onKeyDown={toggleDrawer(false)}
                >
                    <ItemInfo item={item}/>
                </Box>
            </Drawer>
        </>
    )
}

export default ItemStationRow;