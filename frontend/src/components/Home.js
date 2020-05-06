import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Divider, Button, Box } from '@material-ui/core';
import AppBar from './Appbar'
import CategoriesTab from './CategoriesTab'
import BookGrid from './BookGrid'


const useStyles = makeStyles((theme) => ({
    root: {
        paddingBottom: '4.2rem',
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
}));

export default function Home() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar />
            <Box className={classes.spaceTopDiv}>
                <Typography variant="h2" component='h1'>Selamat datang, Aldi</Typography>
            </Box>
            <Divider className={classes.spaceTop} />
            <CategoriesTab />
            <Typography variant='h3' component='h2' className={classes.spaceTop2}>Buku terpopuler saat ini</Typography>
            <BookGrid />
            <Typography variant='h3' component='h2' className={classes.spaceTop3}>Buku pilihan untumu</Typography>
            <BookGrid />
            <Button fullWidth variant='contained' size='medium' color='secondary' className={classes.spaceTop}>
                Lainnya
            </Button>
        </div>
    );
}