import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Typography, Avatar, Grid, IconButton, Badge, Button } from '@material-ui/core';
import { Icon } from '@iconify/react';
import bxCamera from '@iconify/icons-bx/bx-camera';
import userAvatarFilledAlt from '@iconify/icons-carbon/user-avatar-filled-alt';
import bxChevronRight from '@iconify/icons-bx/bx-chevron-right';
import mapMarker from '@iconify/icons-mdi/map-marker';
import cogIcon from '@iconify/icons-mdi/cog';

const SmallAvatar = withStyles((theme) => ({
    root: {
        backgroundColor: `${theme.palette.background.paper}`,
        border: `2px solid ${theme.palette.background.paper}`,
    },
}))(IconButton);

const useStyles = makeStyles((theme) => ({
    root: {
        paddingTop: theme.spacing(6),
        paddingBottom: '11vh',
        height: `100vh`,
    },
    largeAvatar: {
        height: theme.spacing(16),
        width: theme.spacing(16),
        boxShadow: '5px 8px 18px rgba(21, 21, 21, 0.10)',
    },
    spaceTop: {
        textAlign: 'center',
        marginTop: theme.spacing(3),
    },
    spaceTop1: {
        textAlign: 'center',
        marginTop: theme.spacing(1),
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

export default function Profil() {
    const classes = useStyles();
    return (
        <Grid container className={classes.root} direction='column' alignItems='center' spacing={4}>
            <Badge
                overlap="circle"
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                badgeContent={<SmallAvatar color='inherit'>
                    <Icon icon={bxCamera} style={{
                        color: '#cc5a71',
                        fontSize: 18, margin: '-0.32rem'
                    }} /></SmallAvatar>}>
                <Avatar
                    alt="Aldi Oktaviana Hidayat"
                    src={require('../images/christian-buehner-DItYlc26zVI-unsplash.jpg')}
                    className={classes.largeAvatar}
                />
            </Badge>
            <div class={classes.spaceTop}>
                <Typography variant='h3' component='h3' gutterBottom>Aldi Oktaviana Hidayat</Typography>
                <Typography variant='h4' component='h4' gutterBottom>Newbie</Typography>
            </div>
            <div class={classes.spaceTop1}>
                <Typography variant='body1' component='p' gutterBottom>aldiokta10@hotmail.co.id</Typography>
                <Typography variant='body1' component='p' gutterBottom>089665465338</Typography>
            </div>
            <div className={classes.divider} />
            <Grid item>
                <Button fullWidth
                    className={classes.btn}
                    startIcon={<Icon icon={userAvatarFilledAlt} 
                    style={{color: '#CC5A71', 
                    fontSize: '2rem'}} />}
                    endIcon={<Icon icon={bxChevronRight}
                        style={{ color: '#151515', fontSize: '1.375rem' }} />}>
                    Ubah Profil
                    <div style={{ flexGrow: 1 }} />
                </Button>
                <Button fullWidth
                    className={classes.btn}
                    startIcon={<Icon icon={mapMarker} style={{color: '#cc5a71', fontSize: '1.5rem'}} />}
                    endIcon={<Icon icon={bxChevronRight}
                        style={{ color: '#151515', fontSize: '22px' }} />}>
                    Ubah Lokasi
                    <div style={{ flexGrow: 1 }} />
                </Button>
                <Button fullWidth
                    className={classes.btn}
                    startIcon={<Icon icon={cogIcon} style={{color: '#cc5a71', fontSize: '1.5rem'}} />}
                    endIcon={<Icon icon={bxChevronRight}
                        style={{ color: '#151515', fontSize: '22px' }} />}>
                    Pengaturan
                    <div style={{ flexGrow: 1 }} />
                </Button>
            </Grid>
        </Grid >
    );
}