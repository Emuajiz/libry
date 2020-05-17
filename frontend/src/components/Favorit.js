import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Grid } from '@material-ui/core';

import BookList from './BookList';
import NotFound from './NotFound';
import Loading from './LoadingScreen';

const useStyles = makeStyles((theme) => ({
    root: {
        paddingTop: '1.5rem',
        paddingBottom: '5.4rem',
        minHeight: `100vh`,
    },
    spaceTop: {
        marginTop: theme.spacing(1),
    },
    icon: {
        padding: theme.spacing(0.5),
    },
    centerItem: { display: 'flex', justifyContent: 'center', marginTop: '50%', marginBottom: '50%' }
}));

const tkn = JSON.parse(localStorage.getItem('login'));

var token;
if (tkn) {
    token = tkn.token;
} else {
    token = '';
}
const urlCuy = 'http://3e9c1c7e.ngrok.io';


export default function Favorit() {
    const classes = useStyles();
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = React.useState(true);
    const [ada, setAda] = React.useState(false);

    useEffect(() => {
        fetchDetailBooks();
    }, []);

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
            `${urlCuy}/api/wishlist`, requestOptions
        );
        var books = await data.json();
        books = Array.from(books.data);
        setBooks(books);
        console.log(books.length);
        if(books.length) setAda(true);
        setLoading(false);
    }

    return (
        <div className={classes.root}>
            <Grid container direction='row' >
                <Grid item>
                    <Typography variant='h1' component='h1'>Wishlist</Typography>
                    <Typography variant='subtitle2' component='span' color='textSecondary'>
                        { (books.length) ? `Ada ${books.length} buku tersimpan` : 'Yuk, pilih buku yang menurutmu menarik!' }
                    </Typography>
                </Grid>
                <div style={{ flexGrow: 1 }} />
                {/* <IconButton className={classes.icon}>
                    <Icon icon={bxSearchAlt} style={{ color: '#cc5a71', fontSize: '2.2rem' }} />
                </IconButton>
                <IconButton className={classes.icon}>
                    <Icon icon={bxListUl} style={{ color: '#cc5a71', fontSize: '2.2rem' }} />
                </IconButton> */}
            </Grid>
            {(loading) ? (<Loading />) 
            : (ada) ? 
            books.map(item => (
                <BookList
                    key={item.id}
                    id={item.id}
                    judul={item.judul}
                    penulis={item.penulis}
                    kategori={item.kategori}
                    cover={urlCuy + '/cover-buku/' + item.cover} />
            )) : (
            <Grid item className={classes.centerItem}>
                <NotFound message='Anda belum menentukan Wishlist Anda' />
            </Grid>
            )}
            
        </div>
    );
}