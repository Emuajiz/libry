import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import { Typography, Divider, Button, Box, GridList } from '@material-ui/core';

import { Icon } from '@iconify/react';
import bxChevronRight from '@iconify/icons-bx/bx-chevron-right';

import AppBar from './Appbar'
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

const urlCuy = 'http://8198552c.ngrok.io';
const token = 'JvsUQymW7UEfNWoYBUEMREo7B4qdYjult7VSuSPUqyQsFkJwAL2PL1eF8f3LYrWQWlnKSEr5vZPFdQuS';

export default function Home() {
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
            `${urlCuy}/api/buku`, requestOptions
        );
        const books = await data.json();
        console.log(books.data);
        setBooks(books.data);
    }
    return (
        <div className={classes.root}>
            <AppBar />
            <Box className={classes.spaceTopDiv}>
                <Typography variant="h2" component='h1'>Selamat datang, Aldi</Typography>
            </Box>
            <Divider className={classes.spaceTop} />
            <Typography variant="h3" component="h2" className={classes.spaceTop2}>Telusur</Typography>
            <CategoriesTab />
            <Button
                fullWidth className={classes.btn}
                endIcon={<Icon icon={bxChevronRight}
                    style={{ color: '#151515', fontSize: '22px' }} />}
                component={Link} to='/detail'
            >
                <Typography variant='h3' component='h2' >Buku terpopuler saat ini</Typography>
                <div style={{ flexGrow: 1 }} />
            </Button>
            <Box component='div' className={classes.gridlist}>
                <GridList className={classes.gridlistChild} component='div' cellHeight={'auto'}>
                    {books.map(item => (
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
                component={Link} to='/detail' >
                <Typography variant='h3' component='h2' >Buku pilihan untukmu</Typography>
                <div style={{ flexGrow: 1 }} />
            </Button>
            <Box component='div' className={classes.gridlist}>
                <GridList className={classes.gridlistChild} component='div' cellHeight={'auto'}>
                    {books.map(item => (
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
            <Button fullWidth variant='contained' size='medium' color='secondary' className={classes.spaceTop}>
                Lainnya
            </Button>
        </div>
    );
}