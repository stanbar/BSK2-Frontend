import React, {Component, Fragment} from 'react';
import {Card, CardContent, Paper, Button, Typography, Input} from '@material-ui/core';
import PickRoleDialog from './Dialogs/PickRoleDialog'
import {axiosClient} from "../axiousClient";

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
        login: '',
        password: '',
        roles: [],
        openPickRoles: false
    };

    handleLoginClick = () => {

        axiosClient.request({
            method: 'post',
            url: '/login',
            auth: {
                username: 'stasbar',
                password: 'hardpassword'
            }
        }).then((response) => {
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
        axiosClient.request({
            method: 'post',
            url: '/login',
            params: {
                roleId: id
            },
            auth: {
                username: 'stasbar',
                password: 'hardpassword'
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

    render() {
        return (
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <Card>
                    <CardContent>
                        <Typography variant="headline">
                            Login
                        </Typography>
                        <br/>
                        <Input
                            onChange={(e) => this.setState({login: e.target.value})}
                            placeholder="Login"
                            inputProps={{
                                'aria-label': 'Description',
                            }}
                        />
                        <br/>
                        <Input
                            onKeyPress={this.handleKeyPress}
                            onChange={(e) => this.setState({password: e.target.value})}
                            placeholder='Password'
                            type='password'
                            inputProps={{
                                'aria-label': 'Description',
                            }}
                        />
                        <br/>
                        <Button style={{marginTop: 20}}
                                variant="outlined"
                                onClick={this.handleLoginClick}>
                            Login
                        </Button>
                    </CardContent>
                </Card>
                <PickRoleDialog
                    open={this.state.openPickRoles}
                    roles={this.state.roles}
                    onRoleSelected={this.onRoleSelected}/>
            </div>

        )
    }


}