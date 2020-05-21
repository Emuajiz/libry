import React from 'react';
import { Typography } from '@material-ui/core';

export default function ZoomOutImg({close, cover, judul, penulis}) {
    return (
        <div onClick={close}>
        <img src={cover} alt={'Cover' + judul} width='100%' height='100%' />
        <Typography variant='body1' component='p' style={{ color: '#F2f2f2', textAlign: 'center' }}>
            {judul + ' Oleh ' + penulis}
        </Typography>
        </div>
    );
}