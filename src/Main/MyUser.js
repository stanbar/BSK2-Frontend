import React, { Fragment} from 'react';
import {
    Paper,
    Typography,
    List,
    ListItem,
    ListItemText,
} from '@material-ui/core';


export default ({user}) =>
    <Fragment>
        <Paper>
            <Typography variant="headline">Login</Typography>
            <Typography variant="subheading">{user.subject.login}</Typography>

            <Typography variant="headline">Name</Typography>
            <Typography variant="subheading">{user.firstName} {user.lastName}</Typography>

            <Typography variant="headline">PESEL</Typography>
            <Typography variant="subheading">{user.PESEL}</Typography>

            <Typography variant="headline">DriverLicence</Typography>
            <Typography variant="subheading">{user.driverLicence}</Typography>

            <List component="nav">
                {user.subject.subjectRoles
                    ?
                    user.subject.subjectRoles.map(({role}) =>
                        <ListItem button key={role.id + role.name}>
                            <ListItemText primary={role.name}/>
                            <ListItemText primary={role.description}/>
                            <List component="nav">
                                {role.permissions.map(({permission}) =>
                                    <ListItemText key={permission} primary={permission}/>
                                )}
                            </List>
                        </ListItem>)
                    : <ListItem button key="permissionsEmpty">
                        <ListItemText primary="No permissions"/>
                    </ListItem>
                }
            </List>


        </Paper>
    </Fragment>
