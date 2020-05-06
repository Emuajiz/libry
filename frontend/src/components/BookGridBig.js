import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, GridList, GridListTile, CardContent, CardMedia, Typography, Chip } from '@material-ui/core'
import LinearProgress from '@material-ui/core/LinearProgress';


const useStyles = makeStyles((theme) => ({
    media: {
        height: 300,
        boxShadow: '5px 10px 32px rgba(21, 21, 21, 0.2)',
        borderRadius: 4,
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
    content: {
        paddingTop: theme.spacing(3),
        padding: 0,
    },
    gridlistChild: {
        flexWrap: 'nowrap',
    },
    progressBaca: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
}));

export default function BookGridBig() {
    const classes = useStyles();
    return (
        <Grid container className={classes.gridlist} direction='column'>
            <GridList className={classes.gridlistChild} cellHeight={'auto'}>
                <GridListTile className={classes.Booklist}>
                    <CardMedia className={classes.media}
                        image={require('../images/contohBuku.jpg')} />
                    <CardContent className={classes.content}>
                        <Typography variant="h3" component="h2">
                            Judulnya apa ya?
                        </Typography>
                        <Typography variant="body1" gutterBottom component="h4" color='textSecondary'>
                            Penulis
                        </Typography>
                        <Grid item direction='row' className={classes.progressBaca}>
                            <LinearProgress variant='determinate' value={80} color='secondary' />
                            <Typography variant="subtitle1" component='span'>80%</Typography>
                        </Grid>
                        <Typography variant='h4' component='h3' paragraph>3 hari tersisa</Typography>
                        <Chip variant="outlined" size="small" label="Kategori" />
                    </CardContent>
                </GridListTile>
                <GridListTile className={classes.Booklist}>
                    <CardMedia className={classes.media}
                        image={require('../images/contohBuku.jpg')} />
                    <CardContent className={classes.content}>
                        <Typography variant="h3" component="h2">
                            Judulnya apa ya?
                        </Typography>
                        <Typography variant="body1" gutterBottom component="h4" color='textSecondary'>
                            Penulis
                        </Typography>
                        <Grid item direction='row' className={classes.progressBaca}>
                            <LinearProgress variant='determinate' value={80} color='secondary' />
                            <Typography variant="subtitle1" component='span'>80%</Typography>
                        </Grid>
                        <Typography variant='h4' component='h3' paragraph>3 hari tersisa</Typography>
                        <Chip variant="outlined" size="small" label="Kategori" />
                    </CardContent>
                </GridListTile>
                <GridListTile className={classes.Booklist}>
                    <CardMedia className={classes.media}
                        image={require('../images/contohBuku.jpg')} />
                    <CardContent className={classes.content}>
                        <Typography variant="h3" component="h2">
                            Judulnya apa ya?
                        </Typography>
                        <Typography variant="body1" gutterBottom component="h4" color='textSecondary'>
                            Penulis
                        </Typography>
                        <Grid item direction='row' className={classes.progressBaca}>
                            <LinearProgress variant='determinate' value={80} color='secondary' />
                            <Typography variant="subtitle1" component='span'>80%</Typography>
                        </Grid>
                        <Typography variant='h4' component='h3' paragraph>3 hari tersisa</Typography>
                        <Chip variant="outlined" size="small" label="Kategori" />
                    </CardContent>
                </GridListTile>
                <GridListTile className={classes.Booklist}>
                    <CardMedia className={classes.media}
                        image={require('../images/contohBuku.jpg')} />
                    <CardContent className={classes.content}>
                        <Typography variant="h3" component="h2">
                            Judulnya apa ya?
                        </Typography>
                        <Typography variant="body1" gutterBottom component="h4" color='textSecondary'>
                            Penulis
                        </Typography>
                        <Grid item direction='row' className={classes.progressBaca}>
                            <LinearProgress variant='determinate' value={80} color='secondary' />
                            <Typography variant="subtitle1" component='span'>80%</Typography>
                        </Grid>
                        <Typography variant='h4' component='h3' paragraph>3 hari tersisa</Typography>
                        <Chip variant="outlined" size="small" label="Kategori" />
                    </CardContent>
                </GridListTile>
                <GridListTile className={classes.Booklist}>
                    <CardMedia className={classes.media}
                        image={require('../images/contohBuku.jpg')} />
                    <CardContent className={classes.content}>
                        <Typography variant="h3" component="h2">
                            Judulnya apa ya?
                        </Typography>
                        <Typography variant="body1" gutterBottom component="h4" color='textSecondary'>
                            Penulis
                        </Typography>
                        <Grid item direction='row' className={classes.progressBaca}>
                            <LinearProgress variant='determinate' value={80} color='secondary' />
                            <Typography variant="subtitle1" component='span'>80%</Typography>
                        </Grid>
                        <Typography variant='h4' component='h3' paragraph>3 hari tersisa</Typography>
                        <Chip variant="outlined" size="small" label="Kategori" />
                    </CardContent>
                </GridListTile>
            </GridList>
        </Grid>
    );
}