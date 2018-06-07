// @flow
import React from 'react';
import {
    ListItem,
    ListItemText,
} from '@material-ui/core';
import {CarProps} from './Car'

export default (props: CarProps) =>
    <ListItem button>
        <ListItemText primary={props.data.brand}/>
        <ListItemText primary={props.data.model}/>
        <ListItemText primary={props.data.price}/>
    </ListItem>