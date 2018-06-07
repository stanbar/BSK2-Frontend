import React from 'react';
import {AppBar, Toolbar, Typography, Button} from '@material-ui/core';

export default ({user, onLoginClick, onLogoutClick}) =>
    <AppBar position="static">
        <Toolbar>
            <Typography variant="headline" color="inherit" style={{flex: 1}}>
                BSK2-Frontend
            </Typography>
            {user ?
                <Button color="inherit" onClick={onLogoutClick}>Logout</Button>
                : null
            }
        </Toolbar>
    </AppBar>
