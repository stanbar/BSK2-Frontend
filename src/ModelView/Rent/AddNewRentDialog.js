import React, {Component} from 'react';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    TextField,
    Typography,
    DialogTitle,
} from '@material-ui/core';
import axios from 'axios'

type RoleOption = {
    id: number,
    name: string,
    description: string
}
type PickRoleDialogProps = {
    open: boolean,
    roles: Array<RoleOption>,
    onRoleSelected: Function
}
export default class extends Component {
    createRent = () => {
        //axios.post todo create rent
    };

    render() {
        return (
            <Dialog
                open={this.props.open}
                aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Create Rent</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Create new rent
                    </DialogContentText>
                    <Typography variant="headline">{this.props.car.brand + " " + this.props.car.model}</Typography>


                    <TextField
                        id="datetime-local"
                        label="From"
                        type="datetime-local"
                        defaultValue="2018-06-20T10:30"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <TextField
                        id="datetime-local"
                        label="To"
                        type="datetime-local"
                        defaultValue="2018-06-21T10:30"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />

                </DialogContent>
                <DialogActions>

                    <Button onClick={this.props.hideDialog} color="accent">
                        Cancel
                    </Button>
                    <Button onClick={this.createRent} color="primary">
                        Create
                    </Button>
                </DialogActions>
            </Dialog>
        )
    }
}
