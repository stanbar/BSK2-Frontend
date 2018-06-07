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

export default (subject: Subject) =>
    <ListItem button>
        <ListItemText primary="Subject"/>
        <ListItemText primary={subject.id}/>
        <ListItemText primary={subject.login}/>
    </ListItem>