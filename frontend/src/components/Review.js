import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Paper, Grid, Typography, ButtonBase } from '@material-ui/core';
import { Icon } from '@iconify/react';
import bxsStar from '@iconify/icons-bx/bxs-star';
import bxChevronRight from '@iconify/icons-bx/bx-chevron-right';

import { RatingStar } from './Rating';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        height: 'auto',
        padding: theme.spacing(3),
        paddingLeft: theme.spacing(0),
        paddingRight: 0,
        textAlign: 'left',
    },
    text: {
        marginTop: theme.spacing(2),
    }
}));

export default function Review() {
    const classes = useStyles();
    return (
        <Grid container alignContent='center' style={{ width: '100%' }}>
            <ButtonBase style={{ width: '100%' }}>
                <Paper elevation={0} className={classes.root}>
                    <Grid container direction='row'>
                        <Typography variant='h3' component='h3' style={{ fontWeight: 600 }}>
                            Rating dan Ulasan
                        </Typography>
                        <div style={{ flexGrow: 1 }} />
                        <Icon icon={bxChevronRight}
                            style={{ color: '#151515', fontSize: '1.2rem' }} />
                    </Grid>
                    <Grid container direction='row' className={classes.text}>
                        <Typography variant='h1' component='span' style={{ fontSize: 48 }}>
                            4,4
                        </Typography>
                        <Grid item style={{ display: 'flex', flexDirection: 'column', marginLeft: '1rem', justifyContent: 'flex-end' }}>
                            <RatingStar />
                            <Typography variant='body1' component='p' color='textSecondary'>
                                XX ulasan
                            </Typography>
                        </Grid>
                    </Grid>
                </Paper>
            </ButtonBase>
        </Grid>
    );
}