import React from 'react';
import { useLocation, useHistory } from "react-router-dom";

import { makeStyles } from '@material-ui/core/styles';
import { IconButton, Grid, Typography, Button, Avatar } from '@material-ui/core'

import { Icon } from '@iconify/react'
import bxArrowBack from '@iconify/icons-bx/bx-arrow-back';
import bxChevronRight from '@iconify/icons-bx/bx-chevron-right';

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
    },
    container: {
        width: '100%',
        // overflowX: 'hide',
        // flexGrow: 1,
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(5),
        overflowX: 'auto',
    },
    btn: {
        marginLeft: theme.spacing(1),
        marginBottom: theme.spacing(0.5),
    }
}));

const tkn = JSON.parse(localStorage.getItem('login'));

var token;
if (tkn) {
    token = tkn.token;
} else {
    token = '';
}
const urlCuy = 'http://6a43ab11.ngrok.io';

function ListName({nama, foto, buku}) {
    const classes = useStyles();
    return (
        <Grid container style={{width: '100%'}}>
            <Button fullWidth
                className={classes.btn}
                startIcon={
                    <Avatar alt={nama} src={foto} />
                }
                endIcon={<Icon icon={bxChevronRight}
                    style={{ color: '#151515', fontSize: '22px' }} />}>
                {nama}
                    <div style={{ flexGrow: 1 }} />
            </Button>
        </Grid>
    );
}

export default function BukuPopuler() {
    const classes = useStyles();
    const history = useHistory();
    const location = useLocation();
    console.log(location);
    const [books, setBooks] = React.useState([]);

    React.useEffect(() => {
        window.scrollTo(0, 0);
        if (location.state.message === 'Buku Populer') fetchDetailBooks();
        if (location.state.message === 'Penulis') fetchPenulis();
        if (location.state.message === 'Koleksi Terbaru') fetchTerbaru();
    }, [location.state.message]);

    React.useEffect(() => {
        fetchBukuPenulis();
    }, [location.state.penulis])
    
    React.useEffect(() => {
        fetchBukuPenerbit();
    }, [location.state.penerbit])

    const fetchDetailBooks = async () => {
        const requestOptions = {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'content-type': 'application/json',
            },
        };
        const data = await fetch(
            `${urlCuy}/api/buku/populer`, requestOptions
        );
        var books = await data.json();
        books = Array.from(books.data);
        console.log(books);
        setBooks(books);
    }

    const fetchBukuPenulis = async () => {
        const requestOptions = {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'content-type': 'application/json',
            },
        };
        const data = await fetch(
            `${location.state.link}`, requestOptions
        );
        var books = await data.json();
        console.log(books);
        setBooks(books);
    }

    const fetchBukuPenerbit = async () => {
        const requestOptions = {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'content-type': 'application/json',
            },
        };
        const data = await fetch(
            `${location.state.link}`, requestOptions
        );
        var books = await data.json();
        console.log(books);
        setBooks(books);
    }

    const fetchTerbaru = async () => {
        const requestOptions = {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'content-type': 'application/json',
            },
        };
        const data = await fetch(
            `${urlCuy}/api/buku`, requestOptions
        );
        var books = await data.json();
        books = Array.from(books.data);
        console.log(books);
        setBooks(books);
    }

    const fetchPenulis = async () => {
        const requestOptions = {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'content-type': 'application/json',
            },
        };
        const data = await fetch(
            `${urlCuy}/api/penulis`, requestOptions
        );
        var books = await data.json();
        // books = Array.from(books.data);
        console.log(books);
        setBooks(books);
    }
    return (
        <Grid container direction='column' alignItems='flex-start' className={classes.root}>
            <Grid container alignItems='center' className={classes.items}>
                <IconButton onClick={() => history.goBack()}>
                    <Icon icon={bxArrowBack} style={{ color: '#cc5a71', fontSize: '29px' }} />
                </IconButton>
                <Typography variant='h1' component='h1' style={{ marginLeft: '0.75rem', fontWeight: 'bold' }}>
                    {location.state.message}
                </Typography>
            </Grid>
            <Grid container className={classes.container} direction='row' spacing={2} justify='flex-start'>
                {(location.state.message === 'Buku Populer' || location.state.message === 'Koleksi Terbaru') || location.state.penulis || location.state.penerbit ?
                    books.map(item => (
                        <BookGridAlt
                            key={item.id}
                            id={item.id}
                            judul={item.judul}
                            penulis={item.penulis}
                            kategori={item.kategori}
                            cover={urlCuy + '/cover-buku/' + item.cover} />
                    )) : location.state.message === 'Penerbit' ? 
                        <Typography component='h2' variant='h1'>Coming Soon!</Typography> :
                        books.map(item => (
                            <ListName 
                                nama={item.nama}
                                foto={item.foto}
                                buku={item.buku}
                            />
                        ))
                    }
            </Grid>
        </Grid>
    );
}

function ArsipBuku() {
    const classes = useStyles();
    const history = useHistory();
    const [ada, setAda] = React.useState(false);
    const [books, setBooks] = React.useState([]);

    React.useEffect(() => {
        window.scrollTo(0, 0);
        console.log(token);
        fetchDetailBooks();
        console.log(books);
    }, [books]);


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
        if (books.length) setAda(true);
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
                        {(books.length) ? `${books.length} buku telah tersimpan` : 'Yuk, pilih buku yang menurutmu menarik!'}
                    </Typography>
                </Grid>
            </Grid>
            {ada ? (
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