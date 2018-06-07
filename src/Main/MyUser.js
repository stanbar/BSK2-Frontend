import React, {Component} from 'react';
import {
    Paper,
    Typography,
    List,
    ListItem,
    ListItemText,
} from '@material-ui/core';


export default class extends Component {
    render() {
        const {user} = this.props;
        const {role} = user.subject.subjectRoles[0];
        console.log(`user ${JSON.stringify(user,null,'\t')}`);
        return (
            <div>
                <Typography variant="headline">Login</Typography>
                <Typography variant="subheading">{user.subject.login}</Typography>

                <Typography variant="headline">Name</Typography>
                <Typography variant="subheading">{user.firstName} {user.lastName}</Typography>

                <Typography variant="headline">PESEL</Typography>
                <Typography variant="subheading">{user.PESEL}</Typography>

                <Typography variant="headline">DriverLicence</Typography>
                <Typography variant="subheading">{user.driverLicence}</Typography>

                <Typography variant="headline">Role</Typography>
                <Typography variant="subheading">{role.name}</Typography>

                <List component="nav">
                    {role.permissions.map(({permission}) =>
                        <ListItemText key={permission} primary={permission}/>
                    )}
                </List>
            </div>

        )

    }

}
