import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Avatar from '@material-ui/core/Avatar';
import { useDispatch } from 'react-redux';
import { selectItem } from '../../actions/ItemActions';

function ItemRow({ item }) {
    const dispatch = useDispatch();
    
    function handleOnMouseEnter() {
        dispatch(selectItem(item));
    }
    
    return (
        <TableRow onMouseOver={handleOnMouseEnter} hover>
            <TableCell>
                <Avatar src={(null !== item.imgPath)  ? `${process.env.REACT_APP_IMG_URI}${item.imgPath}` : item.imgPath}></Avatar>
            </TableCell>
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.type.name}</TableCell>
            <TableCell>{item.rank}</TableCell>
        </TableRow>
    )
}

export default ItemRow;