import React, {Component} from 'react';
import {
    List,
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
    data: Role
}
export default (props: RoleProps) =>
    <ListItem button>
        <ListItemText primary={props.data.id}/>
        <ListItemText primary={props.data.name}/>
    </ListItem>

export class RoleDetailed extends Component {
    render() {
        return (
            <List component="nav">
                {data ?
                    data.map(item => <DataComponent key={item.id} data={item}/>)
                    : <ListItem button key="mainEmpty">
                        <ListItemText primary="Empty"/>
                    </ListItem>
                }
            </List>

        )
    }
}