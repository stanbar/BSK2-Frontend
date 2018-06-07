import React from 'react';
import {
    ListItem,
    ListItemText,
} from '@material-ui/core';

export type Permission = {
    permission: string
}

export type Role = {
    id: number,
    name: string,
    description: string,
    permissions: Array<Permission>

}
export type RoleProps = {
    data: Role,
    onClick: Function
}
export default (props: RoleProps) =>
    <ListItem button onClick={props.onClick}>
        <ListItemText primary={props.data.id}/>
        <ListItemText primary={props.data.name}/>
    </ListItem>

