/* eslint-disable default-case */
import React from 'react';
import logo from './logo.svg';
import { Grid, CssBaseline, Container } from '@material-ui/core'
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import AppBar from './components/Appbar'
import Botnav from './components/Botnav'
import Home from './components/Home'
import Koleksiku from './components/Koleksiku'
import Favorit from './components/Favorit'
import Profil from './components/Profil'

const containerStyles = {
  width: '100%',
  background: 'white',
};

let theme = createMuiTheme({
  palette: {
    secondary: { main: '#CC5A71' },
      primary: { main: '#C89B7B' },
  },
});
theme = responsiveFontSizes(theme);

function App() {
  const [tab, setTab] = React.useState('beranda');

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
        <AppBar />
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
