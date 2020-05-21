import React, { useState, useEffect } from 'react';
import Popup from "reactjs-popup";
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import {
    Card, CardMedia, CardContent, Typography, Grid,
    IconButton, Box, Divider, Button, GridList
} from '@material-ui/core';

import { Icon } from '@iconify/react';
import roundFavoriteBorder from '@iconify/icons-ic/round-favorite-border';
import baselineFavorite from '@iconify/icons-ic/baseline-favorite';
import outlineLibraryBooks from '@iconify/icons-ic/outline-library-books';
import bxChevronRight from '@iconify/icons-bx/bx-chevron-right';
import bxArrowBack from '@iconify/icons-bx/bx-arrow-back';

import Review from './Review';
import { RatingAlt } from './Rating';
import BookGrid from './BookGrid';
import {NavPeminjaman, NavBacaBalik} from './NavPeminjaman';
import ZoomOutImg from './zoomOutImages';
import Loading from './LoadingScreen';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        height: '100%',
        paddingBottom: 'calc(3.8rem + 18px)',
    },
    divider: {
        margin: theme.spacing(0, 2),
    },
    media: {
        width: `calc(100% + ${theme.spacing})`,
        height: 365,
        marginLeft: theme.spacing(-2),
        marginRight: theme.spacing(-2),
    },
    card: {
        marginTop: -66,
        borderRadius: 10,
        boxShadow: '5px 0px 32px rgba(21, 21, 21, 0.2)',
    },
    content: {
        margin: theme.spacing(1),
        marginBottom: theme.spacing(0),
    },
    bottomSpacing: {
        marginBottom: theme.spacing(2),
    },
    text: {
        marginTop: theme.spacing(5),
        marginBottom: theme.spacing(3),
    },
    division: {
        width: `calc(100% + ${theme.spacing(4)})`,
        height: 12,
        marginLeft: theme.spacing(-2),
        marginRight: theme.spacing(-2),
        backgroundColor: '#f2f2f2',
    },
    btn: {
        textTransform: 'inherit',
        textAlign: 'left',
        marginLeft: 0,
        marginRight: 0,
        paddingLeft: 0,
        paddingRight: 0,
        zIndex: 100,
    },
    backbtn: {
        margin: theme.spacing(0),
        background: 'rgba(34, 34, 34, 0.7)',

        positition: 'relative',
        top: theme.spacing(4),
        float: 'left',

        '&:hover': {
            background: 'rgba(34, 34, 34, 0.2)',
        }
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

const StyledPopup = styled(Popup)`
    &-overlay {
        background: rgba(34, 34, 34, 0.7),
    }
    &-content {
        background: transparent;
        border: none;
    }
`;

const tkn = JSON.parse(localStorage.getItem('login'));

var token;
if (tkn) {
    token = tkn.token;
} else {
    token = '';
}
const urlCuy = 'https://libry.thareeq.id';

export default function Koleksiku({ match }) {
    const classes = useStyles();
    const history = useHistory();
    const [books, setBooks] = useState([]);
    const [wishlist, setWishlist] = useState(null);
    const [error, setError] = useState([]);
    const [ulasan, setUlasan] = useState([]);
    const [load, setLoad] = useState(true);
    const [penulisLain, setPenulisLain] = useState([]);
    const [penerbitLain, setPenerbitLain] = useState([]);
    const [pinjam, setPinjam] = useState(false);
    const [pinjamP, setPinjamP] = useState([]);

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
            `${urlCuy}/api/buku/${match.params.id}`, requestOptions
        );
        const books = await data.json();
        const data1 = await fetch(
            books.buku_lain_penerbit, requestOptions
        );
        const data2 = await fetch(
            books.buku_lain_penulis, requestOptions
        );
        var penulisLain = await data2.json();
        penulisLain = Array.from(penulisLain);
        var penerbitLain = await data1.json();
        penerbitLain = Array.from(penerbitLain);
        console.log(penulisLain);
        console.log(books.ulasan.jumlah);
        console.log(books);
        setBooks(books);
        setPenulisLain(penulisLain);
        setPenerbitLain(penerbitLain);
        setUlasan(books.ulasan);
        if (books.pinjam){
            setLoad(true);
            setPinjam(true);
        }
        if (books.fav) setWishlist(1);
        await fetchBukuPinjam(books.judul);
    }

    const fetchBukuPinjam = async (judul) => {
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
        var datata = await data.json();
        datata = Array.from(datata);
        for(var i = 0; i < datata.length; i++){
            if(JSON.stringify(datata[i].judul) === JSON.stringify(judul)){
                console.log(datata[i]);
                setPinjamP(datata[i]);
            }
        }
        setLoad(false);
    }

    const handleWishlist = (e) => {
        const idId = match.params.id;
        const requestOptions = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'content-type': 'application/json',
                'Authorization': `Bearer ${token}`,
                'Access-Control-Allow-Origin': '*',
            },
            body: `{"buku" : "${idId}"}`,
        };
        if (!wishlist) {
            fetch(`${urlCuy}/api/wishlist`, requestOptions)
                .then(response => {
                    const data = response.json();
                    console.log(data);
                    setWishlist(1);
                    if (!response.ok) {
                        // get error message from body or default to response status
                        setError((data && data.message) || response.status);
                        return Promise.reject(error);
                    }
                })
                .catch(error => {
                    setError({ errorMessage: error.toString() });
                    console.error('There was an error!', error);
                });
        } else {
            fetch(`${urlCuy}/api/wishlist/delete`, requestOptions)
                .then(response => {
                    const data = response.json();
                    console.log(data);
                    setWishlist(null);
                    if (!response.ok) {
                        // get error message from body or default to response status
                        setError((data && data.message) || response.status);
                        return Promise.reject(error);
                    }
                })
                .catch(error => {
                    setError({ errorMessage: error.toString() });
                    console.error('There was an error!', error);
                });
        }
    }

    useEffect(() => {
        console.log(match.params.id);
        fetchDetailBooks();
        
    }, []);

    return (

        <div className={classes.root}>
            {load ? (
                <div>
                    <Loading />
                </div>
            ) : (
                <div>
                    <IconButton onClick={() => history.goBack()} className={classes.backbtn} >
                        <Icon icon={bxArrowBack} style={{ color: '#f2f2f2', fontSize: 24 }} />
                    </IconButton>
                    <StyledPopup modal
                        contentStyle={{ background: 'transparent', border: 'none', width: '75%' }}
                        trigger=
                        {<CardMedia
                            image={`${urlCuy}/cover-buku/${books.cover}`}
                            className={classes.media}>
                        </CardMedia>}>
                        {close => <ZoomOutImg close={close} cover={`${urlCuy}/cover-buku/${books.cover}`} judul={books.judul} penulis={books.penulis} />}
                    </StyledPopup>

                    <Card className={classes.card}>
                        <CardContent className={classes.content}>
                            <Grid container direction='row' style={{ marginBottom: '1rem' }}>
                                <Grid item>
                                    <Typography variant='h2' component='h1' gutterBottom>
                                        {books.judul}
                                    </Typography>
                                    <Typography variant='h3' component='h2' color='textSecondary'>
                                        Oleh {books.penulis}
                                    </Typography>
                                </Grid>
                                <div style={{ flexGrow: 1 }} />
                                <IconButton onClick={handleWishlist}>
                                    {wishlist ? <Icon icon={baselineFavorite} style={{ color: '#cc5a71', fontSize: '32px' }} /> : <Icon icon={roundFavoriteBorder} style={{ color: '#cc5a71', fontSize: '32px' }} />}
                                </IconButton>
                            </Grid>
                            <Grid container direction='row'>
                                <RatingAlt rating={books.rating} jmlUlasan={ulasan.jumlah} />
                                <Divider orientation="vertical" flexItem className={classes.divider} />
                                <Grid item style={{ textAlign: 'center' }}>
                                    <Icon icon={outlineLibraryBooks} style={{ color: '#222222', fontSize: '17px' }} />
                                    <Typography variant='body1' component='p' color='textSecondary'>
                                        {(books.fisik && books.digital) ? 'Buku fisik dan Digital' : books.fisik ? 'Buku Fisik' : 'eBook'}
                                    </Typography>
                                </Grid>
                                {/* 
                    <Divider orientation="vertical" flexItem className={classes.divider} />
                        <Grid item style={{ textAlign: 'center' }}>
                        <Typography variant='h3' component='p'>03</Typography>
                        <Typography variant='body1' component='p' color='textSecondary'>
                            Salinan
                        </Typography>
                    </Grid> */}
                            </Grid>
                        </CardContent>
                    </Card>
                    <Box className={classes.text}>
                        <Typography variant='h3' component='h3' className={classes.bottomSpacing} style={{ fontWeight: 600 }}>
                            Detail Buku
                        </Typography>
                        <Typography variant='body1' component='span' style={{ fontWeight: 600 }}>
                            ISBN &nbsp;
                        </Typography>
                        <Typography variant='body1' component='span' color='textSecondary'>
                            {books.isbn}
                        </Typography>
                        <br />
                        <Typography variant='body1' component='span' style={{ fontWeight: 600 }}>
                            Jumlah Halaman &nbsp;
                        </Typography>
                        <Typography variant='body1' component='span' color='textSecondary'>
                            {books.halaman} halaman
                        </Typography>
                        <br />
                        <Typography variant='body1' component='span' style={{ fontWeight: 600 }}>
                            Penerbit &nbsp;
                        </Typography>
                        <Typography variant='body1' component='span' color='textSecondary'>
                            {books.penerbit}
                        </Typography>
                        <br />
                        <Typography variant='body1' component='span' style={{ fontWeight: 600 }}>
                            Tahun Terbit &nbsp;
                        </Typography>
                        <Typography variant='body1' component='span' color='textSecondary'>
                            {books.tahun}
                        </Typography>
                    </Box>
                    <div className={classes.division} />
                    <Box className={classes.text}>
                        <Typography variant='h3' component='h3' className={classes.bottomSpacing} style={{ fontWeight: 600 }}>
                            Sinopsis buku
                        </Typography>
                        <Typography variant='body1' component='p'>
                            {books.sinopsis}
                        </Typography>
                    </Box>
                    <div className={classes.division} />
                    <Box className={classes.text}>
                        <Grid container direction='row' style={{ width: '100%' }}>
                            <Button
                                fullWidth
                                className={classes.btn}
                                endIcon={
                                    <Icon icon={bxChevronRight}
                                        style={{ color: '#151515', fontSize: '1.2rem' }} />
                                }
                                component={Link} to={`/beriKomentar/${match.params.id}`}
                            >
                                <Grid container direction='column'>
                                    <Typography variant='h3' component='h3' style={{ fontWeight: 600 }}>
                                        Beri rating buku ini
                        </Typography>
                                    <Typography variant='body1' component='p' color='textSecondary'>
                                        Sampaikan pendapat Anda
                        </Typography>
                                </Grid>
                                <div style={{ flexGrow: 1 }} />
                            </Button>
                        </Grid>
                    </Box>
                    <div className={classes.division} />
                    <Link to={`/komentar/${match.params.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                        <Review className={classes.text} rating={books.rating} jmlUlasan={ulasan.jumlah} />
                    </Link>
                    <div className={classes.division} />
                    <Box className={classes.text}>
                        <Grid container direction='row'>
                            <Button
                                fullWidth
                                className={classes.btn}
                                endIcon={
                                    <Icon icon={bxChevronRight}
                                        style={{ color: '#151515', fontSize: '1.2rem' }} />
                                }
                                component={Link} to={{
                                    pathname: '/detail',
                                    state: {
                                        penulis: true,
                                        message: `Buku dari ${books.penulis}`,
                                        link: `${books.buku_lain_penulis}`
                                    }
                                }}
                            >
                                <Typography variant='h3' component='h3' style={{ fontWeight: 600 }}>
                                    Buku lain karya Penulis
                    </Typography>
                                <div style={{ flexGrow: 1 }} />
                            </Button>
                        </Grid>
                        <Box component='div' className={classes.gridlist}>
                            <GridList className={classes.gridlistChild} component='div' cellHeight={'auto'}>
                                {penulisLain.map(item => (
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
                    </Box>
                    <div className={classes.division} />
                    <Box className={classes.text}>
                        <Grid container direction='row'>
                            <Button
                                fullWidth
                                className={classes.btn}
                                endIcon={
                                    <Icon icon={bxChevronRight}
                                        style={{ color: '#151515', fontSize: '1.2rem' }} />
                                }
                                component={Link} to={{
                                    pathname: '/detail',
                                    state: {
                                        penerbit: true,
                                        message: `Buku dari ${books.penerbit}`,
                                        link: books.buku_lain_penerbit
                                    }
                                }}
                            >
                                <Typography variant='h3' component='h3' style={{ fontWeight: 600 }}>
                                    Buku lain dari penerbit {books.penerbit}
                                </Typography>
                                <div style={{ flexGrow: 1 }} />
                            </Button>
                        </Grid>
                        <Box component='div' className={classes.gridlist}>
                            <GridList className={classes.gridlistChild} component='div' cellHeight={'auto'}>
                                {penerbitLain.map(item => (
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
                    </Box>
                </div>
                )}

            {load ? '' : pinjam ? <NavBacaBalik token={token} id={pinjamP.id} judul={pinjamP.judul} tipe={pinjamP.tipe} file={pinjamP.file_location} /> : <NavPeminjaman booksId={match.params.id} fisik={books.fisik} digital={books.digital} pinjam={books.pinjam} />}
        </div>
    );
}