import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, IconButton, Grid } from '@material-ui/core';
import { Icon } from '@iconify/react';
import bxListUl from '@iconify/icons-bx/bx-list-ul';
import bxSearchAlt from '@iconify/icons-bx/bx-search-alt';
import BookList from './BookList';


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
    }
}));

const urlCuy = 'http://8198552c.ngrok.io';
const token = 'JvsUQymW7UEfNWoYBUEMREo7B4qdYjult7VSuSPUqyQsFkJwAL2PL1eF8f3LYrWQWlnKSEr5vZPFdQuS';

export default function Favorit() {
    const classes = useStyles();
    useEffect(() => {
        fetchDetailBooks();
    }, []);

    const [books, setBooks] = useState([]);

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
        const books = await data.json();
        console.log(books.data);
        setBooks(books.data);
    }

    return (
        <div className={classes.root}>
            <Grid container direction='row' >
                <Grid item>
                    <Typography variant='h1' component='h1'>Antrean Buku</Typography>
                    <Typography variant='subtitle2' component='span'>Ada 8 buku tersimpan</Typography>
                </Grid>
                <div style={{ flexGrow: 1 }} />
                <IconButton className={classes.icon}>
                    <Icon icon={bxSearchAlt} style={{ color: '#cc5a71', fontSize: '2.2rem' }} />
                </IconButton>
                <IconButton className={classes.icon}>
                    <Icon icon={bxListUl} style={{ color: '#cc5a71', fontSize: '2.2rem' }} />
                </IconButton>
            </Grid>
            {books.map(item => (
                <BookList
                    key={item.id}
                    id={item.id}
                    judul={item.judul}
                    penulis={item.penulis}
                    kategori={item.kategori}
                    cover={urlCuy + '/cover-buku/' + item.cover} />
            ))}
        </div>
    );
}