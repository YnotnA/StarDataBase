import React from 'react';
import { useHistory } from 'react-router-dom'
import { Button } from '@material-ui/core';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

function BackButton() {
    const history = useHistory();
    return (
        <Button color="inherit" onClick={() => history.goBack()}><ArrowBackIosIcon/>Back</Button>
    )
}

export default BackButton;