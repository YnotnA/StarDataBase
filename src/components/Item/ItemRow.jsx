import React, { useState } from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { useDispatch } from 'react-redux';
import { selectItem } from '../../actions/ItemActions';
import { Button, makeStyles, Drawer, Box, ButtonGroup } from '@material-ui/core';
import ItemInfo from './ItemInfo';
import { Link as RouterLink } from 'react-router-dom';
import ItemAvatar from '../Avatar/ItemAvatar';

const useStyles = makeStyles((theme) =>({
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

function ItemRow({ item }) {
    const classes = useStyles()
    const dispatch = useDispatch()
    const [drawer, setDrawer] = useState(false)
    
    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
        dispatch(selectItem(item));
        setDrawer(open);
    };

    return (
        <>
            <TableRow hover>
                <TableCell>
                    <ItemAvatar item={item}/>
                </TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.type.subCategory.category.name}</TableCell>
                <TableCell>{item.type.subCategory.name}</TableCell>
                <TableCell>{item.type.name}</TableCell>
                <TableCell align="right">
                    <ButtonGroup size="small" aria-label="small outlined button group" className={classes.button}>
                        <Button variant="contained" color="primary" component={RouterLink} to={`/StarDataBase/item/${item.id}`}>Station Prices</Button>
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
                    <ItemInfo item={item}/>
                </Box>
            </Drawer>
        </>
    )
}

export default ItemRow;