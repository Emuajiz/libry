import React from 'react';
import { createMuiTheme, responsiveFontSizes, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import CategoriesTab from './CategoriesTab'
import Booklist from './BookList'

const useStyles = makeStyles((theme) => ({
    root: {
        margin: theme.spacing(2),
    },
    Title: {
        marginTop: theme.spacing(2),
    },
}));

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

export default function Content() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <ThemeProvider theme={theme}>
                <Typography variant="h4" component='h1'>Selamat datang, Aldi</Typography>
                <Divider />
                <CategoriesTab />
                <Typography variant='h5' component='h2' className={classes.Title}>Buku pilihan untukmu</Typography>
                <Booklist />
            </ThemeProvider>
        </div>
    );
}