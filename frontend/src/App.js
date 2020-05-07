/* eslint-disable default-case */
import React from 'react';
import logo from './logo.svg';
import { Grid, CssBaseline, Container } from '@material-ui/core'
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';

import Botnav from './components/Botnav'
import Home from './components/Home'
import Koleksiku from './components/Koleksiku'
import Favorit from './components/Favorit'
import Profil from './components/Profil'

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
    h1:{
      fontSize: 32,
      fontWeight: 500,
    },
    h2:{
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
  const [tab, setTab] = React.useState('profil');

  function renderView() {
    switch (tab) {
      case 'beranda':
        return <Home />;
      case 'koleksiku':
        return <Koleksiku />;
      case 'favorit':
        return <Favorit />;
      case 'profil':
        return <Profil />;
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <Grid container direction="column">
        <div style={containerStyles}>
          <Container maxWidth='xs'>
            {renderView()}
          </Container>
        </div>
        <Botnav value={tab} onChange={setTab} />
        <CssBaseline />
      </Grid>
    </ThemeProvider>
  );
}

export default App;
