import React from 'react';
import {Paper, Tabs, Tab} from '@material-ui/core';
import {tabs} from '../store'

export default ({selectedTabIndex, onSelect}) => {

    const onIndexSelect = (e, index) => {
        onSelect(index)
    };

    return <Paper>
        <Tabs
            value={selectedTabIndex}
            onChange={onIndexSelect}
            indicatorColor="primary"
            textColor="primary"
            centered>
            {tabs.map(tab => <Tab key={tab.name} label={tab.name}/>)}

        </Tabs>
    </Paper>
}

