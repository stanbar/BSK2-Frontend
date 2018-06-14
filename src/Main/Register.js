// @flow
import React, {Component, Fragment} from 'react';
import {TextField,Card, CardContent, Paper, Button, Typography, Input} from '@material-ui/core';
import PickRoleDialog from './Dialogs/PickRoleDialog'
import axios from "axios";

const styles = {
    card: {
        minWidth: 275,
    },
    Paper: {
        marginHorizontal: 'auto',
        padding: 20,
        marginTop: 10,
        marginBottom: 10,
        height: 500
    }
};
export default class extends Component {

    state = {
        login: undefined,
        password: undefined,
        firstName: undefined,
        lastName: undefined,
        driverLicence: undefined,
        PESEL: undefined
    };


    handleSingupClick = () => {

        axios.request({
            method: 'post',
            url: '/signup',
            params: {
                login: this.state.login,
                password: this.state.password,
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                driverLicence: this.state.driverLicence,
                PESEL: this.state.PESEL
            }
        }).then((response) => {
            console.log(response.data);
            this.props.onSignedIn();

        }).catch(function (error) {
            console.log(error);
        });
    };

    handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            this.handleSingupClick()
        }
    };

    render() {
        return (
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <Card>
                    <CardContent>
                        <Typography variant="headline">
                            Sign up
                        </Typography>
                        <br/>
                        <TextField
                            onChange={(e) => this.setState({login: e.target.value})}
                            label="Login"
                            inputProps={{
                                'aria-label': 'Description',
                            }}
                        />
                        <br/>
                        <TextField
                            onChange={(e) => this.setState({password: e.target.value})}
                            label='Password'
                            type='password'
                            inputProps={{
                                'aria-label': 'Description',
                            }}
                        />
                        <br/>
                        <TextField
                            onKeyPress={this.handleKeyPress}
                            onChange={(e) => this.setState({PESEL: e.target.value})}
                            label='PESEL'
                            inputProps={{
                                'aria-label': 'Description',
                            }}
                        />
                        <br/>
                        <TextField
                            onKeyPress={this.handleKeyPress}
                            onChange={(e) => this.setState({firstName: e.target.value})}
                            label='firstName'
                            inputProps={{
                                'aria-label': 'Description',
                            }}
                        />
                        <br/>
                        <TextField
                            onKeyPress={this.handleKeyPress}
                            onChange={(e) => this.setState({lastName: e.target.value})}
                            label='lastName'
                            inputProps={{
                                'aria-label': 'Description',
                            }}
                        />
                        <br/>
                        <TextField
                            onKeyPress={this.handleKeyPress}
                            onChange={(e) => this.setState({driverLicence: e.target.value})}
                            label='driverLicence'
                            inputProps={{
                                'aria-label': 'Description',
                            }}
                        />
                        <br/>
                        <Button style={{marginTop: 20}}
                                variant="outlined"
                                onClick={this.handleSingupClick}>
                            Signup
                        </Button>
                    </CardContent>
                </Card>
            </div>
        )
    }


}