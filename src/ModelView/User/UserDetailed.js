import React from 'react';
import {UserProps} from './User'

import {
    Typography,
    Paper
} from '@material-ui/core';

export default (props: UserProps) =>
    <Paper>
        <Typography variant="headline">Login</Typography>
        <Typography variant="subheading">{props.data.subject.login}</Typography>

        <Typography variant="headline">Name</Typography>
        <Typography variant="subheading">{props.data.firstName} {props.data.lastName}</Typography>

        <Typography variant="headline">PESEL</Typography>
        <Typography variant="subheading">{props.data.PESEL}</Typography>

        <Typography variant="headline">DriverLicence</Typography>
        <Typography variant="subheading">{props.data.driverLicence}</Typography>

    </Paper>

