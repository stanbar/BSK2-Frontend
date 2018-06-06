import React, {Component, Fragment} from 'react';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import Form from '../Form'

export default class extends Component {
    state = {
        open: false,
    };

    handleSubmit = () => {
        const {
            form} = this.state;
        this.setState({
            open: false,

            form: {
                brand: '',
                model: ''
            }
        });
        this.props.onCreate({
            ...form,
            id: form.brand.toLocaleLowerCase().replace(/ /g, '-')
        })
    };

    render() {


        return (
            <Fragment>
                <Button variant="fab" color="inherit" aria-label="add" onClick={() => this.setState({open: false})}>
                    <AddIcon/>
                </Button>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Car</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Create new car
                        </DialogContentText>
                        <Form
                            brands={this.props.brands}/>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => this.setState({open: false})} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={this.handleSubmit} color="primary" variant="raised">
                            Create
                        </Button>
                    </DialogActions>
                </Dialog>
            </Fragment>
        )
    }
}
