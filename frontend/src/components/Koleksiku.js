import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button, Grid } from '@material-ui/core';
import { Icon } from '@iconify/react';
import bxArchiveIn from '@iconify/icons-bx/bx-archive-in';
import BookGridBig from './BookGridBig'


const useStyles = makeStyles((theme) => ({
    root: {
        paddingTop: '1.5rem',
        paddingBottom: '11vh',
        height: `100vh`,
    },
    spaceTop: {
        marginTop: theme.spacing(1),
    },
}));

export default function Koleksiku() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container direction='row' >
                <Grid item direction='column'>
                    <Typography variant='h1' component='h1'>Koleksiku</Typography>
                    <Typography variant='subtitle2' component='span'>Ada 8 buku tersimpan</Typography>
                </Grid>
                <div style={{ flexGrow: 1 }} />
                <Button variant="contained" disableElevation color='secondary'>
                    <Icon icon={bxArchiveIn} style={{ color: '#f2f2f2', fontSize: '25px', marginRight: '6px', }} />
                    Arsip Buku
                </Button>
            </Grid>
            <BookGridBig />
        </div>
    );
}