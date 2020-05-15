import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import { Box, Grid, GridList, GridListTile, CardContent, CardMedia, Typography, Chip } from '@material-ui/core'


const useStyles = makeStyles((theme) => ({
	media: {
		height: '10rem',
		width: 112,
		boxShadow: '5px 10px 32px rgba(21, 21, 21, 0.2)',
		borderRadius: 4,
	},
	Booklist: {
		marginRight: theme.spacing(1),
		textDecoration: 'none', color: 'inherit',
		width: '100%',
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

const urlCuy = 'http://38e43de1.ngrok.io';

export default function BookGrid() {
	const classes = useStyles();
	useEffect(()=>{
        fetchDetailBooks();
    },[]);
	const [books, setBooks] = useState([]);
    const fetchDetailBooks = async() => {
        const data = await fetch(
            `${urlCuy}/api/buku`
        );
        const books = await data.json();
        console.log(books.data);
        setBooks(books.data);
	}
	
	return (
		<Box component='div' className={classes.gridlist}>
			<GridList className={classes.gridlistChild} component='div' cellHeight={'auto'} cols={3.5}>
				{books.map(item => (
					<GridListTile className={classes.Booklist} component={Link} to={`/book/${item.id}`} key={item.id}>
						<CardMedia className={classes.media}
							image={`${urlCuy}/cover-buku/${item.cover}`} />
						<CardContent className={classes.content}>
							<Typography variant="h4" component="h3">
								{item.judul}
							</Typography>
							<Typography variant="body1" gutterBottom component="h4" color='textSecondary'>
								{item.penulis}
							</Typography>
							<Chip variant="outlined" size="small" label={item.kategori} />
						</CardContent>
					</GridListTile>
				))}
			</GridList>
		</Box>
	);
}

function BookGridAlt() {
	const classes = useStyles();
	const bookgrid = [];
	for (var i = 0; i < 10; i++) {
		bookgrid.push(
			<Grid item xs={3} className={classes.item} component={Link} to='/books'>
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
		);
	};
	return (
		<Grid container className={classes.container} direction='row' spacing={2} justify='space-between'>
			{bookgrid}
		</Grid>
	);
}


export { BookGrid, BookGridAlt };