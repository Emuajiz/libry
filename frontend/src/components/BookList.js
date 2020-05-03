import React from 'react';
import { createMuiTheme, responsiveFontSizes, makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, CardMedia, Typography, Chip} from '@material-ui/core'

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

const useStyles = makeStyles({
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
        height: 230,
    },
    pos: {
        marginBottom: 12,
    },
    Booklist: {
        width: '100%',
        display: 'flex',
        flexFlow: 'row wrap',
        marginTop: theme.spacing(3),
    },
    gridList: {
        flexWrap: 'nowrap',
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: 'translateZ(0)',
    },
    Title: {
        marginBottom: theme.spacing(2),
    },
});

export default function Booklist() {
    const classes = useStyles();
    return (
        <div className={classes.Booklist}>
            <Card className={classes.root} variant='outlined'>
                <CardMedia className={classes.media}
                    image={require('../images/contohBuku.jpg')} />
                <CardContent>
                    <Typography variant="h6" component="h3">
                        Judulnya apa ya?
                        </Typography>
                    <Typography variant="body1" gutterBottom component="h4" color='textSecondary'>
                        Penulis
                        </Typography>
                    <Chip size="small" label="Kategori" />
                </CardContent>
            </Card>
            <Card className={classes.root} variant='outlined'>
                <CardMedia className={classes.media}
                    image={require('../images/contohBuku.jpg')} />
                <CardContent>
                    <Typography variant="h6" component="h3">
                        Judulnya apa ya?
                        </Typography>
                    <Typography variant="body1" gutterBottom component="h4" color='textSecondary'>
                        Penulis
                        </Typography>
                    <Chip size="small" label="Kategori" />
                </CardContent>
            </Card>
            <Card className={classes.root} variant='outlined'>
                <CardMedia className={classes.media}
                    image={require('../images/contohBuku.jpg')} />
                <CardContent>
                    <Typography variant="h6" component="h3">
                        Judulnya apa ya?
                        </Typography>
                    <Typography variant="body1" gutterBottom component="h4" color='textSecondary'>
                        Penulis
                        </Typography>
                    <Chip size="small" label="Kategori" />
                </CardContent>
            </Card>
        </div>
    );
}