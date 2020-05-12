import React from 'react';
import { Grid, Typography, IconButton, TextField, InputAdornment, Button } from '@material-ui/core';
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';
import { makeStyles, withStyles } from '@material-ui/styles'

import { Icon } from '@iconify/react';
import outlineLibraryBooks from '@iconify/icons-ic/outline-library-books';
import bxBookReader from '@iconify/icons-bx/bx-book-reader';
import bxArrowBack from '@iconify/icons-bx/bx-arrow-back';
import bxTimeFive from '@iconify/icons-bx/bx-time-five';
import bxChevronRight from '@iconify/icons-bx/bx-chevron-right';

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        paddingTop: theme.spacing(3),
    },
    container: {
        minHeight: '82vh',
    },
    items: {
        marginLeft: theme.spacing(-1),
    },
    itemText: {
        width: '100%',
        marginTop: theme.spacing(5),
        marginBottom: theme.spacing(3),
    },
}));

const MetodePeminjaman = withStyles((theme) => ({
    root: {
        width: '7.5rem',
        height: 64,
        overflow: 'hidden',
        padding: theme.spacing(0, 1),
        border: '1.5px solid #CC5A71',

        textAlign: 'right',
        textTransform: 'inherit',
    },
    selected: {
        '&&&': {
            backgroundColor: '#CC5A71',
        },
        '&& *': {
            color: '#f2f2f2'
        }
    }
}))(ToggleButton);

export default function PeminjamanBuku() {
    const [metode, setMetode] = React.useState('');
    const handleMetode = (event, newMetode) => {
        if (newMetode !== null) {
            setMetode(newMetode);
        }
    };
    const classes = useStyles();

    return (
        <Grid container className={classes.root} direction='column' justify='flex-start'>
            <Grid container alignItems='center' className={classes.items}>
                <IconButton>
                    <Icon icon={bxArrowBack} style={{ color: '#cc5a71', fontSize: '29px' }} />
                </IconButton>
                <Typography variant='h1' component='h1' style={{ marginLeft: '0.75rem', fontWeight: 'bold' }}>
                    Buku Populer
                </Typography>
            </Grid>
            <Grid container className={classes.container} direction='column' jutsify='flex-start'>
                <Grid item className={classes.itemText}>
                    <Typography variant='h1' component='h1' gutterBottom style={{ marginBottom: '1rem' }}>
                        Metode Peminjaman
                    </Typography>
                    <Typography variant='h3' component='h2' style={{ fontWeight: 300 }} color='textSecondary' gutterBottom>
                        Silakan pilih bentuk peminjaman yang diinginkan
                    </Typography>
                </Grid>
                <ToggleButtonGroup
                    value={metode}
                    exclusive
                    onChange={handleMetode}
                    aria-label="metode peminjaman"
                >
                    <MetodePeminjaman
                        value="ebook"
                        color='secondary'
                    >
                        <Icon icon={outlineLibraryBooks}
                            style={{
                                color: '#cc5a71',
                                fontSize: '3rem',
                                margin: '0 0.375rem -2.2rem 0',
                            }} />
                        <Typography variant='body1' component='span' color='secondary' style={{ fontWeight: 'bold' }}>
                            E-book
                    </Typography>
                    </MetodePeminjaman>
                    <MetodePeminjaman
                        value="buku-fisik"
                        color='secondary'
                    >
                        <Icon icon={bxBookReader}
                            style={{
                                color: '#cc5a71',
                                fontSize: '3rem',
                                margin: '0 0.375rem -2.2rem 0',
                            }} />
                        <Typography variant='body1' component='span' color='secondary' style={{ fontWeight: 'bold' }}>
                            Buku Fisik
                    </Typography>
                    </MetodePeminjaman>
                </ToggleButtonGroup>
                <Grid item className={classes.itemText}>
                    <Typography variant='h1' component='h1' gutterBottom style={{ marginBottom: '1rem' }}>
                        Waktu Peminjaman
                    </Typography>
                    <Typography variant='h3' component='h2' style={{ fontWeight: 300 }} color='textSecondary' gutterBottom>
                        Silakan pilih waktu kedatangan<br /> sesuai dengan keinginan
                    </Typography>
                </Grid>
                <TextField
                    fullWidth
                    id="outlined-basic"
                    label="E-mail"
                    variant='filled'
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <Icon icon={bxTimeFive} style={{ color: '#c89b7b', fontSize: '22px' }} />
                            </InputAdornment>
                        ),
                    }}
                    color='primary' />
                <div style={{flexGrow:1}}/>
                <Button 
                    color='secondary' 
                    variant='contained' 
                    fullWidth endIcon={
                        <Icon icon={bxChevronRight} style={{color: '#fcfcfc', fontSize: '22px'}} />
                    }
                    className={classes.btn}>
                    Selanjutnya
                </Button>
            </Grid>
        </Grid>
    );
}