import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, CardContent, CardMedia, Typography, Chip, Card, GridList } from '@material-ui/core'
import { Icon } from '@iconify/react';
import bxsStar from '@iconify/icons-bx/bxs-star';
import bxStar from '@iconify/icons-bx/bx-star';



export default function Rating() {
    return(
        <Box>
            <Icon icon={bxsStar} style={{color: '#CFD635', fontSize: '0.8125rem'}} />
            <Icon icon={bxsStar} style={{color: '#CFD635', fontSize: '0.8125rem'}} />
            <Icon icon={bxsStar} style={{color: '#CFD635', fontSize: '0.8125rem'}} />
            <Icon icon={bxStar} style={{color: '#CFD635', fontSize: '0.8125rem'}} />
            <Icon icon={bxStar} style={{color: '#CFD635', fontSize: '0.8125rem'}} />
            <Typography variant='subtitle1' component='span'>
                3.0
            </Typography>
        </Box>
    );
}