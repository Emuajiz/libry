import React from 'react';
import { Grid, CircularProgress, Typography } from '@material-ui/core';


export default function Loading() {
    return (
        <Grid item style={{ overflow: 'visible', margin: '50% 38% 50% 38%', textAlign: 'center' }}>
            <CircularProgress color="secondary" />
            <Typography variant='h3' component='p' style={{ marginTop: '1rem' }} color='textSecondary'>
                Memuat
            </Typography>
        </Grid>
    );
}