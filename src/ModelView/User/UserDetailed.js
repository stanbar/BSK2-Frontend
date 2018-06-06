import React, {Fragment} from 'react';
import {User} from './User'

import {
    List,
    ListItem,
    ListItemText,
    Typography,
    Paper
} from '@material-ui/core';

export default (user: User) =>
    <Paper>

        <Typography variant="headline">Login</Typography>
        <Typography variant="subheading">{user.subject.login}</Typography>

        <Typography variant="headline">Name</Typography>
        <Typography variant="subheading">{user.firstName} {user.lastName}</Typography>

        <Typography variant="headline">PESEL</Typography>
        <Typography variant="subheading">{user.PESEL}</Typography>

        <Typography variant="headline">DriverLicence</Typography>
        <Typography variant="subheading">{user.driverLicence}</Typography>

    </Paper>

