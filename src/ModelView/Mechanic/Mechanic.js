import React from 'react';
import {
    ListItem,
    ListItemText,
} from '@material-ui/core';
import {Subject} from '../Subject/Subject'

export type Mechanic = {
    id: number,
    subject: Subject,
    firstName: string,
    lastName: string
}
export type MechanicProps = {
    data: Mechanic
}
export default (props : MechanicProps) =>
    <ListItem button>
        <ListItemText primary={props.data.subject.login}/>
        <ListItemText primary={props.data.firstName + '-' + props.data.lastName}/>
    </ListItem>