import React from 'react';
import { useHistory } from "react-router-dom";

import { IconButton, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { Icon } from '@iconify/react'
import bxArrowBack from '@iconify/icons-bx/bx-arrow-back';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        minHeight: '100vh',
        // zIndex: 100,
    },
    items: {
        marginTop: theme.spacing(2),
        marginLeft: theme.spacing(-1),
    }
}));

export default function CategoriesPage() {
    const history = useHistory();
    const classes = useStyles();
    return (
        <Grid container alignItems='center' className={classes.items}>
            <IconButton onClick={() => history.goBack()}>
                <Icon icon={bxArrowBack} style={{ color: '#cc5a71', fontSize: '29px' }} />
            </IconButton>
        </Grid>
    );
}