import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Credit from '../Credit/Credit';
import { LineChart, Line, YAxis } from 'recharts';
import { selectStationDetail } from '../../actions/ItemDetailActions';
import { Button, makeStyles, Drawer, Box, Link, ButtonGroup } from '@material-ui/core';
import StationInfo from './StationInfo';
import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    drawer: {
      width: 250,
      "@media (min-width: 500px)": {
        width: 400,
      }
    },
    button: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

function ItemDetailRow({ station }) {
    const classes = useStyles()
    const dispatch = useDispatch();
    const [drawer, setDrawer] = useState(false)

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
                <ButtonGroup size="small" aria-label="small outlined button group" className={classes.button}>
                    <Button variant="contained" color="primary" component={RouterLink} to={`/StarDataBase/station/${station.id}/items`}>Go to station</Button>
                    <Button variant="contained" color="primary" onClick={toggleDrawer(true)}>Show</Button>
                </ButtonGroup>
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