import React from 'react';
import { Breadcrumbs, Typography } from '@material-ui/core';

function ItemBreadcrumbs({ item }) {
    return (
        <Breadcrumbs aria-label="breadcrumb" gutterBottom>
            <Typography variant="caption">{item.type.subCategory.category.name}</Typography>
            <Typography variant="caption">{item.type.subCategory.name}</Typography>
            <Typography variant="caption" color="textPrimary">{item.type.name}</Typography>
        </Breadcrumbs>
    )
}

export default ItemBreadcrumbs;