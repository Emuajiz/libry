import React from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import {
    TextField, InputAdornment,
    Typography, Button, Grid, Radio,
    RadioGroup, FormControlLabel, FormLabel, IconButton
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

import { Icon } from '@iconify/react';
import emailIcon from '@iconify/icons-mdi/email';
import bxKey from '@iconify/icons-bx/bx-key';
import bxArrowBack from '@iconify/icons-bx/bx-arrow-back';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            marginTop: theme.spacing(2.5),
            width: '100%',
        },
    },
    container: {
        width: '100%',
        minHeight: '100vh',
    },
    items: {
        marginTop: theme.spacing(2),
        marginLeft: theme.spacing(-1),
    },
    items1: {
        marginBottom: theme.spacing(3),
    }
}));

const tkn = JSON.parse(localStorage.getItem('login'));

var token;
if (tkn) {
    token = tkn.token;
} else {
    token = '';
}
const urlCuy = 'http://3e9c1c7e.ngrok.io';

export default function BeriKomentar({ match }) {
    const history = useHistory();
    const classes = useStyles();
    const { register, handleSubmit } = useForm();
    const [message, setMessage] = React.useState('');
    const onSubmit = (data) => {
        console.log(data);
        handlePost(data);
    };

    const handlePost = (data) => {
        const requestOptions = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'content-type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: {
                'buku': data.buku,
                'rating' : data.rating,
                'tulisan' : data.tulisan,
            },
        };
        console.log(requestOptions);
        fetch(`${urlCuy}/api/ulasan`, requestOptions)
            .then(response => {
                response.json().then((result) => {
                    console.log(result);
                    setMessage(result.message);
                    if (result.message === 'kamu harus pinjam dulu ya') {
                        setOpen(true);
                        console.log(open);
                    }
                    console.warn('result', result);
                })

            })
    }

    const [selectedValue, setSelectedValue] = React.useState(0);
    const [open, setOpen] = React.useState(false);
    const handleChange = (event) => {
        setSelectedValue(event.target.value);
        console.log(parseInt(selectedValue));
    };
    const handleClose = (event, reason) => {
        setOpen(false);
    };

    return (
        <Grid container className={classes.container} direction='column' alignItems='flex-start'>
            <Grid container alignItems='center' className={classes.items}>
                <IconButton onClick={() => history.goBack()}>
                    <Icon icon={bxArrowBack} style={{ color: '#cc5a71', fontSize: '29px' }} />
                </IconButton>
                <Typography variant='h1' component='h1' style={{ marginLeft: '0.75rem', fontWeight: 'bold' }}>
                    Buku Populer
                </Typography>
            </Grid>
            <form className={classes.root} noValidate onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', width: '100%', flexDirection: 'column', marginTop: '1rem' }}>
                <FormLabel component="legend" color='textPrimary'>
                    <Typography variant='h1' component='h1' gutterBottom>
                        Rating
                    </Typography>
                    <Typography variant='h4' component='h2' style={{ fontWeight: 300 }} color='textSecondary' gutterBottom>
                        Silakan beri rating dengan skala dari 0-5
                    </Typography>
                </FormLabel>
                <RadioGroup aria-label="rating" name="rating" value={selectedValue} onChange={handleChange} style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'center' }}>
                    <FormControlLabel value={"0"} control={<Radio inputRef={register} />} label="0" />
                    <FormControlLabel value={"1"} control={<Radio inputRef={register} />} label="1" />
                    <FormControlLabel value={'2'} control={<Radio inputRef={register} />} label="2" />
                    <FormControlLabel value={'3'} control={<Radio inputRef={register} />} label="3" />
                    <FormControlLabel value={'4'} control={<Radio inputRef={register} />} label="4" />
                    <FormControlLabel value={'5'} control={<Radio inputRef={register} />} label="5" />
                </RadioGroup>
                <FormLabel component="legend" color='textPrimary'>
                    <Typography variant='h1' component='h1' gutterBottom>
                        Ulasan
                    </Typography>
                    <Typography variant='h4' component='h2' style={{ fontWeight: 300 }} color='textSecondary' gutterBottom>
                        Silakan berikan ulasan
                    </Typography>
                </FormLabel>
                <TextField
                    id='id-buku'
                    label="ID Buku"
                    name="buku"
                    value={match.params.id}
                    style={{ display: "none" }}
                    inputRef={register}
                />
                <TextField
                    id="rating"
                    label="Beri Ulasan"
                    name='tulisan'
                    type='text'
                    multiline
                    variant='filled'
                    inputRef={register}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <Icon icon={emailIcon} style={{ color: '#c89b7b', fontSize: '1.25rem' }} />
                            </InputAdornment>
                        ),
                    }}
                    color='primary' />
                <div style={{ marginBottom: '6rem' }} />
                <Button
                    variant='contained'
                    fullWidth color='secondary'
                    style={{ borderRadius: 8 }}
                    type='submit'
                >
                    Selanjutnya
                    </Button>
            </form>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="error">
                    {message}
                </Alert>
            </Snackbar>
        </Grid>
    );
}