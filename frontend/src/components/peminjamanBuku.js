import React from 'react';
import { useHistory } from "react-router-dom";
import moment from 'moment';
import { useForm } from 'react-hook-form';

import {
	Grid, Typography,
	IconButton, TextField, InputAdornment,
	Button, FormControl, FormLabel, FormControlLabel,
	Radio, RadioGroup
} from '@material-ui/core';
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';
import { makeStyles, withStyles } from '@material-ui/styles'

import { Icon } from '@iconify/react';
import outlineLibraryBooks from '@iconify/icons-ic/outline-library-books';
import bxBookReader from '@iconify/icons-bx/bx-book-reader';
import bxArrowBack from '@iconify/icons-bx/bx-arrow-back';
import bxTimeFive from '@iconify/icons-bx/bx-time-five';
import bxChevronRight from '@iconify/icons-bx/bx-chevron-right';

const useStyles = makeStyles((theme) => ({
	root: {
		minHeight: '100vh',
		paddingTop: theme.spacing(3),
	},
	container: {
		minHeight: '82vh',
	},
	items: {
		marginLeft: theme.spacing(-1),
	},
	itemText: {
		width: '100%',
		marginTop: theme.spacing(4),
		marginBottom: theme.spacing(3),
	},
	textField: {
		width: '100%',
	}
}));

const MetodePeminjaman = withStyles((theme) => ({
	root: {
		width: '7.5rem',
		height: 64,
		overflow: 'hidden',
		padding: theme.spacing(0, 1),
		border: '1.5px solid #CC5A71',

		textAlign: 'right',
		textTransform: 'inherit',
	},
	selected: {
		'&&&': {
			backgroundColor: '#CC5A71',
		},
		'&& *': {
			color: '#f2f2f2'
		}
	}
}))(ToggleButton);

const urlCuy = 'http://8198552c.ngrok.io';
const token = 'JvsUQymW7UEfNWoYBUEMREo7B4qdYjult7VSuSPUqyQsFkJwAL2PL1eF8f3LYrWQWlnKSEr5vZPFdQuS';

export default function PeminjamanBuku({ match }) {
	const currDate = moment().format('YYYY-MM-DDTHH:mm');
	const [metode, setMetode] = React.useState('');
	const [date, setDate] = React.useState(currDate);

	const handleMetode = (event) => {
		setMetode(event.target.value);
		console.log(metode);
	};
	const handleDate = (event) => {
		setDate(event.target.value);
		console.log(event.target.value)
	}

	const classes = useStyles();
	const history = useHistory();
	const { register, handleSubmit } = useForm();

	const onSubmit = (data) => {
		console.log(data);
		handlePost(data);
	};

	React.useEffect(() => { console.log(match.params.id); window.scrollTo(0, 0); }, []);

	const handlePost = (data) => {
		const requestOptions = {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'content-type': 'application/json',
				'Authorization': `Bearer ${token}`,
			},
			body: JSON.stringify(data),
		};
		console.log(requestOptions);
		fetch(`${urlCuy}/api/pinjam`, requestOptions)
			.then(response => {
				const data = response.json();
				console.log(data);
				if (!response.ok) {
					// get error message from body or default to response status
					const error = (data && data.message) || response.status;
					return Promise.reject(error);
				}
			})
	};

	return (
		<Grid container className={classes.root} direction='column' justify='flex-start'>
			<Grid container alignItems='center' className={classes.items}>
				<IconButton onClick={() => history.goBack()} edge='left' >
					<Icon icon={bxArrowBack} style={{ color: '#cc5a71', fontSize: '29px' }} />
				</IconButton>
				<Typography variant='h1' component='h1' style={{ marginLeft: '0.75rem', fontWeight: 'bold' }}>
					Buku Populer
                </Typography>
			</Grid>
			<Grid container className={classes.container} direction='column' jutsify='flex-start'>
				<form style={{
					display: 'flex',
					flexDirection: 'column',
					minHeight: '80vh'
				}}
					onSubmit={handleSubmit(onSubmit)}
					noValidate
				>
					<FormControl component="fieldset" className={classes.itemText}>
						<FormLabel component="legend" color='textPrimary'>
							<Typography variant='h1' component='h1' gutterBottom style={{ marginBottom: '1rem' }}>
								Metode Peminjaman
                    		</Typography>
							<Typography variant='h3' component='h2' style={{ fontWeight: 300 }} color='textSecondary' gutterBottom>
								Silakan pilih bentuk peminjaman yang diinginkan
                    	</Typography>
						</FormLabel>
						<TextField
							label="ID Buku"
							name="buku"
							value={match.params.id}
							style={{ display: "none" }}
							inputRef={register}
						/>
						<RadioGroup aria-label="tipe-buku" name="tipe" value={metode} onChange={handleMetode}>
							<FormControlLabel value="d" control={<Radio inputRef={register} />} label="Ebook" />
							<FormControlLabel value="f" control={<Radio inputRef={register} />} label="Buku Fisik" />
						</RadioGroup>
					</FormControl>
					<FormControl component="fieldset" className={classes.itemText}>
						<FormLabel component="legend" color='textPrimary'>
							<Typography variant='h1' component='h1' gutterBottom style={{ marginBottom: '1rem' }}>
								Waktu Peminjaman
                    		</Typography>
							<Typography variant='h3' component='h2' style={{ fontWeight: 300 }} color='textSecondary' gutterBottom>
								Silakan pilih waktu kedatangan<br /> sesuai dengan keinginan
                    		</Typography>
						</FormLabel>
						<TextField
							id="datetime-local"
							label="Waktu Peminjaman"
							type="datetime-local"
							className={classes.textField}
							name="pinjam"
							value={date}
							inputRef={register}
							onChange={handleDate}
							InputProps={{
								startAdornment: (
									<InputAdornment position="start">
										<Icon icon={bxTimeFive} style={{ color: '#c89b7b', fontSize: '22px' }} />
									</InputAdornment>
								),
							}}
							InputLabelProps={{
								shrink: true,
							}}
						/>
					</FormControl>
					<div style={{ flexGrow: 1 }} />
					<Button
						color='secondary'
						variant='contained'
						fullWidth endIcon={
							<Icon icon={bxChevronRight} style={{ color: '#fcfcfc', fontSize: '22px' }} />
						}
						type='submit'
						className={classes.btn}>
						Selanjutnya
                	</Button>
				</form>
			</Grid>
		</Grid >
	);
}

{/* <ToggleButtonGroup
	exclusive
	onChange={handleMetode}
	name="tipe"
	value={metode}
	inputRef={register}
	component='input'
	type='radio'
	aria-label="metode peminjaman"
>
	<MetodePeminjaman
		value="d"
		color='secondary'
	>
		<FormLabel component="legend">
			<Icon icon={outlineLibraryBooks}
				style={{
					color: '#cc5a71',
					fontSize: '3rem',
					margin: '0 0.375rem -2.2rem 0',
				}} />
			<Typography variant='body1' component='span' color='secondary' style={{ fontWeight: 'bold' }}>
				E-book
                    				</Typography>
		</FormLabel>
	</MetodePeminjaman>
	<MetodePeminjaman
		value="f"
		color='secondary'
	>
		<FormLabel component="legend">
			<Icon icon={bxBookReader}
				style={{
					color: '#cc5a71',
					fontSize: '3rem',
					margin: '0 0.375rem -2.2rem 0',
				}} />
			<Typography variant='body1' component='span' color='secondary' style={{ fontWeight: 'bold' }}>
				Fisik
                    				</Typography>
		</FormLabel>
	</MetodePeminjaman>
</ToggleButtonGroup> */}