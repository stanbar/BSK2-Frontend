import React from 'react';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    List,
    ListItem,
    ListItemText,
    DialogTitle,
} from '@material-ui/core';

type RoleOption = {
    id : number,
    name : string,
    description : string
}
type PickRoleDialogProps = {
    open:boolean,
    roles:Array<RoleOption>,
    onRoleSelected : Function
}
export default (props : PickRoleDialogProps) =>
    <Dialog
        open={props.open}
        aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Your roles</DialogTitle>
        <DialogContent>
            <DialogContentText>
                Pick role for current session
            </DialogContentText>

            <List component="ul">
                {props.roles.map(({id, name}) =>
                    <ListItem
                        key={id}
                        button
                        onClick={() => props.onRoleSelected(id)}>
                        <ListItemText primary={name}/>
                    </ListItem>
                )}
            </List>

        </DialogContent>
        <DialogActions>
            <Button onClick={this.handleToggle} color="primary">
                Cancel
            </Button>
        </DialogActions>
    </Dialog>
