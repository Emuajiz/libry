import React from 'react';
import { Grid, Typography } from '@material-ui/core';

export default function NotFound({message}){
    return(
        <Grid container direction='column' alignItems='center'>
            <Typography variant='h1' component='h1' gutterBottom style={{fontSize: 52}}>
                :(
            </Typography>
            <Typography variant='body1' component='p' style={{textAlign: 'center'}}>
                {message}.
            </Typography>
        </Grid>
    );
}