import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, GridList, GridListTile, CardContent, CardMedia, Typography, Chip } from '@material-ui/core'


const useStyles = makeStyles((theme) => ({
    media: {
        height: '10rem',
        boxShadow: '5px 10px 32px rgba(21, 21, 21, 0.2)',
        borderRadius: 4,
    },
    Booklist: {
        marginRight: theme.spacing(1),
    },
    gridlist: {
        display: 'flex',
        flexWrap: 'wrap',
        width: '100%',
        overflow: 'hidden',
        marginTop: theme.spacing(2),
    },
    content: {
        paddingTop: theme.spacing(1.5),
        padding: 0,
    },
    gridlistChild: {
        flexWrap: 'nowrap',
        
    },
}));

export default function BookGrid() {
    const classes = useStyles();
    return (
        <Box component='div'className={classes.gridlist}>
            <GridList className={classes.gridlistChild} component='div' cellHeight={'auto'} cols={3.5}>
                <GridListTile className={classes.Booklist} component='div'>
                    <CardMedia className={classes.media}
                        image={require('../images/contohBuku.jpg')} />
                    <CardContent className={classes.content}>
                        <Typography variant="h4" component="h3">
                            Judulnya apa ya?
                        </Typography>
                        <Typography variant="body1" gutterBottom component="h4" color='textSecondary'>
                            Penulis
                        </Typography>
                        <Chip variant="outlined" size="small" label="Kategori" />
                    </CardContent>
                </GridListTile>
                <GridListTile className={classes.Booklist} component='div'>
                    <CardMedia className={classes.media}
                        image={require('../images/contohBuku.jpg')} />
                    <CardContent className={classes.content}>
                        <Typography variant="h4" component="h3">
                            Judulnya apa ya?
                        </Typography>
                        <Typography variant="body1" gutterBottom component="h4" color='textSecondary'>
                            Penulis
                        </Typography>
                        <Chip variant="outlined" size="small" label="Kategori" />
                    </CardContent>
                </GridListTile>
                <GridListTile className={classes.Booklist} component='div'>
                    <CardMedia className={classes.media}
                        image={require('../images/contohBuku.jpg')} />
                    <CardContent className={classes.content}>
                        <Typography variant="h4" component="h3">
                            Judulnya apa ya?
                        </Typography>
                        <Typography variant="body1" gutterBottom component="h4" color='textSecondary'>
                            Penulis
                        </Typography>
                        <Chip variant="outlined" size="small" label="Kategori" />
                    </CardContent>
                </GridListTile>
                <GridListTile className={classes.Booklist} component='div'>
                    <CardMedia className={classes.media}
                        image={require('../images/contohBuku.jpg')} />
                    <CardContent className={classes.content}>
                        <Typography variant="h4" component="h3">
                            Judulnya apa ya?
                        </Typography>
                        <Typography variant="body1" gutterBottom component="h4" color='textSecondary'>
                            Penulis
                        </Typography>
                        <Chip variant="outlined" size="small" label="Kategori" />
                    </CardContent>
                </GridListTile>
                <GridListTile className={classes.Booklist} component='div'>
                    <CardMedia className={classes.media}
                        image={require('../images/contohBuku.jpg')} />
                    <CardContent className={classes.content}>
                        <Typography variant="h4" component="h3">
                            Judulnya apa ya?
                        </Typography>
                        <Typography variant="body1" gutterBottom component="h4" color='textSecondary'>
                            Penulis
                        </Typography>
                        <Chip variant="outlined" size="small" label="Kategori" />
                    </CardContent>
                </GridListTile>
            </GridList>
        </Box>
    );
}