import React from 'react';
import { Box, Typography } from '@material-ui/core'
import { Icon } from '@iconify/react';
import bxsStar from '@iconify/icons-bx/bxs-star';
import bxStar from '@iconify/icons-bx/bx-star';

function RatingAlt() {
    return (
        <Box>
            <Typography variant='h4' component='span' gutterBottom>
                3.0
            </Typography>
            <Icon icon={bxsStar} style={{ color: '#CFD635', fontSize: '1rem', marginLeft: '0.2rem' }}/>
            <Typography variant='subtitle1' component='p' color='textSecondary'>
            XX Ulasan
            </Typography>
        </Box>
    );
}

function RatingStar(){
    return (
        <Box>
            <Icon icon={bxsStar} style={{ color: '#CFD635', fontSize: '0.8125rem' }} />
            <Icon icon={bxsStar} style={{ color: '#CFD635', fontSize: '0.8125rem' }} />
            <Icon icon={bxsStar} style={{ color: '#CFD635', fontSize: '0.8125rem' }} />
            <Icon icon={bxStar} style={{ color: '#CFD635', fontSize: '0.8125rem' }} />
            <Icon icon={bxStar} style={{ color: '#CFD635', fontSize: '0.8125rem' }} />
        </Box>
    );
}

export default function Rating() {
    return (
        <Box>
            <Icon icon={bxsStar} style={{ color: '#CFD635', fontSize: '0.8125rem' }} />
            <Icon icon={bxsStar} style={{ color: '#CFD635', fontSize: '0.8125rem' }} />
            <Icon icon={bxsStar} style={{ color: '#CFD635', fontSize: '0.8125rem' }} />
            <Icon icon={bxStar} style={{ color: '#CFD635', fontSize: '0.8125rem' }} />
            <Icon icon={bxStar} style={{ color: '#CFD635', fontSize: '0.8125rem' }} />
            <Typography variant='subtitle1' component='span'>
                3.0
            </Typography>
        </Box>
    );
}

export { Rating, RatingAlt, RatingStar }