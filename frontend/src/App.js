/* eslint-disable default-case */
import React from 'react';
import { Redirect } from "react-router-dom";

import { Grid, CssBaseline, Container } from '@material-ui/core';
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Botnav from './components/Botnav';
import Home from './components/Home';
import Koleksiku from './components/Koleksiku';
import Favorit from './components/Favorit';
import Profil from './components/Profil';
import overviewBuku from './components/overviewBuku';
import Login from './login';
import Register from './register';
import { BukuPopuler, ArsipBuku } from './components/moreBooks';
import PeminjamanBuku from './components/peminjamanBuku';
import ZoomOutImg from './components/zoomOutImages';
import CategoriesPage from './components/categoriesPage';
import ReadBook from './components/ReadBook';
import Coba from './components/aoba';
import Komentar from './components/Komentar';
import BeriKomentar from './components/beriKomentar';

const containerStyles = {
	width: '100%',
	minHeight: '100vh',
	background: 'white',
	overflowX: 'hidden',
};

let theme = createMuiTheme({
	palette: {
		secondary: { main: '#CC5A71' },
		primary: { main: '#C89B7B' },
		textPrimary: { main: '#151515' },
	},
	typography: {
		h1: {
			fontSize: '1.6rem',
			fontWeight: 600,
			lineHeight: 1.3,
		},
		h2: {
			fontSize: '1.3rem',
			fontWeight: 500,
			lineHeight: 1.3,
		},
		h3: {
			fontSize: '1rem',
			fontWeight: 500,
			lineHeight: 1.3,
		},
		h4: {
			fontSize: '0.8rem',
			fontWeight: 800,
			lineHeight: 1.3,
		},
		subtitle1: {
			fontSize: '0.6rem',
			lineHeight: 1.3,
		},
		body1: {
			fontSize: '0.8rem',
			lineHeight: '175%',
			textAlign: 'justify',
			fontWeight: 400,
		},
	},
});

theme = responsiveFontSizes(theme);

const tkn = JSON.parse(localStorage.getItem('login'));
const urlCuy = 'http://3e9c1c7e.ngrok.io';

function App() {
	const [tab, setTab] = React.useState('');
	const [login, setLogin] = React.useState(true);

	const testAPI = async () => {
        const requestOptions = {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'content-type': 'application/json',
                'Authorization': `Bearer ${tkn.token}`,
            },
        };
        await fetch(
            `${urlCuy}/api/pinjam`, requestOptions
		)
		.then(response => {
			response.json().then((result) => {
				if(response.status===401){
					localStorage.clear();
					setLogin(false);
				}
			})
        })
	}
	React.useEffect(() => {
        console.log(tkn);
		if(tkn != null ) testAPI();
    }, []);

	return (
		<Router>
			{(!tkn || !login) ? <Redirect to='/login' /> : ''}
			<ThemeProvider theme={theme}>
				<Grid container direction="column" style={containerStyles}>
					<Container maxWidth='xs'>
						<Route path='/book/:id' exact component={overviewBuku} />
						<Route path='/login' exact component={Login} />
						<Route path='/signup' exact component={Register} />
						<Route path='/detail' exact component={BukuPopuler} />
						<Route path='/arsipbuku' exact component={ArsipBuku} />
						<Route path='/pinjam/:id' exact component={PeminjamanBuku} />
						<Route path='/images' exact component={ZoomOutImg} />
						<Route path='/categories' exact component={CategoriesPage} />
						<Route path='/baca' exact component={ReadBook} />
						<Route path='/aoba' exact component={Coba} />
						<Route path='/komentar/:id' exact component={Komentar} />
						<Route path='/beriKomentar/:id' exact component={BeriKomentar} />
						<Switch>
							<Route path='/' exact component={Home} />
							<Route path='/koleksiku' exact component={Koleksiku} />
							<Route path='/favorit' exact component={Favorit} />
							<Route path='/profil' exact component={Profil} />
						</Switch>
					</Container>
					<Route path={["/", "/koleksiku", "/favorit", "/profil"]} exact>
						<Botnav value={tab} onChange={setTab} />
					</Route>
					<CssBaseline />
				</Grid>
			</ThemeProvider>
		</Router>
	);
}

export default App;
