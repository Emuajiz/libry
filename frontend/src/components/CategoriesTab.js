import React from 'react';
import { createMuiTheme, responsiveFontSizes, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import { Button, Typography, GridList, GridListTile, Box } from '@material-ui/core'
import { Icon } from '@iconify/react';
import bxsTrophy from '@iconify/icons-bx/bxs-trophy';
import baselineCategory from '@iconify/icons-ic/baseline-category';

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(2.5),
    },
    categories: {
        height: 52,
        width: 154,
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        overflow: 'hidden',
        textAlign: 'left',
        // marginRight: theme.spacing(5),
    },
    gridlist: {
        display: 'flex',
        flexWrap: 'wrap',
        overflow: 'hidden',
        marginTop: theme.spacing(1.5),
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
                <Typography variant="h3" component="h2">Telusur</Typography>
                <div className={classes.gridlist}>
                    <GridList className={classes.gridlistChild} cellHeight={52} cols='50%'>
                        <GridListTile rows='1'>
                            <Button variant='outlined' className={classes.categories}>
                                <Box style={{marginBottom: '-1.3rem'}}>
                                <Icon icon={bxsTrophy} style={{ color: '#151515', fontSize: '3.5rem', marginRight: '0.22rem' }} />
                                </Box>
                                <Typography variant="subtitle2" component="span">
                                    Buku Populer
                                </Typography>
                            </Button>
                        </GridListTile>
                        <GridListTile rows='1'>
                            <Button variant='outlined' className={classes.categories}>
                                <Box style={{marginBottom: '-1.3rem'}}>
                                <Icon icon={baselineCategory} style={{ color: '#151515', fontSize: '3rem', marginRight: '0.22rem' }} />
                                </Box>
                                <Typography variant="subtitle2" component="span">
                                    Kategori
                                </Typography>
                            </Button>
                        </GridListTile>
                        <GridListTile rows='1'>
                            <Button variant='outlined' className={classes.categories}>
                                <Box style={{marginBottom: '-1.3rem'}}>
                                <Icon icon={bxsTrophy} style={{ color: '#151515', fontSize: '3rem', marginRight: '0.22rem' }} />
                                </Box>
                                <Typography variant="subtitle2" component="span">
                                    Penulis
                                </Typography>
                            </Button>
                        </GridListTile>
                        <GridListTile rows='1'>
                            <Button variant='outlined' className={classes.categories}>
                                <Box style={{marginBottom: '-1.3rem'}}>
                                <Icon icon={bxsTrophy} style={{ color: '#151515', fontSize: '3rem', marginRight: '0.22rem' }} />
                                </Box>
                                <Typography variant="subtitle2" component="span">
                                    Penerbit
                                </Typography>
                            </Button>
                        </GridListTile>
                        <GridListTile rows='1'>
                            <Button variant='outlined' className={classes.categories}>
                                <Box style={{marginBottom: '-1.3rem'}}>
                                <Icon icon={bxsTrophy} style={{ color: '#151515', fontSize: '3rem', marginRight: '0.22rem' }} />
                                </Box>
                                <Typography variant="subtitle2" component="span">
                                    Buku Populer
                                </Typography>
                            </Button>
                        </GridListTile>
                    </GridList>
                </div>
        </div>
    );
}