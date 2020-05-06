import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { GridList, GridListTile, CardContent, CardMedia, Typography, Chip } from '@material-ui/core'


const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: 120,
        maxWidth: '100%',
        marginRight: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
    title: {
        fontSize: 173,
    },
    media: {
        height: 280,
        boxhadow: '5px 10px 32px rgba(21, 21, 21, 0.2)',
    },
    pos: {
        marginBottom: 12,
    },
    Booklist: {
        marginRight: theme.spacing(1),
    },
    gridlist: {
        display: 'flex',
        flexWrap: 'wrap',
        overflow: 'hidden',
        marginTop: theme.spacing(3),
    },
    gridlistChild: {
        flexWrap: 'nowrap',
    },
    Title: {
        marginBottom: theme.spacing(2),
    },
}));

export default function BookGridBig() {
    const classes = useStyles();
    return (
        <div className={classes.gridlist}>
            <GridList className={classes.gridlistChild} cellHeight={'auto'}>
                <GridListTile className={classes.Booklist}>
                    <CardMedia className={classes.media}
                        image={require('../images/contohBuku.jpg')} />
                    <CardContent>
                        <Typography variant="h6" component="h3">
                            Judulnya apa ya?
                        </Typography>
                        <Typography variant="body1" gutterBottom component="h4" color='textSecondary'>
                            Penulis
                        </Typography>
                        <Chip variant="outlined" size="small" label="Kategori" />
                    </CardContent>
                </GridListTile>
                <GridListTile className={classes.Booklist} >
                    <CardMedia className={classes.media}
                        image={require('../images/contohBuku.jpg')} />
                    <CardContent>
                        <Typography variant="h6" component="h3">
                            Judulnya apa ya?
                        </Typography>
                        <Typography variant="body1" gutterBottom component="h4" color='textSecondary'>
                            Penulis
                        </Typography>
                        <Chip variant="outlined" size="small" label="Kategori" />
                    </CardContent>
                </GridListTile>
                <GridListTile className={classes.Booklist} >
                    <CardMedia className={classes.media}
                        image={require('../images/contohBuku.jpg')} />
                    <CardContent>
                        <Typography variant="h6" component="h3">
                            Judulnya apa ya?
                        </Typography>
                        <Typography variant="body1" gutterBottom component="h4" color='textSecondary'>
                            Penulis
                        </Typography>
                        <Chip variant="outlined" size="small" label="Kategori" />
                    </CardContent>
                </GridListTile>
            </GridList>
        </div>
    );
}