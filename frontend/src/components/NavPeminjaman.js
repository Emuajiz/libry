import React from 'react';
import { BottomNavigation, Button, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { Icon } from '@iconify/react';
import bxsShareAlt from '@iconify/icons-bx/bxs-share-alt';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        height: '3.8rem',
        bottom: '0',
        marginLeft: theme.spacing(-2),
        marginRight: theme.spacing(-2),

        position: 'fixed',
        padding: theme.spacing(1, 2, 1, 2),

        backgroundColor: '#F2F2F2',
        boxShadow: '0px -4px 18px rgba(0, 0, 0, 0.25)',
        zIndex: 12,
    },
    btn: {
        height: 42,
    }
}));

export default function NavPeminjaman() {
    const classes = useStyles();

    return (
        <BottomNavigation className={classes.root}>
            <Grid container justify='center' direction='column'>
                <Button variant='contained' color='secondary' size='small' className={classes.btn} style={{ marginRight: '0.5rem', width: '80%' }}>
                    Pinjam Buku
                </Button>
                <Button variant='outlined' color='secondary' size='small' className={classes.btn} style={{ width: `calc(20% - 0.5rem)` }}>
                    <Icon icon={bxsShareAlt} style={{ color: '#CC5A71', fontSize: '1.2rem' }} />
                </Button>
            </Grid>
        </BottomNavigation>
    );
}