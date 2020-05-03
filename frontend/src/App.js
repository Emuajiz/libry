import React from 'react';
import logo from './logo.svg';
import { Grid, CssBaseline, Container } from '@material-ui/core'
import Botnav from './components/Botnav'
import Content from './components/Home'
import AppBar from './components/Appbar'

const containerStyles = {
  width: '100%',
  background: 'white',
};

function App() {
  return (
    <div className="App">
      <Grid container direction="column">
      <AppBar />
        <div style={containerStyles}>
          <Container maxWidth='xs'>
            <Content />
          </Container>
        </div>
        <Botnav />
      </Grid>
      <CssBaseline />
    </div>
  );
}

export default App;
