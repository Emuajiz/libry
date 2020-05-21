import React from 'react';
import { useHistory, useLocation, Redirect } from "react-router-dom";
import moment from 'moment';
import { useForm } from 'react-hook-form';

import {
	Grid, Typography,
	IconButton, TextField, InputAdornment,
	Button, FormControl, FormLabel, FormControlLabel,
	Radio, RadioGroup
} from '@material-ui/core';

import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
// import { ToggleButton
// 	// , ToggleButtonGroup 
// } from '@material-ui/lab';
import {
	makeStyles
	// , withStyles 
} from '@material-ui/styles'

import { Icon } from '@iconify/react';
// import outlineLibraryBooks from '@iconify/icons-ic/outline-library-books';
// import bxBookReader from '@iconify/icons-bx/bx-book-reader';
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
	},
}));

// const MetodePeminjaman = withStyles((theme) => ({
// 	root: {
// 		width: '7.5rem',
// 		height: 64,
// 		overflow: 'hidden',
// 		padding: theme.spacing(0, 1),
// 		border: '1.5px solid #CC5A71',

// 		textAlign: 'right',
// 		textTransform: 'inherit',
// 	},
// 	selected: {
// 		'&&&': {
// 			backgroundColor: '#CC5A71',
// 		},
// 		'&& *': {
// 			color: '#f2f2f2'
// 		}
// 	}
// }))(ToggleButton);

const tkn = JSON.parse(localStorage.getItem('login'));

var token;
if (tkn) {
	token = tkn.token;
} else {
	token = '';
}
const urlCuy = 'https://libry.thareeq.id';

function Alert(props) {
	return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function PeminjamanBuku({ match }) {
	const location = useLocation();
	console.log(location);
	const currDate = moment().format('YYYY-MM-DDTHH:mm');
	const [metode, setMetode] = React.useState('');
	const [date, setDate] = React.useState(currDate);
	const [open, setOpen] = React.useState(false);
	const [openSucc, setOpenSucc] = React.useState(false);
	const [toKoleksi, setToKoleksi] = React.useState(false);
	const [error, setError] = React.useState('');

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
	const handleClose = (event, reason) => {
		if (reason === 'clickaway') {
			return;
		}

		setOpen(false);
		setOpenSucc(false);
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
				response.json().then((result) => {
					console.log(result.message);
					console.log(response.status);
					if (response.status === 403) {
						setOpen(true);
						setError(result.message);
						console.log(open);
					}
					if (response.status === 200) {
						setOpenSucc(true);
						setTimeout(() => setToKoleksi(true), 1000);
						console.log(openSucc);
					}
					if (!response.ok) {
						// get error message from body or default to response status
						const error = (data && data.message) || response.status;
						return Promise.reject(error);
					}
				})
			})
	};

	return (
		<Grid container className={classes.root} direction='column' justify='flex-start'>
			{toKoleksi ? <Redirect to='/koleksiku' /> : null}
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

						{(location.state.digital & location.state.fisik) ? (
							<RadioGroup aria-label="tipe-buku" name="tipe" value={metode} onChange={handleMetode}>
								<FormControlLabel value="d" control={<Radio inputRef={register} />} label="Ebook" />
								<FormControlLabel value="f" control={<Radio inputRef={register} />} label="Buku Fisik" />
							</RadioGroup>
						) : location.state.digital ? (<FormControlLabel value="d" control={<Radio inputRef={register} />} label="Ebook" />)
								: location.state.fisik ? (<FormControlLabel value="f" control={<Radio inputRef={register} />} label="Buku Fisik" />) : ''
						}

					</FormControl>
					{(metode === 'f') ? (
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
					) : (
							<FormControl component="fieldset" className={classes.itemText} style={{ display: 'none' }}>
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
						)}

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
					<Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
						<Alert onClose={handleClose} severity="error">
							<span style={{textTransform: 'capitalize'}}>
								{error}
							</span>
        				</Alert>
					</Snackbar>
					<Snackbar open={openSucc} autoHideDuration={6000} onClose={handleClose}>
						<Alert onClose={handleClose} severity="success">
							Buku telah masuk ke koleksiku<br />
							Mengalihkan ke koleksiku
        				</Alert>
					</Snackbar>
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