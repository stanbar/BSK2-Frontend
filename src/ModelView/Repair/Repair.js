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
    <ListItem button>
        <ListItemText primary={props.data.mechanic}/>
    </ListItem>