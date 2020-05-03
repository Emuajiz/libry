import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core'

import { Icon } from '@iconify/react';
import bxHomeSmile from '@iconify/icons-bx/bx-home-smile';
import bookIcon from '@iconify/icons-ps/book';
import roundFavoriteBorder from '@iconify/icons-ic/round-favorite-border';
import bxUserCircle from '@iconify/icons-bx/bx-user-circle';



const useStyles = makeStyles({
  root: {
    width: '100%',
    height: '10vh',
  },
});

export default function Botnav() {
  const classes = useStyles();
  const [value, setValue] = React.useState('beranda');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
      <BottomNavigationAction label="Beranda" value="beranda" icon={<Icon icon={bxHomeSmile} style={{ color: '#151515', fontSize: '28px' }} />} />
      <BottomNavigationAction label="Koleksiku" value="koleksiku" icon={<Icon icon={bookIcon} style={{ color: '#151515', fontSize: '24px' }} />} />
      <BottomNavigationAction label="Favorit" value="favorit" icon={<Icon icon={roundFavoriteBorder} style={{ color: '#151515', fontSize: '28px' }} />} />
      <BottomNavigationAction label="Profil" value="profil" icon={<Icon icon={bxUserCircle} style={{ color: '#151515', fontSize: '28px' }} />} />
    </BottomNavigation>
  );
}