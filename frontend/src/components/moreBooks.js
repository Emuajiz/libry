import React from 'react';
import { useHistory } from "react-router-dom";

import { makeStyles } from '@material-ui/core/styles';
import { IconButton, Grid, Typography } from '@material-ui/core'

import { Icon } from '@iconify/react'
import bxArrowBack from '@iconify/icons-bx/bx-arrow-back';

import { BookGridAlt } from './BookGrid';
import BookList from './BookList';
import NotFound from './NotFound';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        minHeight: '100vh',
        // zIndex: 100,
    },
    items: {
        marginTop: theme.spacing(2),
        marginLeft: theme.spacing(-1),
    }
}));

const tkn = JSON.parse(localStorage.getItem('login'));

var token;
if (tkn) {
    token = tkn.token;
} else {
    token = '';
}
const urlCuy = 'http://3e9c1c7e.ngrok.io';

export default function BukuPopuler() {
    const classes = useStyles();
    const history = useHistory();
    React.useEffect(() => { window.scrollTo(0, 0); }, []);
    return (
        <Grid container direction='column' alignItems='flex-start' className={classes.root}>
            <Grid container alignItems='center' className={classes.items}>
                <IconButton onClick={() => history.goBack()}>
                    <Icon icon={bxArrowBack} style={{ color: '#cc5a71', fontSize: '29px' }} />
                </IconButton>
                <Typography variant='h1' component='h1' style={{ marginLeft: '0.75rem', fontWeight: 'bold' }}>
                    Buku Populer
                </Typography>
            </Grid>
            <BookGridAlt />
        </Grid>
    );
}

function ArsipBuku() {
    const classes = useStyles();
    const history = useHistory();
    const [ada, setAda] = React.useState(false);

    React.useEffect(() => {
        window.scrollTo(0, 0);
        console.log(token);
        fetchDetailBooks();
        console.log(books);
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
            `${urlCuy}/api/pinjam/sudah`, requestOptions
        );
        var books = await data.json();
        books = Array.from(books);
        
        console.log(books.length);
        if(books.length) setAda(true);
        setBooks(books);
    }
    return (
        <Grid container direction='column' alignItems='flex-start' className={classes.root}>
            <Grid container alignItems='center' className={classes.items} style={{ marginTop: '1.5rem' }}>
                <IconButton onClick={() => history.goBack()}>
                    <Icon icon={bxArrowBack} style={{ color: '#cc5a71', fontSize: '29px' }} />
                </IconButton>
                <Grid item style={{ textAlign: 'left', marginLeft: '0.75rem' }}>
                    <Typography variant='h1' component='h1' style={{ fontWeight: 'bold' }}>
                        Arsip Buku
                    </Typography>
                    <Typography variant='body1' component='p' color='textSecondary'>
                        { (books.length) ? `${books.length} buku telah tersimpan` : 'Yuk, pilih buku yang menurutmu menarik!' }
                    </Typography>
                </Grid>
            </Grid>
            { ada ? (
                <div>{books.map(item => (
                    <BookList
                        id={item.id}
                        judul={item.judul}
                        penulis={item.penulis}
                        kategori={item.kategori}
                        cover={item.kategori}
                    />
                    ))}
                </div>
            ) : (
                <Grid container style={{ margin: '50% auto 50% auto' }}>
                    <NotFound message='Maaf, arsip peminjaman masih kosong' />
                </Grid>
            )}
        </Grid>
    );
}

export { BukuPopuler, ArsipBuku }