import { Paper, Grid, makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    paper: {
        padding: theme.spacing(2),
        color: theme.palette.text.secondary
    }
}))


const Sideber = () => {
    const classes = useStyles();
    
    return (
        <Grid item md={3}>
            <Paper className={classes.paper}>
                Sidebar
            </Paper>
        </Grid>
    );
};

export default Sideber;