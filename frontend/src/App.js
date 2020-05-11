/* eslint-disable default-case */
import React from 'react';
import logo from './logo.svg';
import { Grid, CssBaseline, Container } from '@material-ui/core'
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Botnav from './components/Botnav'
import Home from './components/Home'
import Koleksiku from './components/Koleksiku'
import Favorit from './components/Favorit'
import Profil from './components/Profil'
import overviewBuku from './components/overviewBuku'

const containerStyles = {
  width: '100%',
  height: '100%',
  background: 'white',
};

let theme = createMuiTheme({
  palette: {
    secondary: { main: '#CC5A71' },
    primary: { main: '#C89B7B' },
  },
  typography: {
    h1: {
      fontSize: 32,
      fontWeight: 500,
    },
    h2: {
      fontSize: '1.6rem',
      fontWeight: 500,
    },
    h3: {
      fontSize: '1.2rem',
      fontWeight: 500,
    },
    h4: {
      fontSize: '0.9rem',
      fontWeight: 500,
    },
    subtitle1: {
      fontSize: '0.75rem',
    },
    body1: {
      fontSize: '0.875rem',
      lineHeight: '175%',
      textAlign: 'justify',
      fontWeight: 400,
    },
  },
});

theme = responsiveFontSizes(theme);

function App() {
  const [tab, setTab] = React.useState('');
  const currentPath = window.location.pathname;

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Grid container direction="column" style={containerStyles}>
          <Container maxWidth='xs'>
            <navPeminjaman/>
            {/* <Coba /> */}
            <Switch>
              {/* {renderView()} */}
              <Route path='/' exact component={Home} />
              <Route path='/koleksiku' exact component={Koleksiku} />
              <Route path='/favorit' exact component={Favorit} />
              <Route path='/profil' exact component={Profil} />
              <Route path='/books' exact component={overviewBuku} />
            </Switch>
          </Container>
          {!currentPath.includes('books') ? <Botnav value={tab} onChange={setTab} /> : null }
          <CssBaseline />
        </Grid>
      </ThemeProvider>
    </Router>
  );
}

export default App;
