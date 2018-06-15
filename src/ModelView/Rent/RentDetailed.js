// @flow
import React from 'react';
import {
    Typography
} from '@material-ui/core';
import {RentProps}  from './Rent'

export default (props: RentProps) =>
    <div>
        <Typography variant="headline">Login</Typography>
        <Typography>{props.data.user.subject.login}</Typography>
        <br/>
        <Typography variant="headline">From</Typography>
        <Typography>{props.data.startDate}</Typography>
        <br/>
        <Typography variant="headline">To</Typography>
        <Typography>{props.data.endDate}</Typography>
        <br/>
        <Typography variant="headline">Car</Typography>
        <Typography variant="subheading">Brand</Typography>
        <Typography>{props.data.car.brand}</Typography>
        <Typography variant="subheading">Model</Typography>
        <Typography>{props.data.car.model}</Typography>
    </div>