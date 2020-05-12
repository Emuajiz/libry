import React from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import { Box, CardContent, CardMedia, Typography, Chip, Paper } from '@material-ui/core';
import Rating from './Rating';


const useStyles = makeStyles((theme) => ({
    root: {
        paddingBottom: '5rem',
    },
    media: {
        height: '10rem',
        width: '6.5rem',
        boxShadow: '5px 5px 16px rgba(21, 21, 21, 0.1)',
        borderRadius: 4,
        marginLeft: '1rem',
        marginBottom: '1rem',
    },
    card: {
        display: 'flex',
        width: '95%',
        height: 130,
        alignItems: 'flex-end',
        paddingRight: theme.spacing(2),
        marginTop: '4rem',

        background: '#FCFCFC',
        boxShadow: '5px 5px 12px rgba(21, 21, 21, 0.2)',
        borderRadius: 6,
    },
    gridlist: {
        display: 'flex',
        flexWrap: 'wrap',
        width: '100%',
        height: '100%',
        // overflow: 'hidden',
        marginTop: theme.spacing(2),
    },
    content: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        bottom: 0,

        paddingTop: theme.spacing(1.5),
    },
    gridlistChild: {
        flexWrap: 'nowrap',

    },
}));

export default function BookList() {
    const classes = useStyles();
    const booklist = [];
    for (var i = 0; i < 5; i++) {
        booklist.push(
            <Paper className={classes.card} elevation={2} component={Link} to='/books' style={{textDecoration: 'none', color: 'inherit',}} >
                <Box zIndex={1}>
                    <CardMedia image={require('../images/contohBuku.jpg')} className={classes.media} />
                </Box>
                <CardContent className={classes.content}>
                    <Typography variant='h4' component='h4'>
                        Judul Apa Ya?
                        </Typography>
                    <Typography variant="body1" gutterBottom component="h4" color='textSecondary'>
                        Penulis
                        </Typography>
                    <Rating />
                    <Chip variant="outlined" size="small" label="Kategori" />
                </CardContent>
            </Paper>
        );
    }
    return (
        <Box className={classes.root} component='div'>
            <Box component='div' className={classes.gridlist}>
                {booklist}
            </Box>
        </Box>
    );
}