// @flow
import React, {Component} from 'react';
import {
    ListItem,
    ListItemText,
    ListItemSecondaryAction,
    IconButton
} from '@material-ui/core';
import {AddCircle} from '@material-ui/icons'

import AddNewRentDialog from '../Rent/AddNewRentDialog'

export type Car = {
    brand: string,
    model: string,
    price: number
}
export type CarProps = {
    data: Car
}

export default class extends Component {

    state = {
        openNewRent: false
    };

    onRentCarClick = () => {
        this.setState(
            {openNewRent: true}
        )
    };
    onCancelClicked = () => {
        this.setState(
            {openNewRent: false}
        )
    };

    hideDialog = () => {
        this.setState(
            {openNewRent: false}
        )
    };

    render() {
        return (
            <div>
                <ListItem button onClick={this.props.onClick}>
                    <ListItemText primary={this.props.data.brand}/>
                    <ListItemText primary={this.props.data.model}/>
                    <ListItemSecondaryAction>
                        <IconButton aria-label="Rent" onClick={this.onRentCarClick}>
                            <AddCircle/>
                        </IconButton>
                    </ListItemSecondaryAction>
                </ListItem>
                <AddNewRentDialog hideDialog={this.hideDialog} open={this.state.openNewRent} car={this.props.data}/>
            </div>
        )
    }


}