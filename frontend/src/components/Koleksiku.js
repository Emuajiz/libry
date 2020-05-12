import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Typography, Button, Grid } from '@material-ui/core';
import { Icon } from '@iconify/react';
import bxArchiveIn from '@iconify/icons-bx/bx-archive-in';
import BookGridBig from './BookGridBig'


const useStyles = makeStyles((theme) => ({
    root: {
        paddingTop: '1.5rem',
        paddingBottom: '11vh',
        minHeight: `100vh`,
    },
    spaceTop: {
        marginTop: theme.spacing(1),
    },
}));

const BtnGradient = withStyles((theme) => ({
    root: {
        color: '#F2F2F2',
        background: 'linear-gradient(90deg, #CC5A71 0%, #FF7EB3 100%)',
        borderRadius: 8,
        '&:hover': {
            background: 'linear-gradient(90deg, #CC5A71 0%, #FF7EB3 100%)',
        },
        textTransform: 'none',
    },
}))(Button);

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
                <BtnGradient variant="contained" disableElevation color='secondary' href='./arsipbuku'>
                    <Icon icon={bxArchiveIn} style={{ color: '#f2f2f2', fontSize: '1.5625rem', marginRight: 6, }} />
                    Arsip Buku
                </BtnGradient>
            </Grid>
            <BookGridBig />
        </div>
    );
}