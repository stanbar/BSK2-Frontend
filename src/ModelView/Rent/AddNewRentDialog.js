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
import {toast} from 'react-toastify';

export default class extends Component {
    state = {
        from: "2018-06-20T10:30",
        to: "2018-06-20T10:30"
    };

    async createRent() {
        const data = {
            userId: this.props.user.id,
            carId: this.props.car.id,
            to: this.state.to,
            from: this.state.from
        };
        console.log(data);
        try {
            toast.info('--> POST /rents');
            await axios.post('/rents', data);
            toast.info('<-- POST /rents');
        } catch (e) {
            toast.error('<--ERROR /rents ' + e);
        }
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
                        onChange={(e) => this.setState({from: e.target.value})}
                        id="datetime-local"
                        label="From"
                        type="datetime-local"
                        defaultValue="2018-06-20T10:30"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    />
                    <TextField
                        onChange={(e) => this.setState({to: e.target.value})}
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
                    <Button onClick={() => this.createRent()} color="primary">
                        Create
                    </Button>
                </DialogActions>
            </Dialog>
        )
    }
}
