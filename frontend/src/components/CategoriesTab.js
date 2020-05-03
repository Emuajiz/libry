import React from 'react';
import { createMuiTheme, responsiveFontSizes, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import { Button, Typography, GridList, GridListTile } from '@material-ui/core'
import { Icon } from '@iconify/react';
import bxsTrophy from '@iconify/icons-bx/bxs-trophy';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(3),
    },
    categories: {
        height: 65,
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        overflow: 'hidden',
        textAlign: 'left',
        marginRight: theme.spacing(1),
        padding: theme.spacing(1.2),
    },
    gridlist: {
        display: 'flex',
        flexWrap: 'wrap',
        overflow: 'hidden',
        marginTop: theme.spacing(1),
    },
    gridlistChild: {
        flexWrap: 'nowrap',
    }
}));

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

export default function CategoriesTab() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <ThemeProvider theme={theme}>
                <Typography variant="h5">Telusur</Typography>
                <div className={classes.gridlist}>
                    <GridList className={classes.gridlistChild} cellHeight='auto'>
                        <GridListTile rows='1'>
                            <Button variant='outlined' className={classes.categories}>
                                <Icon icon={bxsTrophy} style={{ color: '#151515', fontSize: '5em' }} />
                                <p>Populer</p>
                            </Button>
                        </GridListTile>
                        <GridListTile>
                            <Button variant='outlined' className={classes.categories}>
                                <Icon icon={bxsTrophy} style={{ color: '#151515', fontSize: '5em' }} />
                                <p>Kategori</p>
                            </Button>
                        </GridListTile>
                        <GridListTile>
                            <Button variant='outlined' className={classes.categories}>
                                <Icon icon={bxsTrophy} style={{ color: '#151515', fontSize: '5em' }} />
                                <p>Penulis</p>
                            </Button>
                        </GridListTile>
                        <GridListTile>
                            <Button variant='outlined' className={classes.categories}>
                                <Icon icon={bxsTrophy} style={{ color: '#151515', fontSize: '5em' }} />
                                <p>Penerbit</p>
                            </Button>
                        </GridListTile>
                    </GridList>
                </div>
            </ThemeProvider>
        </div>
    );
}