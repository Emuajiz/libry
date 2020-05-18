import React from 'react';
import { Link as Links, Redirect } from 'react-router-dom';

import { useForm } from 'react-hook-form';
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

const urlCuy = 'http://6a43ab11.ngrok.io';

export default function Login() {
    const classes = useStyles();
    const [ signIn, setSignIn ] = React.useState(false);
    const { register, handleSubmit } = useForm();
    let login;
    login = JSON.parse(localStorage.getItem('login'));

    const onSubmit = (data) => {
        console.log(data);
        handlePost(data);
    };

    const handlePost = (data) => {
        const requestOptions = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'content-type': 'application/json',
            },
            body: JSON.stringify(data),
        };
        console.log(requestOptions);
        fetch(`${urlCuy}/api/login`, requestOptions)
        .then(response => {
            response.json().then((result) => {
                console.warn('result', result);
                if(result.token){
                    localStorage.setItem('login',JSON.stringify({
                        login: true,
                        token: result.token,
                    }))
                    setSignIn(true);
                } else {
                    localStorage.setItem('login',JSON.stringify({
                        login: false,
                    }))
                }
            })
        })
    };
    
    return (
        <Grid container direction='column' justify='center' className={classes.container}>
            {(login || signIn) ? <Redirect to='/' /> : ''}
            <Grid item className={classes.items1}>
                <Typography variant='h1' component='h1' style={{ fontSize: 32 }} gutterBottom>
                    Log in
                </Typography>
                <Typography variant='h2' component='h2' style={{ fontWeight: 300 }}>
                    Selamat datang di <b>Libry</b>
                </Typography>
            </Grid>
            <form className={classes.root} noValidate onSubmit={handleSubmit(onSubmit)}>
                <TextField
                    id="outlined-basic"
                    label="E-mail"
                    name='email'
                    type='email'
                    variant='filled'
                    inputRef={register}
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
                    name='password'
                    type='password'
                    variant='filled'
                    inputRef={register}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <Icon icon={bxKey} style={{ color: '#c89b7b', fontSize: '1.25rem' }} />
                            </InputAdornment>
                        ),
                    }}
                    color='primary'
                    style={{ borderRadius: 8 }} />
                <Grid item className={classes.items}>
                    <Button
                        variant='contained'
                        fullWidth color='secondary'
                        style={{ borderRadius: 8 }}
                        type='submit'
                    >
                        Log in
                </Button>
                </Grid>
            </form>

            <Grid item className={classes.items} style={{ textAlign: 'center' }}>
                <Typography variant='body1' component='span'>
                    Belum memiliki akun?&nbsp;
                </Typography>
                <Link variant='body1' component={Links} to='/signup'>
                    Sign Up
                </Link>
            </Grid>
        </Grid>
    );
}