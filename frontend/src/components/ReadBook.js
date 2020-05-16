import React from 'react';
import { ReactReader } from "react-reader";
import { useLocation } from "react-router-dom";

import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
    container: {
        position: "relative", 
        height: "100vh",
        width: `calc(100% + ${theme.spacing(4)})`,
        margin: theme.spacing(0, -2, 0, -2),
    }
}));

const urlCuy = 'http://8198552c.ngrok.io';
const token = 'JvsUQymW7UEfNWoYBUEMREo7B4qdYjult7VSuSPUqyQsFkJwAL2PL1eF8f3LYrWQWlnKSEr5vZPFdQuS';

export default function ReadBook() {
    const location = useLocation();
    const classes = useStyles();

    React.useEffect(() => {
        console.log(location);
    }, [])

    const fetchDetailBooks = async () => {
        const requestOptions = {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'content-type': 'application/json',
                'Authorization': `Bearer ${token}`,
                'Access-Control-Allow-Orign': '*',
            },
        };
        const data = await fetch(
            `${location.state.file}`, requestOptions
        );
    }
    return (
        <div className={classes.container}>
            <ReactReader
                url={location.state.file}
                title={location.state.judul}
                location={"epubcfi(/6/2[titlepage]!/4/1:0)"}
                locationChanged={epubcifi => console.log(epubcifi)}
            />
        </div>
    );
}