// @flow
import React from 'react';
import {
    ListItem,
    ListItemText,
} from '@material-ui/core';
import Car from "../Car/Car";
import User from "../User/User";

type Rent = {
    id: string,
    user: User,
    car: Car,
    startDate: string,
    endDate: string
}
type RentProps = {
    data: Rent
}
export default (props: RentProps) =>
    <ListItem button>
        <ListItemText primary={props.data.user.subject.login}/>
        <ListItemText primary={props.data.startDate + '-' + props.data.endDate}/>
    </ListItem>