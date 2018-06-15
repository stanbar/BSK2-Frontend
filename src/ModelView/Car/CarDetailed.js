// @flow
import React from 'react';
import {
    Typography,
} from '@material-ui/core';
import {CarProps} from './Car'

export default (props: CarProps) =>
    <div>
        <Typography variant="headline">Brand</Typography>
        <Typography>{props.data.brand}</Typography>
        <br/>
        <Typography variant="headline">Model</Typography>
        <Typography>{props.data.model}</Typography>
        <br/>
        <Typography variant="headline">Model</Typography>
        <Typography>{props.data.price}</Typography>
    </div>