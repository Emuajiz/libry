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

const tkn = JSON.parse(localStorage.getItem('login'));

var token;
if(tkn) {
    token = tkn.token;
} else {
    token = '';
}
const urlCuy = 'http://6a43ab11.ngrok.io';

export default function ReadBook() {
    const location = useLocation();
    const classes = useStyles();

    React.useEffect(() => {
        console.log(location);
        fetchDetailBooks();
    }, [])

    const fetchDetailBooks = async () => {
        const requestOptions = {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'content-type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
        };
        await fetch(
            `${urlCuy}/file-buku/${location.state.file}`
        );
    }
    return (
        <div className={classes.container}>
            <ReactReader
                url={`${urlCuy}/file-buku/${location.state.file}`}
                title={location.state.judul}
                location={"epubcfi(/6/2[titlepage]!/4/1:0)"}
                locationChanged={epubcifi => console.log(epubcifi)}
            />
        </div>
    );
}