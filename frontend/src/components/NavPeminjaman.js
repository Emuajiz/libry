import React from 'react';
import { Link, Redirect } from 'react-router-dom';

import { Button, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import { Icon } from '@iconify/react';
import bxsShareAlt from '@iconify/icons-bx/bxs-share-alt';

const useStyles = makeStyles((theme) => ({
    root: {
        position: 'fixed',
        left: 0,
        bottom: 0,
        width: '100%',

        // marginLeft: theme.spacing(-2),
        // marginRight: theme.spacing(-2),
        padding: theme.spacing(1, 2, 1, 2),

        backgroundColor: '#F2F2F2',
        boxShadow: '0px -4px 18px rgba(0, 0, 0, 0.25)',
        zIndex: 998,
    },
    btn: {
        height: 42,
    }
}));

const urlCuy = 'https://libry.thareeq.id';

function NavBacaBalik({ token, judul, file, id, tipe }) {
    const classes = useStyles();
    const [balik, setBalik] = React.useState(false);
    const [error, setError] = React.useState('');

    var params = {
        pathname: '/baca',
        state: {
            judul: `${judul}`,
            file: `${file}`
        }
    }
    const handleBalik = (e) => {
        const requestOptions = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'content-type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: `{"peminjaman_id" : "${id}"}`,
        };
        fetch(`${urlCuy}/api/balikin`, requestOptions)
            .then(response => {
                const data = response.json();
                console.log(data);
                if (response.ok) setBalik(true);
            })
            .catch(error => {
                setError({ errorMessage: error.toString() });
                console.error('There was an error!', error);
            });
    }
    console.log(tipe);
    return (
        <Grid container direction='row' justify='center' className={classes.root} >
            
            {balik ? <Redirect to='/' /> : ''}
            {(tipe === 'd') ? (
                <div style={{ width: '100%' }}>
                    <Button variant='contained'
                        color='secondary'
                        size='small'
                        className={classes.btn}
                        style={{ marginRight: '0.5rem', width: 'calc(50% - 0.5rem)' }}
                        component={Link} to={params}
                    >
                        Baca Buku
                    </Button>
                    <Button variant='outlined'
                        color='secondary'
                        size='small'
                        className={classes.btn}
                        onClick={handleBalik}
                        style={{ width: `calc(50% - 0.5rem)` }}>
                        Kembalikan Buku
                    </Button>
                </div>
            ) : (
                    <Button variant='contained'
                        color='secondary'
                        size='small'
                        className={classes.btn}
                        onClick={handleBalik}
                        style={{ width: '100%' }}
                    >
                        Kembalikan Buku
                    </Button>
                )}
        </Grid>
    );
}
export default function NavPeminjaman({ booksId, fisik, digital }) {
    const classes = useStyles();
    const params = {
        pathname: `/pinjam/${booksId}`,
        state: {
            fisik: fisik,
            digital: digital
        }
    };
    return (
        <Grid container direction='row' justify='center' className={classes.root} >
            <Button variant='contained'
                color='secondary'
                size='small'
                className={classes.btn}
                style={{ marginRight: '0.5rem', width: 'calc(80% - 0.5rem)' }}
                component={Link} to={params}
            >
                Pinjam Buku
            </Button>
            <Button variant='outlined'
                color='secondary'
                size='small'
                className={classes.btn}
                style={{ width: `calc(20% - 0.5rem)` }}>
                <Icon icon={bxsShareAlt} style={{ color: '#CC5A71', fontSize: '1.2rem' }} />
            </Button>
        </Grid>
    );
}

export { NavBacaBalik, NavPeminjaman };