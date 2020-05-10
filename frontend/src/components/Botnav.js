import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';

import { Link, useHistory, BrowserRouter as Router } from 'react-router-dom';

import { Icon } from '@iconify/react';
import bxHomeSmile from '@iconify/icons-bx/bx-home-smile';
import bookIcon from '@iconify/icons-ps/book';
import roundFavoriteBorder from '@iconify/icons-ic/round-favorite-border';
import bxUserCircle from '@iconify/icons-bx/bx-user-circle';

const secondary = '#C89B7B';

const useStyles = makeStyles({
  root: {
    width: '100%',
    height: '3.8rem',
    bottom: '0',
    position: 'fixed',
    background: '#F2F2F2',
    boxShadow: '0px -4px 18px rgba(0, 0, 0, 0.25)',
    zIndex: 12,
  },
});

function Botnav() {
  const classes = useStyles();
  const [value, setValue] = React.useState('');
  const history = useHistory();

  const handleChange = (event, newValue) => {
    history.push(newValue);
    setValue(newValue);
  };

  return (
    <Router>
      <BottomNavigation
        value={value}
        onChange={handleChange}
        className={classes.root}
      >
        <BottomNavigationAction
          label="Beranda"
          value=""
          icon={<Icon icon={bxHomeSmile} style={{ color: secondary, fontSize: '28px' }} />}
          component={Link}
          to='/'
        />
        <BottomNavigationAction
          label="Koleksiku"
          value="koleksiku"
          icon={<Icon icon={bookIcon} style={{ color: secondary, fontSize: '24px' }} />}
          component={Link}
          to='/koleksiku'
        />
        <BottomNavigationAction label="Favorit" value="favorit" icon={<Icon icon={roundFavoriteBorder} style={{ color: secondary, fontSize: '28px' }} />} />
        <BottomNavigationAction label="Profil" value="profil" icon={<Icon icon={bxUserCircle} style={{ color: secondary, fontSize: '28px' }} />} />
      </BottomNavigation>
    </Router>
  );
}

export default Botnav;