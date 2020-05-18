import React from 'react';
import { 
    Grid,
    Card,
    CardContent,
    Typography,
}  from '@material-ui/core';

function ItemInfo({name, description}) {
    return (
        <Grid item>
            <Card variant="outlined">
                <CardContent>
                    <Typography variant="h4" gutterBottom>
                        {name}
                    </Typography>
                    <Typography variant="body1">
                        {description}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    )
}

export default ItemInfo;