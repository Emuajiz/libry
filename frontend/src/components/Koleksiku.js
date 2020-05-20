import React, { useEffect } from 'react';
import { Link, Route } from 'react-router-dom';

import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Typography, Button, Grid, GridList } from '@material-ui/core';
import { Icon } from '@iconify/react';
import bxArchiveIn from '@iconify/icons-bx/bx-archive-in';

import BookGridBig from './BookGridBig';
import NotFound from './NotFound';
import Loading from './LoadingScreen';

const useStyles = makeStyles((theme) => ({
    root: {
        paddingTop: '1.5rem',
        paddingBottom: '2rem',
        maxHeight: `100vh`,
    },
    spaceTop: {
        marginTop: theme.spacing(1),
    },
    gridlist: {
        display: 'flex',
        flexWrap: 'wrap',
        width: `calc(100% + ${theme.spacing(1.5)})`,
        overflowX: 'auto',

        marginTop: theme.spacing(3),
        marginRight: theme.spacing(-1.5),
    },
    gridlistChild: {
        flexWrap: 'nowrap',
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

const tkn = JSON.parse(localStorage.getItem('login'));

var token;
if (tkn) {
    token = tkn.token;
} else {
    token = '';
}
const urlCuy = 'http://6a43ab11.ngrok.io';


export default function Koleksiku() {
    const [books, setBooks] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    const [ada, setAda] = React.useState(false);

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
        books = Array.from(books);
        setBooks(books);
        setLoading(false);
        if(books.length) setAda(true);
        console.log(books.length);
    }
    useEffect(() => {
        console.log(token);
        fetchDetailBooks();
    }, []);

    const classes = useStyles();
    return (

        <div className={classes.root}>
            <Grid container direction='row'>
                <Grid item>
                    <Typography variant='h1' component='h1'>Koleksiku</Typography>
                    <Typography variant='subtitle2' component='span'>Ada 8 buku tersimpan</Typography>
                </Grid>
                <div style={{ flexGrow: 1 }} />
                <BtnGradient variant="contained" disableElevation color='secondary' component={Link} to='/arsipbuku'>
                    <Icon icon={bxArchiveIn} style={{ color: '#f2f2f2', fontSize: '1.5625rem', marginRight: 6, }} />
                    Arsip Buku
                </BtnGradient>
            </Grid>
            <Grid container className={classes.gridlist} direction='column' component='div'>
                {loading ? (
                    <Loading />
                ) : (!ada) ? (
                        <NotFound 
                            message='Anda belum meminjam buku satupun' 
                            style={{ marginTop: 'auto', marginBottom: 'auto' }} />
                    ) : ( 
                        <GridList className={classes.gridlistChild} cellHeight={'auto'} cols={2} component='div'>
                            {books.map(item => (
                                <BookGridBig
                                    key={item.id}
                                    judul={item.judul}
                                    penulis={item.penulis}
                                    tipe={item.tipe}
                                    sisa={item.sisa_hari}
                                    file={item.file_location}
                                    cover={item.cover_location}
                                />
                            ))}
                        </GridList>
                )}
            </Grid>
        </div>
    );
}