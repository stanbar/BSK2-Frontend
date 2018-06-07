import React from 'react';
import {
    Paper,
    List,
    Typography,
    ListItem,
    ListItemText,
} from '@material-ui/core';

import {RoleProps} from './Role'

export default (props: RoleProps) =>
    <div>
        <Typography variant="headline">ID</Typography>
        <Typography>{props.data.id}</Typography>
        <br/>
        <Typography variant="headline">Name</Typography>
        <Typography>{props.data.name}</Typography>
        <br/>
        <Typography variant="headline">Permissions</Typography>
        <br/>
        <List component="nav">
            {props.data.permissions
                ?
                props.data.permissions.map(permission =>
                    <ListItem key={permission.permission}>
                        <ListItemText primary={permission.permission}/>
                    </ListItem>)
                : <ListItem key="permissionsEmpty">
                    <ListItemText primary="No permissions"/>
                </ListItem>
            }
        </List>
    </div>