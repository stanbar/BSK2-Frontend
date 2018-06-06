// @flow
import React from 'react';
import {
    ListItem,
    ListItemText,
} from '@material-ui/core';

type Car = {
    brand: string,
    model: string,
    price: number
}
type CarProps = {
    data: Car
}

export default (props: CarProps) =>
    <ListItem button>
        <ListItemText primary={props.data.brand}/>
        <ListItemText primary={props.data.model}/>
    </ListItem>