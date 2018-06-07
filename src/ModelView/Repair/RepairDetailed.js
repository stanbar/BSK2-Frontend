import React from 'react';
import {
    ListItem,
    ListItemText,
} from '@material-ui/core';
import {RepairProps} from './Repair'

export default (props: RepairProps) =>
    <ListItem button>
        <ListItemText primary={props.data.mechanic.subject.login}/>
        <ListItemText primary={props.data.car.brand + " " +props.data.car.model}/>
    </ListItem>