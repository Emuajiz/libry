import React from 'react';
import { Typography } from '@material-ui/core';

export default function ZoomOutImg({close}) {
    return (
        <div onClick={close}>
        <img src={require('../images/contohBuku.jpg')} alt='gambar buku' width='100%' height='100%' />
        <Typography variant='body1' component='p' style={{ color: '#F2f2f2', textAlign: 'center' }}>
            Judulnya apa ya? Oleh Penulis
        </Typography>
        </div>
    );
}