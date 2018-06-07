// @flow
import React from 'react';
import {
    ListItem,
    ListItemText,
} from '@material-ui/core';
import type {Subject} from "../Subject/Subject";


export type User = {
    id: number,
    subject: Subject,
    PESEL: string,
    firstName: string,
    lastName: string,
    driverLicence: string
}
export type UserProps = {
    data: User,
    onClick: Function
}
export default (props: UserProps) =>
    <ListItem button onClick={props.onClick}>
        <ListItemText inset primary="User"/>
        <ListItemText inset primary={props.data.id}/>
        <ListItemText primary={props.data.firstName}/>
        <ListItemText primary={props.data.lastName}/>
        <ListItemText primary={props.data.subject.login}/>
    </ListItem>