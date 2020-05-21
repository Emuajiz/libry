import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import { Typography, Divider, Button, Box, GridList, CircularProgress } from '@material-ui/core';

import { Icon } from '@iconify/react';
import bxChevronRight from '@iconify/icons-bx/bx-chevron-right';

import CategoriesTab from './CategoriesTab'
import BookGrid from './BookGrid'

const useStyles = makeStyles((theme) => ({
    root: {
        paddingBottom: '5rem',
    },
    spaceTop: {
        marginTop: theme.spacing(1),
    },
    spaceTopDiv: {
        marginTop: theme.spacing(2),
    },
    spaceTop2: {
        marginTop: theme.spacing(3),
    },
    spaceTop3: {
        marginTop: theme.spacing(2),
    },
    btn: {
        marginTop: theme.spacing(2),
        justifyContent: 'flex-start',
        paddingLeft: 0,
        textTransform: 'none',
    },
    gridlist: {
        display: 'flex',
        marginRight: theme.spacing(-1.5),
        width: `calc(100% + ${theme.spacing(1.5)})`,
        marginTop: theme.spacing(2),
    },
    gridlistChild: {
        flexWrap: 'nowrap',
    },
}));

const tkn = JSON.parse(localStorage.getItem('login'));

var token;
if (tkn) {
    token = tkn.token;
} else {
    token = '';
}
const urlCuy = 'https://libry.thareeq.id';

export default function Home() {
    const classes = useStyles();
    const [books, setBooks] = useState([]);
    const [populer, setPopuler] = useState([]);
    const [loading, setLoading] = React.useState(true);
    const [nama, setNama] = useState('pengunjung');

    useEffect(() => {
        fetchDetailBooks();
        if(token) fetchProfile();
    }, []);

    const fetchDetailBooks = async () => {
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
        const data1 = await fetch(
            `${urlCuy}/api/buku/populer`, requestOptions
        );
        const books = await data.json();
        const populer = await data1.json();
        console.log(populer.data);
        setPopuler(populer.data);
        setBooks(books.data);
        setLoading(false);
    }

    const fetchProfile = async () => {
        const requestOptions = {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'content-type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
        };
        const data = await fetch(
            `${urlCuy}/api/user`, requestOptions
        );
        const profile = await data.json();
        setNama(profile.nama.split(' ')[0]);
    }

    return (
        <div className={classes.root}>
            <Box className={classes.spaceTopDiv}>
                <Typography variant="h2" component='h1' style={{ fontSize: 24 }}>
                    Selamat datang, {nama}
                </Typography>
            </Box>
            <Divider className={classes.spaceTop} />
            <Typography variant="h3" component="h2" className={classes.spaceTop2}>Telusur</Typography>
            <CategoriesTab />
            <Button
                fullWidth className={classes.btn}
                endIcon={<Icon icon={bxChevronRight}
                    style={{ color: '#151515', fontSize: '22px' }} />}
                component={Link} to={
                    {
                        pathname: '/detail',
                        state: {
                            message: 'Buku Populer'
                        },
                    }
                }
            >
                <Typography variant='h3' component='h2' >Buku terpopuler saat ini</Typography>
                <div style={{ flexGrow: 1 }} />
            </Button>
            <Box component='div' className={classes.gridlist}>
                <GridList className={classes.gridlistChild} component='div' cellHeight={'auto'}>
                    {(loading) ? (
                        <div style={{ height: 50, width: '100vw' }}>
                            <CircularProgress color="secondary" />
                        </div>
                    ) : populer.map(item => (
                        <BookGrid
                            key={item.id}
                            id={item.id}
                            judul={item.judul}
                            penulis={item.penulis}
                            kategori={item.kategori}
                            cover={urlCuy + '/cover-buku/' + item.cover}
                        />
                    ))}
                </GridList>
            </Box>
            <Button
                fullWidth className={classes.btn}
                endIcon={<Icon icon={bxChevronRight}
                    style={{ color: '#151515', fontSize: '22px' }} />}
                component={Link} to={{
                    pathname: '/detail',
                    state: {
                        message: 'Koleksi Terbaru',
                    }
                }} >
                <Typography variant='h3' component='h2' >Koleksi terbaru dari kami</Typography>
                <div style={{ flexGrow: 1 }} />
            </Button>
            <Box component='div' className={classes.gridlist}>
                <GridList className={classes.gridlistChild} component='div' cellHeight={'auto'}>
                    {(loading) ? (
                        <div style={{ height: 50, width: '100vw' }}>
                            <CircularProgress color="secondary" />
                        </div>
                    ) : books.map(item => (
                        <BookGrid
                            key={item.id}
                            id={item.id}
                            judul={item.judul}
                            penulis={item.penulis}
                            kategori={item.kategori}
                            cover={urlCuy + '/cover-buku/' + item.cover}
                        />
                    ))}
                </GridList>
            </Box>
        </div>
    );
}