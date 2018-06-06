// @flow
import React, {Component} from 'react';
import {
    ListItem,
    ListItemText,
} from '@material-ui/core';
import Role from "../Role/Role";
export type SubjectRole ={
    role: Role
}

export type Subject = {
    id: number,
    login: string,
    subjectRoles : Array<SubjectRole>
}
export type User = {
    id: number,
    subject: Subject,
    PESEL: string,
    firstName: string,
    lastName: string,
    driverLicence: string
}

export default (user: User) =>
    <ListItem button>
        <ListItemText primary="User"/>
        <ListItemText primary={user.id}/>
        <ListItemText primary={user.subject.login}/>
    </ListItem>