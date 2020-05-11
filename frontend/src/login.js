import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, InputAdornment, Typography, Button, Link, Grid } from '@material-ui/core';

import { Icon } from '@iconify/react';
import emailIcon from '@iconify/icons-mdi/email';
import bxKey from '@iconify/icons-bx/bx-key';


const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            marginTop: theme.spacing(2.5),
            width: '100%',
        },
    },
    container: {
        width: '100%',
        height: '100vh',
    },
    items: {
        marginTop: theme.spacing(3),
    },
    items1: {
        marginBottom: theme.spacing(3),
    }
}));

export default function Login() {
    const classes = useStyles();

    return (
        <Grid container direction='column' justify='center' className={classes.container}>
            <Grid item className={classes.items1}>
                <Typography variant='h1' component='h1' style={{ fontSize: 32 }} gutterBottom>
                    Sign In
                </Typography>
                <Typography variant='h2' component='h2' style={{ fontWeight: 300 }}>
                    Selamat datang, pengguna
                </Typography>
            </Grid>
            <form className={classes.root} noValidate autoComplete="off">
                <TextField
                    id="outlined-basic"
                    label="E-mail"
                    variant='filled'
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <Icon icon={emailIcon} style={{ color: '#c89b7b', fontSize: '1.25rem' }} />
                            </InputAdornment>
                        ),
                    }}
                    color='primary' />
                <TextField
                    id="outlined-basic"
                    label="Password"
                    variant='filled'
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <Icon icon={bxKey} style={{ color: '#c89b7b', fontSize: '1.25rem' }} />
                            </InputAdornment>
                        ),
                    }}
                    color='primary'
                    style={{ borderRadius: 8 }} />
            </form>
            <Grid item className={classes.items}>
                <Button
                    variant='contained'
                    fullWidth color='secondary'
                    style={{ borderRadius: 8 }}
                >
                    Sign In
            </Button>
            </Grid>
            <Grid item className={classes.items} style={{ textAlign: 'center' }}>
                <Link variant='body1'>
                    Lupa kata sandi
                </Link>
                <br />
                <Typography variant='body1' component='span'>
                    Belum memiliki akun?&nbsp;
                </Typography>
                <Link variant='body1' >
                    Sign Up
                </Link>
            </Grid>
        </Grid>
    );
}