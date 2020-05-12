import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Grid, GridList, GridListTile, CardContent, CardMedia, Typography, Chip } from '@material-ui/core'
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
	media: {
		height: '10rem',
		boxShadow: '5px 10px 32px rgba(21, 21, 21, 0.2)',
		borderRadius: 4,
	},
	Booklist: {
		marginRight: theme.spacing(1),
		textDecoration: 'none', color: 'inherit',
		'& > *': {
			overflow: 'visible',
		}
	},
	content: {
		paddingTop: theme.spacing(1.5),
		padding: 0,
		'&:last-child': {
			paddingBottom: theme.spacing(1.5),
		}
	},
	gridlist: {
		display: 'flex',
		// flexWrap: 'wrap',
		marginRight: theme.spacing(-1.5),
		width: `calc(100% + ${theme.spacing(1.5)})`,
		// overflow: 'hidden',
		marginTop: theme.spacing(2),
	},
	gridlistChild: {
		flexWrap: 'nowrap',
	},
	container: {
		width: '100%',
		// overflowX: 'hide',
		flexGrow: 1,
		marginTop: theme.spacing(3),
	},
	item: {
		maxWidth: '33.33%',
		flexBasis: '33.33%',
		height: '100%',
	},
	mediaAlt: {
		height: '11rem',
		boxShadow: '5px 10px 32px rgba(21, 21, 21, 0.2)',
		borderRadius: 4,
	},
}));

export default function BookGrid() {
	const classes = useStyles();
	const booklist = [];
	for (var i = 0; i < 5; i++) {
		booklist.push(
		<GridListTile className={classes.Booklist} component={Link} to='/books'>
			<CardMedia className={classes.media}
				image={require('../images/contohBuku.jpg')} />
			<CardContent className={classes.content}>
				<Typography variant="h4" component="h3">
					Judulnya apa ya?
				</Typography>
				<Typography variant="body1" gutterBottom component="h4" color='textSecondary'>
					Penulis
				</Typography>
				<Chip variant="outlined" size="small" label="Kategori" />
			</CardContent>
		</GridListTile>
		);
	}
	return (
		<Box component='div' className={classes.gridlist}>
			<GridList className={classes.gridlistChild} component='div' cellHeight={'auto'} cols={3.5}>
				{booklist}
			</GridList>
		</Box>
	);
}

function BookGridAlt() {
	const classes = useStyles();
	return (
		<Grid container className={classes.container} direction='row' spacing={2}>
			<Grid item xs={3} className={classes.item} component='div'>
				<CardMedia className={classes.mediaAlt}
					image={require('../images/contohBuku.jpg')} />
				<CardContent className={classes.content}>
					<Typography variant="h4" component="h3">
						Judulnya apa ya?
                        </Typography>
					<Typography variant="body1" gutterBottom component="h4" color='textSecondary'>
						Penulis
                        </Typography>
					<Chip variant="outlined" size="small" label="Kategori" />
				</CardContent>
			</Grid>
			<Grid item xs={3} className={classes.item} component='div'>
				<CardMedia className={classes.mediaAlt}
					image={require('../images/contohBuku.jpg')} />
				<CardContent className={classes.content}>
					<Typography variant="h4" component="h3">
						Judulnya apa ya?
                        </Typography>
					<Typography variant="body1" gutterBottom component="h4" color='textSecondary'>
						Penulis
                        </Typography>
					<Chip variant="outlined" size="small" label="Kategori" />
				</CardContent>
			</Grid>
			<Grid item xs={3} className={classes.item} component='div'>
				<CardMedia className={classes.mediaAlt}
					image={require('../images/contohBuku.jpg')} />
				<CardContent className={classes.content}>
					<Typography variant="h4" component="h3">
						Judulnya apa ya?
                        </Typography>
					<Typography variant="body1" gutterBottom component="h4" color='textSecondary'>
						Penulis
                        </Typography>
					<Chip variant="outlined" size="small" label="Kategori" />
				</CardContent>
			</Grid>
			<Grid item xs={3} className={classes.item} component='div'>
				<CardMedia className={classes.mediaAlt}
					image={require('../images/contohBuku.jpg')} />
				<CardContent className={classes.content}>
					<Typography variant="h4" component="h3">
						Judulnya apa ya?
                        </Typography>
					<Typography variant="body1" gutterBottom component="h4" color='textSecondary'>
						Penulis
                        </Typography>
					<Chip variant="outlined" size="small" label="Kategori" />
				</CardContent>
			</Grid>
			<Grid item xs={3} className={classes.item} component='div'>
				<CardMedia className={classes.mediaAlt}
					image={require('../images/contohBuku.jpg')} />
				<CardContent className={classes.content}>
					<Typography variant="h4" component="h3">
						Judulnya apa ya?
                        </Typography>
					<Typography variant="body1" gutterBottom component="h4" color='textSecondary'>
						Penulis
                        </Typography>
					<Chip variant="outlined" size="small" label="Kategori" />
				</CardContent>
			</Grid>
		</Grid>
	);
}


export { BookGrid, BookGridAlt};