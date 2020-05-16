import React, { useEffect } from 'react';
import { Link, Route } from 'react-router-dom';

import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Typography, Button, Grid } from '@material-ui/core';
import { Icon } from '@iconify/react';
import bxArchiveIn from '@iconify/icons-bx/bx-archive-in';

import BookGridBig from './BookGridBig'

const useStyles = makeStyles((theme) => ({
    root: {
        paddingTop: '1.5rem',
        paddingBottom: '2rem',
        maxHeight: `100vh`,
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

const urlCuy = 'http://8198552c.ngrok.io';
const token = 'JvsUQymW7UEfNWoYBUEMREo7B4qdYjult7VSuSPUqyQsFkJwAL2PL1eF8f3LYrWQWlnKSEr5vZPFdQuS';

export default function Koleksiku() {
    useEffect(() => {
        fetchDetailBooks();
    }, []);

    const [books, setBooks] = React.useState([]);

    const fetchDetailBooks = async () => {
        const requestOptions = {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'content-type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
        };
        const data = await fetch(
            `${urlCuy}/api/pinjam`, requestOptions
        );
        var books = await data.json();
        console.log(books);
        books = Array.from(books);
        setBooks(books);
    }

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container direction='row'>
                <Grid item direction='column'>
                    <Typography variant='h1' component='h1'>Koleksiku</Typography>
                    <Typography variant='subtitle2' component='span'>Ada 8 buku tersimpan</Typography>
                </Grid>
                <div style={{ flexGrow: 1 }} />
                <BtnGradient variant="contained" disableElevation color='secondary' component={Link} to='/arsipbuku'>
                    <Icon icon={bxArchiveIn} style={{ color: '#f2f2f2', fontSize: '1.5625rem', marginRight: 6, }} />
                    Arsip Buku
                </BtnGradient>
            </Grid>
            {books.map(item => (
                <BookGridBig
                    id={item.id}
                    judul={item.judul}
                    penulis={item.penulis}
                    tipe={item.tipe}
                    sisa={item.sisa_hari}
                    file={item.file_location}
                    cover={item.cover_location}
                />
            ))}
        </div>
    );
}