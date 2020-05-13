import React from 'react';
import { Link } from 'react-router-dom';

import { Button, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import { Icon } from '@iconify/react';
import bxsShareAlt from '@iconify/icons-bx/bxs-share-alt';

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'fixed',
        left: 0, 
        bottom: 0,

        // marginLeft: theme.spacing(-2),
        // marginRight: theme.spacing(-2),
        padding: theme.spacing(1, 2, 1, 2),

        backgroundColor: '#F2F2F2',
        boxShadow: '0px -4px 18px rgba(0, 0, 0, 0.25)',
        zIndex: 998,
    },
    btn: {
        height: 42,
    }
}));

export default function NavPeminjaman() {
    const classes = useStyles();

    return (
        <Grid maxWidth='xs' container direction='row' justify='center' className={classes.root} >
            <Button variant='contained'
                color='secondary'
                size='small'
                className={classes.btn}
                style={{ marginRight: '0.5rem', width: 'calc(80% - 0.5rem)' }}
                component={Link} to='./peminjaman'
                >
                Pinjam Buku
            </Button>
            <Button variant='outlined'
                color='secondary'
                size='small'
                className={classes.btn}
                style={{ width: `calc(20% - 0.5rem)` }}>
                <Icon icon={bxsShareAlt} style={{ color: '#CC5A71', fontSize: '1.2rem' }} />
            </Button>
        </Grid>
    );
}