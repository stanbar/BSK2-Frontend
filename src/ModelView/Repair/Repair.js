import React, {Component} from 'react';
import {
    ListItem,
    ListItemText,
} from '@material-ui/core';

export default props =>
    <ListItem button>
        <ListItemText primary={props.data.name}/>
    </ListItem>