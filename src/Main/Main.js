// @flow
import React, {Component} from 'react';
import {
    Grid,
    Paper,
    Typography,
    List,
    ListItem,
    ListItemText,
} from '@material-ui/core';
import {Tab} from '../store'
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

type MainProps = {
    user: User,
    data: mixed,
    tab: Tab,
    selectedItem : any,
    onItemSelected: Function
}

export class Main extends Component {
    render() {
        const {user, data, tab, selectedItem} = this.props;

        const DataComponent = tab.component;
        const DataComponentDetailed = tab.detailedComponent;
        return (
            <Grid container>
                <Grid item sm={2}>
                    <Paper style={styles.Paper}>
                        <User user={user}/>
                    </Paper>
                </Grid>
                <Grid item sm={5}>
                    <Paper style={styles.Paper}>

                        <List component="nav">
                            {data ?
                                data.map(item => <DataComponent onClick={() => this.props.onItemSelected(item)}
                                                                key={tab.name + item.id}
                                                                data={item}/>)
                                : <ListItem key="mainEmpty">
                                    <ListItemText primary="Empty"/>
                                </ListItem>
                            }
                        </List>

                    </Paper>
                </Grid>
                <Grid item sm={5}>
                    <Paper style={styles.Paper}>
                        {selectedItem ?
                            <DataComponentDetailed data={selectedItem}/>
                            :
                            <Typography>Please select item</Typography>
                        }

                    </Paper>
                </Grid>
            </Grid>
        )
    }
}