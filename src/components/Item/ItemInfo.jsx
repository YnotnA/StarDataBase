import React from 'react';
import { 
    Grid,
    Card,
    CardContent,
    Typography,
}  from '@material-ui/core';
import ItemBreadcrumbs from '../Breadcrumbs/ItemBreadcrumbs';

function ItemInfo({item}) {
    return (
        <Grid item>
            <Card variant="outlined">
                <CardContent>
                    <Typography variant="h4">
                        {item.name}
                    </Typography>
                    <ItemBreadcrumbs item={item}/>
                    <Typography variant="body1">
                        {item.description}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    )
}

export default ItemInfo;