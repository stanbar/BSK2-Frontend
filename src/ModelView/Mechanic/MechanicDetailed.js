import React from 'react';
import {
    ListItem,
    ListItemText,
} from '@material-ui/core';

import {MechanicProps} from './Mechanic'

export default (props : MechanicProps) =>
    <ListItem button>
        <ListItemText primary={props.data.subject.login}/>
        <ListItemText primary={props.data.firstName + '-' + props.data.lastName}/>
    </ListItem>