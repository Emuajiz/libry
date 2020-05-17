import React from 'react';
import { Redirect } from 'react-router-dom';
import { makeStyles
    // , withStyles 
} from '@material-ui/core/styles';
import { Typography, Avatar, Grid, Button } from '@material-ui/core';
import { Icon } from '@iconify/react';
import bxChevronRight from '@iconify/icons-bx/bx-chevron-right';
import bxsExit from '@iconify/icons-bx/bxs-exit';

// const SmallAvatar = withStyles((theme) => ({
//     root: {
//         backgroundColor: `${theme.palette.background.paper}`,
//         border: `2px solid ${theme.palette.background.paper}`,
//     },
// }))(IconButton);

const useStyles = makeStyles((theme) => ({
    root: {
        paddingTop: theme.spacing(6),
        paddingBottom: '2rem',
        minHeight: `100vh`,
    },
    largeAvatar: {
        height: theme.spacing(16),
        width: theme.spacing(16),
        boxShadow: '5px 8px 18px rgba(21, 21, 21, 0.10)',
    },
    spaceTop: {
        textAlign: 'center',
        marginTop: theme.spacing(3),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    spaceTop1: {
        textAlign: 'center',
        marginTop: theme.spacing(1),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    divider: {
        marginTop: theme.spacing(2),
        height: 12,
        width: '100%',
        backgroundColor: '#f2f2f2',
    },
    btn: {
        justifyContent: 'flex-start',
        height: 55,
        marginTop: theme.spacing(1),
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

export default function Profil() {
    const classes = useStyles();
    const [logout, setLogout] = React.useState(false);
    const [profile, setProfile] = React.useState([]);

    const handlerLogout = () => {
        localStorage.clear();
        setLogout(true);
    };

    React.useEffect(() =>{
        fetchProfile();
    }, [])
    
    const fetchProfile = async () => {
        const requestOptions = {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'content-type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
        };
        const data = await fetch(
            `${urlCuy}/api/user`, requestOptions
        );
        const profile = await data.json();
        setProfile(profile);
        console.log(profile);
    }
    return (
        <Grid container className={classes.root} direction='column' alignItems='center' spacing={4}>
            {(logout) ? <Redirect to='/login' /> : null}
            <Avatar
                alt={profile.nama}
                className={classes.largeAvatar}
            />
            <div class={classes.spaceTop}>
                <Typography variant='h3' component='h3' gutterBottom>
                    {profile.nama}
                </Typography>
            </div>
            <div class={classes.spaceTop1}>
                <Typography variant='body1' component='p' gutterBottom style={{fontAlign: 'center'}}>
                    {profile.email}
                </Typography>
                <Typography variant='body1' component='p' gutterBottom style={{fontAlign: 'center'}}>
                    {profile.nomor}
                </Typography>
            </div>
            <div className={classes.divider} />
            <Grid item style={{width: '100%'}}>
                <Button fullWidth
                    className={classes.btn}
                    onClick={handlerLogout}
                    startIcon={<Icon icon={bxsExit} style={{ color: '#cc5a71', fontSize: '1.5rem' }} />}
                    endIcon={<Icon icon={bxChevronRight}
                    style={{ color: '#151515', fontSize: '22px' }} />}>
                        Logout
                    <div style={{ flexGrow: 1 }} />
                </Button>
            </Grid>
        </Grid >
    );
}