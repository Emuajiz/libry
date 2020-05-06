import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Divider, Button, Box } from '@material-ui/core';
import AppBar from './Appbar'
import CategoriesTab from './CategoriesTab'
import Booklist from './BookList'


const useStyles = makeStyles((theme) => ({
    root: {
        paddingBottom: '11vh',
    },
    spaceTop: {
        marginTop: theme.spacing(2),
    },
}));

export default function Home() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar />
            <Box className={classes.spaceTop}>
                <Typography variant="h4" component='h1'>Selamat datang, Aldi</Typography>
            </Box>
            <Divider className={classes.spaceTop} />
            <CategoriesTab />
            <Typography variant='h5' component='h2' className={classes.spaceTop}>Buku terpopuler saat ini</Typography>
            <Booklist />
            <Typography variant='h5' component='h2' className={classes.spaceTop}>Buku pilihan untumu</Typography>
            <Booklist />
            <Button fullWidth variant='contained' size='medium' color='secondary' className={classes.spaceTop}>
                Lainnya
            </Button>
        </div>
    );
}