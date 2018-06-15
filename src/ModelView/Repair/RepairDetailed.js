import React from 'react';
import {
    Typography,
} from '@material-ui/core';
import {RepairProps} from './Repair'

export default (props: RepairProps) =>
    <div>
        <Typography variant="headline">Login</Typography>
        <Typography>{props.data.mechanic.subject.login}</Typography>
        <br/>
        <Typography variant="headline">Car</Typography>
        <Typography variant="subheading">Brand</Typography>
        <Typography>{props.data.car.brand}</Typography>
        <br/>
        <Typography variant="subheading">Model</Typography>
        <Typography>{props.data.car.model}</Typography>
    </div>