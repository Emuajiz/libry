import React from 'react';
import { createMuiTheme, responsiveFontSizes, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import { Typography, Divider, Button, Box } from '@material-ui/core';
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

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

export default function Content() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <ThemeProvider theme={theme}>
                <Box className={classes.spaceTop}>
                    <Typography variant="h4" component='h1'>Selamat datang, Aldi</Typography>
                </Box>
                <Divider className={classes.spaceTop}/>
                <CategoriesTab />
                <Typography variant='h5' component='h2' className={classes.spaceTop}>Buku terpopuler saat ini</Typography>
                <Booklist />
                <Typography variant='h5' component='h2' className={classes.spaceTop}>Buku pilihan untumu</Typography>
                <Booklist />
                <Button fullWidth variant='contained' size='medium' color='primary' className={classes.spaceTop}>
                    Lainnya
                </Button>
            </ThemeProvider>
        </div>
    );
}