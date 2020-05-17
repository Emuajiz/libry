import React from 'react';
import { Link } from 'react-router-dom';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { Button, Typography, GridList, GridListTile, Box } from '@material-ui/core'

import { Icon } from '@iconify/react';
import bxsTrophy from '@iconify/icons-bx/bxs-trophy';
import typewriterIcon from '@iconify/icons-mdi/typewriter';
import bxsBookOpen from '@iconify/icons-bx/bxs-book-open';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        overflow: 'visible',
        width: `calc(100% + ${theme.spacing(2)})`,

        marginRight: theme.spacing(-2),
        marginTop: theme.spacing(3),
    },
    categories: {
        height: 52,
        width: 132,
        display: 'flex',
        overflow: 'hidden',
        textAlign: 'left',
        marginRight: theme.spacing(0.75),
    },
    gridlistChild: {
        flexWrap: 'nowrap',
    }
}));

const BtnGradient = withStyles((theme) => ({
    root: {
        color: '#F2F2F2',
        background: 'linear-gradient(90deg, #CC5A71 0%, #FF7EB3 100%)',
        borderRadius: 8,
        '&:hover': {
            background: 'linear-gradient(90deg, #CC5A71 0%, #FF7EB3 100%)',
        },
        textTransform: 'none',
    },
}))(Button);

const BtnGradientAlt1 = withStyles((theme) => ({
    root: {
        color: '#F2F2F2',
        background: 'linear-gradient(90deg, #CD9CF2 0%, #48C6EF 0.01%, #6F86D6 100%)',
        borderRadius: 8,
        '&:hover': {
            background: 'linear-gradient(90deg, #CD9CF2 0%, #48C6EF 0.01%, #6F86D6 100%)',
        },
        textTransform: 'none',
    },
}))(Button);

const BtnGradientAlt2 = withStyles((theme) => ({
    root: {
        color: '#F2F2F2',
        background: 'linear-gradient(90deg, #DDD6F3 0%, #FAACA8 100%)',
        borderRadius: 8,
        '&:hover': {
            background: 'linear-gradient(90deg, #DDD6F3 0%, #FAACA8 100%)',
        },
        textTransform: 'none',
    },
}))(Button);

export default function CategoriesTab() {
    const classes = useStyles();
    return (
        <div className={classes.root}>

            <GridList className={classes.gridlistChild} cellHeight={52} cols='50%'>
                <GridListTile rows='1'>
                    <BtnGradient variant='inherit' className={classes.categories} component={Link} to={{
                        pathname: '/detail',
                        state: {
                            message: 'Buku Populer'
                        }
                    }}>
                        <Box style={{ marginBottom: '-1.3rem' }}>
                            <Icon icon={bxsTrophy} style={{ color: '#f2f2f2', fontSize: '3.5rem', marginRight: '0.22rem', marginLeft: '-0.22rem' }} />
                        </Box>
                        <Typography variant="subtitle2" component="span">
                            Buku Populer
                                </Typography>
                    </BtnGradient>
                </GridListTile>
                <GridListTile rows='1'>
                    <BtnGradientAlt1 variant='inherit' className={classes.categories} component={Link} to={{
                        pathname: '/detail',
                        state: {
                            message: 'Penulis'
                        }
                    }}>
                        <Box style={{ marginBottom: '-2rem' }}>
                            <Icon icon={typewriterIcon} style={{ color: '#f2f2f2', fontSize: '3.5rem', marginRight: '0.22rem', marginLeft: '-0.22rem' }} />
                        </Box>
                        <Typography variant="subtitle2" component="span">
                            Penulis
                        </Typography>
                    </BtnGradientAlt1>
                </GridListTile>
                <GridListTile rows='1'>
                    <BtnGradientAlt2 variant='inherit' className={classes.categories} component={Link} to={{
                        pathname: '/detail',
                        state: {
                            message: 'Penerbit'
                        }
                    }}>
                        <Box style={{ marginBottom: '-2rem' }}>
                            <Icon icon={bxsBookOpen} style={{ color: '#fafafa', fontSize: '3.5rem', marginRight: '0.22rem', marginLeft: '-0.22rem' }} />
                        </Box>
                        <Typography variant="subtitle2" component="span">
                            Penerbit
                        </Typography>
                    </BtnGradientAlt2>
                </GridListTile>
            </GridList>

        </div>
    );
}