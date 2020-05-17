import React from 'react';
import { Link, Route } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import { Grid, GridList, GridListTile, CardContent, CardMedia, Typography, Chip } from '@material-ui/core'
import LinearProgress from '@material-ui/core/LinearProgress';

import { Icon } from '@iconify/react';
import outlineLibraryBooks from '@iconify/icons-ic/outline-library-books';
import ReadBook from './ReadBook';


const useStyles = makeStyles((theme) => ({
    media: {
        height: 300,
        boxShadow: '5px 10px 24px rgba(21, 21, 21, 0.2)',
        borderRadius: 6,
    },
    Booklist: {
        marginRight: theme.spacing(1),
        textDecoration: 'none', color: 'inherit',
        '& > *': {
            overflow: 'visible',
        }
    },
    content: {
        paddingTop: theme.spacing(3),
        padding: 0,
    },
    gridlist: {
        display: 'flex',
        flexWrap: 'wrap',
        width: `calc(100% + ${theme.spacing(1.5)})`,
        overflow: 'visible',

        marginTop: theme.spacing(3),
        marginRight: theme.spacing(-1.5),
    },
    gridlistChild: {
        flexWrap: 'nowrap',
    },
    jenisBuku: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
}));

export default function BookGridBig({ id, judul, penulis, tipe, file, cover, sisa }) {
    const classes = useStyles();
    const params = {
        pathname: '/baca',
        state: {
            judul: `${judul}`,
            file: `${file}`
        }
    }
    return (
        
        <Grid container maxWidth='xs' className={classes.gridlist} direction='column' component='div'>
            <GridList className={classes.gridlistChild} cellHeight={'auto'} cols={2} component='div'>
                <GridListTile
                    className={classes.Booklist}
                    component={Link} to={params}>
                    <CardMedia className={classes.media}
                        image={cover} />
                    <CardContent className={classes.content}>
                        <Typography variant="h3" component="h2">
                            {judul}
                        </Typography>
                        <Typography variant="body1" gutterBottom component="h4" color='textSecondary'>
                            {penulis}
                        </Typography>
                        <Grid item className={classes.jenisBuku}>
                            <Icon icon={outlineLibraryBooks} style={{ color: '#222222', fontSize: '17px' }} />
                            {tipe === 'd' ?
                                <Typography variant='body1' component='span' color='textSecondary'>Buku Digital</Typography>
                                : <Typography variant='body1' component='span' color='textSecondary'>Buku Fisik</Typography>}
                        </Grid>
                        <Typography variant='h4' component='h3' paragraph>{sisa} hari tersisa</Typography>
                        <Chip variant="outlined" size="small" label="Kategori" />
                    </CardContent>
                </GridListTile>
            </GridList>
        </Grid>
        
    );
}