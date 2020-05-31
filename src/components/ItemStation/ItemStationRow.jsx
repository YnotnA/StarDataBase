import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Avatar from '@material-ui/core/Avatar';
import Credit from '../Credit/Credit';
import { LineChart, Line, YAxis } from 'recharts';
import { selectItemStation } from '../../actions/ItemStationActions';
import { Button, makeStyles, Drawer, Box, Link } from '@material-ui/core';
import ItemInfo from './ItemInfo';
import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles({
    drawer: {
      width: 250,
      "@media (min-width: 500px)": {
        width: 400,
      }
    }
});

function ItemStationRow({ itemId }) {
    const classes = useStyles()
    const dispatch = useDispatch();
    const item = useSelector(state => state.itemsStation.station.items.find(item => item.id === itemId));
    const [drawer, setDrawer] = useState(false)
    
    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
        dispatch(selectItemStation(item));
        setDrawer(open);
    };

    return (
        <>
            {undefined !== item ?
                <>
                    <TableRow hover>
                        <TableCell>
                            <Avatar src={(null !== item.imgPath)  ? `${process.env.REACT_APP_IMG_URI}${item.imgPath}` : item.imgPath}></Avatar>
                        </TableCell>
                        <TableCell>
                            <Link component={RouterLink} to={`/StarDataBase/item/${item.id}`} color="inherit">{item.name}</Link>      
                        </TableCell>
                        <TableCell>{item.type.subCategory.name}</TableCell>
                        <TableCell>{item.type.name}</TableCell>
                        <TableCell>
                            {item.sellPrices !== undefined && item.sellPrices.length > 1 ?
                                <LineChart width={100} height={30} data={item.sellPrices}>
                                    <Line type="monotone" dataKey="value" stroke="#8884d8" strokeWidth={2} dot={false} isAnimationActive={false} />
                                    <YAxis type="number" hide={true} domain={['auto', 'auto']} />
                                </LineChart>
                            : null}
                        </TableCell>
                        <TableCell align="right">
                            <Credit value={item.currentSellingPrice} previousValue={item.previousSellingPrice}/>
                        </TableCell>
                        <TableCell>
                            {item.buyPrices !== undefined && item.buyPrices.length > 1 ?
                                <LineChart width={100} height={30} data={item.buyPrices}>
                                    <Line type="monotone" dataKey="value" stroke="#8884d8" strokeWidth={2} dot={false} isAnimationActive={false} />
                                    <YAxis type="number" hide={true} domain={['auto', 'auto']} />
                                </LineChart>
                            : null}
                        </TableCell>
                        <TableCell align="right">
                            <Credit value={item.currentBuyingPrice} previousValue={item.previousBuyingPrice}/>
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
                            <ItemInfo item={item}/>
                        </Box>
                    </Drawer>
                </>
            : null }  
        </>
    )
}

export default ItemStationRow;