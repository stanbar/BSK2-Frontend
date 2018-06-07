// @flow
import React from 'react';
import {
    ListItem,
    ListItemText,
} from '@material-ui/core';
import {RentProps}  from './Rent'

export default (props: RentProps) =>
    <ListItem button>
        <ListItemText primary={props.data.user.subject.login}/>
        <ListItemText primary={props.data.startDate + '-' + props.data.endDate}/>
        <ListItemText primary={props.data.car.brand + " " + props.data.car.model}/>
    </ListItem>