import React from 'react';
import {
    Typography,
} from '@material-ui/core';

import {MechanicProps} from './Mechanic'

export default (props : MechanicProps) =>
    <div>
        <Typography variant="headline">Login</Typography>
        <Typography>{props.data.subject.login}</Typography>
        <br/>
        <Typography variant="headline">First Name</Typography>
        <Typography>{props.data.firstName}</Typography>
        <br/>
        <Typography variant="headline">Last Name</Typography>
        <Typography>{props.data.lastName}</Typography>
    </div>