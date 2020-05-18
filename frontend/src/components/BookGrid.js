import React from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import { Grid, GridListTile, CardContent, CardMedia, Typography, Chip } from '@material-ui/core'


const useStyles = makeStyles((theme) => ({
	media: {
		height: '10rem',
		width: 112,
		boxShadow: '5px 8px 24px rgba(21, 21, 21, 0.2)',
		borderRadius: 4,
	},
	Booklist: {
		marginRight: theme.spacing(2),
		textDecoration: 'none', color: 'inherit',
		// width: '100%',
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
	
	container: {
		width: '100%',
		// overflowX: 'hide',
		// flexGrow: 1,
		marginTop: theme.spacing(2),
	},
	item: {
		maxWidth: '33.33%',
		flexBasis: '33.33%',
		height: '100%',
		textDecoration: 'inherit',
		color: 'inherit',
	},
	mediaAlt: {
		height: '11rem',
		boxShadow: '5px 10px 32px rgba(21, 21, 21, 0.2)',
		borderRadius: 4,
	},
}));

export default function BookGrid({ id, judul, penulis, kategori, cover }) {
	const classes = useStyles();

	return (
		<GridListTile className={classes.Booklist} component={Link} to={`/book/${id}`} key={id}>
			<CardMedia className={classes.media}
				image={cover} />
			<CardContent className={classes.content}>
				<Typography variant="h4" component="h3">
					{judul}
				</Typography>
				<Typography variant="body1" gutterBottom component="h4" color='textSecondary'>
					{penulis}
				</Typography>
				<Chip variant="outlined" size="small" label={kategori} />
			</CardContent>
		</GridListTile>
	);
}

function BookGridAlt({ id, judul, penulis, kategori, cover }) {
	const classes = useStyles();

	return (
		
			<Grid item xs={3} className={classes.item} component={Link} to={`/book/${id}`} key={id}>
				<CardMedia className={classes.mediaAlt}
					image={cover} />
				<CardContent className={classes.content}>
					<Typography variant="h4" component="h3">
						{judul}
                        </Typography>
					<Typography variant="body1" gutterBottom component="h4" color='textSecondary'>
						{penulis}
                        </Typography>
					<Chip variant="outlined" size="small" label={kategori} />
				</CardContent>
			</Grid>
	);
}


export { BookGrid, BookGridAlt };