import React, { useState } from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Avatar from '@material-ui/core/Avatar';
import { useDispatch } from 'react-redux';
import { selectItem } from '../../actions/ItemActions';
import { Button, makeStyles, Drawer, Box } from '@material-ui/core';
import ItemInfo from './ItemInfo';

const useStyles = makeStyles({
    drawer: {
      width: 400,
    }
  });

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
                    <Avatar src={(null !== item.imgPath)  ? `${process.env.REACT_APP_IMG_URI}${item.imgPath}` : item.imgPath}></Avatar>
                </TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.type.subCategory.category.name}</TableCell>
                <TableCell>{item.type.subCategory.name}</TableCell>
                <TableCell>{item.type.name}</TableCell>
                <TableCell>{item.rank}</TableCell>
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

export default ItemRow;