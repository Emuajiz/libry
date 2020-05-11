import React from 'react';
import { Button } from '@material-ui/core'
import { Link } from 'react-router-dom'

function Coba() {
    return (
        <div>
            <Button component={Link} to='/'>Link Agan</Button>
            <Button component={Link} to='/koleksiku'>Link Agan</Button>
            <Button component={Link} to='/favorit'>Link Agan</Button>
            <Button component={Link} to='/profil'>Link Agan</Button>
        </div>
    );
}

export default Coba;