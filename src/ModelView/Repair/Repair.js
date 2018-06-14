import React from 'react';
import {
    ListItem,
    ListItemText,
} from '@material-ui/core';
import {Mechanic} from '../Mechanic/Mechanic'
import {Car} from '../Car/Car'

export type Repair = {
    id: number,
    mechanic: Mechanic,
    car: Car
}

export type RepairProps = {
    data: Repair
}
export default (props: RepairProps) =>
    <ListItem button onClick={props.onClick}>
        <ListItemText primary={props.data.mechanic.firstName + " " + props.data.mechanic.lastName}/>
        <ListItemText primary={props.data.car.brand + " " + props.data.car.model}/>
    </ListItem>