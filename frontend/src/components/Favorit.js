import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, IconButton, Grid } from '@material-ui/core';
import { Icon } from '@iconify/react';
import bxListUl from '@iconify/icons-bx/bx-list-ul';
import bxSearchAlt from '@iconify/icons-bx/bx-search-alt';
import BookList from './BookList'


const useStyles = makeStyles((theme) => ({
    root: {
        paddingTop: '1.5rem',
        paddingBottom: '11vh',
        height: `100vh`,
    },
    spaceTop: {
        marginTop: theme.spacing(1),
    },
    icon: {
        padding: theme.spacing(0.5),
    }
}));

export default function Koleksiku() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container direction='row' >
                <Grid item direction='column'>
                    <Typography variant='h1' component='h1'>Antrean Buku</Typography>
                    <Typography variant='subtitle2' component='span'>Ada 8 buku tersimpan</Typography>
                </Grid>
                <div style={{ flexGrow: 1 }} />
                <IconButton className={classes.icon}>
                    <Icon icon={bxSearchAlt} style={{color: '#cc5a71', fontSize: '2.2rem'}} />
                </IconButton>
                <IconButton className={classes.icon}>
                    <Icon icon={bxListUl} style={{color: '#cc5a71', fontSize: '2.2rem'}} />
                </IconButton>
            </Grid>
            <BookList />
        </div>
    );
}