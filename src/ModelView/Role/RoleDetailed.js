import React from 'react';
import {RoleProps} from './Role'

import {
    List,
    ListItem,
    ListItemText,
} from '@material-ui/core';

export default (props: RoleProps) =>
    <List component="nav">
        {props.data.permissions
            ?
            props.data.permissions.map(permission =>
                <ListItem button key={permission}>
                    <ListItemText primary={permission}/>
                </ListItem>)
            : <ListItem button key="permissionsEmpty">
                <ListItemText primary="No permissions"/>
            </ListItem>
        }
    </List>
