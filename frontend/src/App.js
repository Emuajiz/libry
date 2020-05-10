/* eslint-disable default-case */
import React from 'react';
import logo from './logo.svg';
import { Grid, CssBaseline, Container, Button } from '@material-ui/core'
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Botnav from './components/Botnav'
import Home from './components/Home'
import Koleksiku from './components/Koleksiku'
import Favorit from './components/Favorit'
import Profil from './components/Profil'
import Coba from './components/coba'

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
      fontSize: 12,
    },
    body1: {
      fontSize: '0.75rem',
    },
  },
});

theme = responsiveFontSizes(theme);

function App() {
  const [tab, setTab] = React.useState('beranda');

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Grid container direction="column">
          <Container maxWidth='xs' style={containerStyles}>
            {/* <Coba /> */}
            <Switch>
              {/* {renderView()} */}
              <Route path='/' exact component={Home} />
              <Route path='/koleksiku' exact component={Koleksiku} />
              <Route path='/favorit' exact component={Favorit} />
              <Route path='/profil' exact component={Profil} />
            </Switch>
          </Container>
          <Botnav value={tab} onChange={setTab} />
          <CssBaseline />
        </Grid>
      </ThemeProvider>
    </Router>
  );
}

export default App;
