import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    offset: theme.mixins.toolbar,
    title: {
        flexGrow: 1,
      },
  }))

function Header() {
    const classes = useStyles();
    return (
        <>
            <AppBar>
                <Container>
                    <Toolbar>
                        <Typography variant="h6" className={classes.title}>
                            Star-[Data]-Base
                        </Typography>
                        <Button component={RouterLink} to="/StarDataBase/stations" color="inherit">Stations</Button>
                        <Button component={RouterLink} to="/StarDataBase/items" color="inherit">Items</Button>
                    </Toolbar>
                </Container>  
            </AppBar>
            <div className={classes.offset} />
        </>
    )
}

export default Header;