import React from 'react';
import { Box, Typography } from '@material-ui/core'
import { Icon } from '@iconify/react';
import bxsStar from '@iconify/icons-bx/bxs-star';
import bxStar from '@iconify/icons-bx/bx-star';
import bxsStarHalf from '@iconify/icons-bx/bxs-star-half';

function RatingAlt({rating, jmlUlasan}) {
    return (
        <Box>
            <Typography variant='h4' component='span' gutterBottom>
                {rating}
            </Typography>
            <Icon icon={bxsStar} style={{ color: '#CFD635', fontSize: '1rem', marginLeft: '0.2rem' }}/>
            <Typography variant='subtitle1' component='p' color='textSecondary'>
            {jmlUlasan} Ulasan
            </Typography>
        </Box>
    );
}

function RatingStar({rating}){
    var star = [];
    var angkaRating = {rating};
    angkaRating = angkaRating.rating;
    var ceil = Math.ceil(angkaRating);
    for(var i = 0; i < ceil; i++){
        if(Math.ceil(angkaRating - ceil)){
            star.push(<Icon icon={bxsStarHalf} style={{ color: '#CFD635', fontSize: '0.8125rem' }} />);
        }
        star.push(<Icon icon={bxsStar} style={{ color: '#CFD635', fontSize: '0.8125rem' }} />);
    }
    var unStar = [];
    for(var j = 0; j < 5 - ceil; j++){
        unStar.push(<Icon icon={bxStar} style={{ color: '#CFD635', fontSize: '0.8125rem' }} />);
    }
    return (
        <Box>
            {star}
            {unStar}
        </Box>
    );
}

export default function Rating({rating}) {
    var star = [];
    var angkaRating = {rating};
    angkaRating = angkaRating.rating;
    var ceil = Math.ceil(angkaRating);
    for(var i = 0; i < ceil; i++){
        if(Math.ceil(angkaRating - ceil)){
            star.push(<Icon icon={bxsStarHalf} style={{ color: '#CFD635', fontSize: '0.8125rem' }} />);
        }
        star.push(<Icon icon={bxsStar} style={{ color: '#CFD635', fontSize: '0.8125rem' }} />);
    }
    var unStar = [];
    for(var j = 0; j < 5 - ceil; j++){
        unStar.push(<Icon icon={bxStar} style={{ color: '#CFD635', fontSize: '0.8125rem' }} />);
    }
    return (
        <Box>
            {star}
            {unStar}
            <Typography variant='subtitle1' component='span'>
                {rating}
            </Typography>
        </Box>
    );
}

export { Rating, RatingAlt, RatingStar }