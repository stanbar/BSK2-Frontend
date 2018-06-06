import React, {Component, Fragment} from 'react';
import {
    Grid,
    Paper,
    Typography,
    List,
    ListItem,
    ListItemText,
    ListItemSecondaryAction,
    IconButton
} from '@material-ui/core';
import {Edit, Delete} from '@material-ui/icons'
import Login from './Login'
import User from './MyUser'

const styles = {
    Paper: {
        padding: 20,
        marginTop: 10,
        marginBottom: 10,
        height: 500,
        overflowY: 'auto'
    }
};


export default ({
                    user,
                    onUserLoggedIn,
                    dataModel,
                    data,
                    DataComponent
                }) =>
    <Grid container>
        <Grid item sm={2}>
            {user
                ? <User style={styles.Paper} user={user}/>
                : <Login styles={styles.Paper} onUserLoggedIn={onUserLoggedIn}/>
            }
        </Grid>
        <Grid item sm={10}>
            <Paper style={styles.Paper}>

                <List component="nav">
                    {data ?
                        data.map(item => <DataComponent key={item.id} data={item}/>)
                        : <ListItem button key="mainEmpty">
                            <ListItemText primary="Empty"/>
                        </ListItem>
                    }
                </List>

            </Paper>
        </Grid>


    </Grid>