import React from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import { Box, CardContent, CardMedia, Typography, Chip, Paper, Button } from '@material-ui/core';
import Rating from './Rating';

const useStyles = makeStyles((theme) => ({
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

function BookListAlt({ id, judul, penulis, links, cover }) {
    const classes = useStyles();
    return(
        <Box component='div' className={classes.gridlist} key={id}>
            <Paper className={classes.card} elevation={2} component={Link} to={'/book/' + links.split('/')[5]} style={{ textDecoration: 'none', color: 'inherit', }} >
                <Box zIndex={1}>
                    <CardMedia image={cover} className={classes.media} />
                </Box>
                <CardContent className={classes.content}>
                    <Typography variant='h4' component='h4'>
                        {judul}
                    </Typography>
                    <Typography variant="body1" gutterBottom component="h4" color='textSecondary'>
                        {penulis}
                    </Typography>
                    <Button
                        fullWidth
                        component={Link}
                        to={'/beriKomentar/' + links.split('/')[5]}
                        variant='outlined'
                        size='small'
                    >
                        Beri Ulasan
                    </Button>
                </CardContent>
            </Paper>
        </Box>
    );
}

export default function BookList({ id, judul, penulis, kategori, cover, rating }) {
    const classes = useStyles();
    console.log(id);
    return (
        <Box component='div' className={classes.gridlist}>
            <Paper className={classes.card} elevation={2} component={Link} to={'/book/' + id} style={{ textDecoration: 'none', color: 'inherit', }} >
                <Box zIndex={1}>
                    <CardMedia image={cover} className={classes.media} />
                </Box>
                <CardContent className={classes.content}>
                    <Typography variant='h4' component='h4'>
                        {judul}
                    </Typography>
                    <Typography variant="body1" gutterBottom component="h4" color='textSecondary'>
                        {penulis}
                    </Typography>
                    <Rating rating={rating} />
                    <Chip variant="outlined" size="small" label={kategori} />
                </CardContent>
            </Paper>
        </Box>
    );
}

export {BookListAlt, BookList};