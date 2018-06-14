import React from 'react';
import {
    ListItem,
    ListItemText,
} from '@material-ui/core';

import {Role} from "../Role/Role";

export type SubjectRole = {
    role: Role
}
export type Subject = {
    id: number,
    login: string,
    subjectRoles: Array<SubjectRole>
}

export default (props) =>
    <ListItem button onClick={this.props.onClick}>
        <ListItemText primary="Subject"/>
        <ListItemText primary={props.data.id}/>
        <ListItemText primary={props.data.login}/>
    </ListItem>