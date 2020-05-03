import React from 'react';
import logo from './logo.svg';
import { Grid, CssBaseline } from '@material-ui/core'
import Botnav from './components/Botnav'
import Content from './components/Home'
import AppBar from './components/Appbar'

const containerStyles = {
  height: '82vh',
  width: '100%',
  overflow: 'auto',
  background: 'white',
};

function App() {
  return (
    <div className="App">
      <Grid container direction="column">
        <AppBar />
        <div style={containerStyles}>
          <Content />
        </div>
        <Botnav />
      </Grid>
      <CssBaseline />
    </div>
  );
}

export default App;
