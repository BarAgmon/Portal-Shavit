import React from 'react';
import {AppBar, Tabs, Tab} from '@material-ui/core';
import * as Colors from 'material-ui/styles/colors';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    appBar: {
        backgroundColor: Colors.darkBlack,
    },
});

export default function Navbar() {
    const classes = useStyles();
    return (
        <div className={classes.palette}>
            <AppBar display="flex" justifyContent="center" className={classes.appBar} title="Portal Shavit">
                <Tabs><Tab label="&nbsp;Maya is actually bar&nbsp;" />
                    <Tab label="&nbsp;Documentation&nbsp;" />
                    <Tab label="&nbsp;Docker CLI&nbsp;" />
                    <Tab label="&nbsp;Backup And Restore&nbsp;" />
                </Tabs>
            </AppBar>
        </div>
    );
}