import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";

import { makeStyles } from '@material-ui/core/styles';
import { Grid, IconButton, Typography, Paper } from '@material-ui/core';

import { Icon } from '@iconify/react'
import bxArrowBack from '@iconify/icons-bx/bx-arrow-back';
import { Rating } from './Rating';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        minHeight: '100vh',
        
        // zIndex: 100,
    },
    items: {
        marginTop: theme.spacing(2),
        marginLeft: theme.spacing(-1),
        marginBottom: '1.5rem',
    },
    paper: {
        width: '100%',
        minHeight: 120,
        padding: theme.spacing(2.5,1),
    },
    divider: {
        marginBottom: theme.spacing(2),
        margin: theme.spacing('auto', -2),
        height: 12,
        width: `calc(100% + ${theme.spacing(4)})`,
        backgroundColor: '#f2f2f2',
    },
}));

function ListKomentar({ key, nama, rating, tulisan, jmlUlasan }) {
    const classes = useStyles();
    return (
        <div>
            <Paper className={classes.paper} key={key} elevation={0}>
                <Typography variant='h3' component='h2'>
                    {nama}
                </Typography>
                <div style={{marginBottom: '0.5rem'}} />
                <Rating rating={rating} />
                <div style={{marginBottom: '1rem'}} />
                <Typography component='p' variant='body1'>
                    {tulisan}
                </Typography>
            </Paper>
            <div className={classes.divider} />
        </div>
    );
}

const tkn = JSON.parse(localStorage.getItem('login'));

var token;
if (tkn) {
    token = tkn.token;
} else {
    token = '';
}
const urlCuy = 'http://3e9c1c7e.ngrok.io';

export default function Komentar({ match }) {
    const classes = useStyles();
    const history = useHistory();
    const [komentar, setKomentar] = useState([]);
    const [jmlUlasan, setJmlUlasan] = useState(0);

    useEffect(() => {
        fetchKomentar();
    }, []);

    const fetchKomentar = async () => {
        const requestOptions = {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'content-type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
        };
        const data = await fetch(
            `${urlCuy}/api/buku/${match.params.id}`, requestOptions
        );
        const komentar = await data.json();
        var comment = Array.from(komentar.ulasan.list);
        setKomentar(comment);
        setJmlUlasan(komentar.ulasan.jumlah);
    };

    return (
        <Grid container direction='column' alignItems='flex-start' className={classes.root}>
            <Grid container alignItems='center' className={classes.items} style={{ marginTop: '1.5rem' }}>
                <IconButton onClick={() => history.goBack()}>
                    <Icon icon={bxArrowBack} style={{ color: '#cc5a71', fontSize: '29px' }} />
                </IconButton>
                <Grid item style={{ textAlign: 'left', marginLeft: '0.75rem' }}>
                    <Typography variant='h1' component='h1' style={{ fontWeight: 'bold' }}>
                        Rating dan Ulasan
                    </Typography>
                    <Typography variant='body1' component='p' color='textSecondary' style={{ fontWeight: 'bold' }}>
                        Terdapat {jmlUlasan} Ulasan
                    </Typography>
                </Grid>
            </Grid>
            {komentar.map(item => (
                <ListKomentar rating={item.rating} nama={item.nama} key={item.id} tulisan={item.tulisan} jmlUlasan={jmlUlasan} />
            ))}
        </Grid>
    );
}