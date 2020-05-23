import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { Button, Typography } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';

function StationRow({ id, name }) {    
    return (
        <TableRow hover>
            <TableCell>
                <Typography>
                    {name}
                </Typography>
            </TableCell>
            <TableCell align="right">
                <Button 
                    variant="contained" 
                    component={RouterLink} 
                    to={`/StarDataBase/station/${id}/items`} 
                    color="primary"
                >
                    Show items prices
                </Button>
            </TableCell>
        </TableRow>
    )
}

export default StationRow;