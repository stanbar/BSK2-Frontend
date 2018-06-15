import React, {Component, Fragment} from 'react';
import {TextField, Card, CardContent, Paper, Button, Typography, Input} from '@material-ui/core';
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
        login: 'stasbar',
        password: 'hardpassword',
        roles: [],
        openPickRoles: false
    };

    handleLoginClick = () => {

        axios.request({
            method: 'post',
            url: '/login',
            auth: {
                username: this.state.login,
                password: this.state.password
            }
        }).then((response) => {
            axios.defaults.headers.common['Authorization'] = 'Basic ' + btoa(this.state.login + ':' + this.state.password);

            console.log(response.data);
            this.setState({
                roles: response.data,
                openPickRoles: true
            });


        }).catch(function (error) {
            console.log(error);
        });
    };

    onRoleSelected = id => {
        axios.request({
            method: 'post',
            url: '/login',
            params: {
                roleId: id
            }
        }).then(response => {
            const user = response.data;
            console.log(`user ${user}`);
            this.props.onUserLoggedIn(user);
        }).catch(function (error) {
            console.log(error);
        });
    };

    handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            this.handleLoginClick()
        }
    };

    onCancelClicked = () => {
        this.setState({
            openPickRoles: false
        })
    };

    render() {
        return (
            <div>
                <Card>
                    <CardContent>
                        <Typography variant="headline">
                            BSK2 Car Renting
                        </Typography>
                        <br/>
                        <TextField
                            label="Login"
                            defaultValue="stasbar"
                            onChange={(e) => this.setState({login: e.target.value})}
                            inputProps={{
                                'aria-label': 'Description',
                            }}
                        />
                        <br/>
                        <TextField
                            defaultValue="hardpassword"
                            onKeyPress={this.handleKeyPress}
                            onChange={(e) => this.setState({password: e.target.value})}
                            label='Password'
                            type='password'
                            inputProps={{
                                'aria-label': 'Description',
                            }}
                        />
                        <br/>
                        <Button style={{marginTop: 20}}
                                variant="outlined"
                                onClick={this.handleLoginClick}>
                            Log in
                        </Button>
                    </CardContent>
                </Card>
                <PickRoleDialog
                    onCancelClicked={this.onCancelClicked}
                    open={this.state.openPickRoles}
                    roles={this.state.roles}
                    onRoleSelected={this.onRoleSelected}/>
            </div>

        )
    }


}