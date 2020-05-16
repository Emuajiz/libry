import React from 'react';
import { ReactReader } from "react-reader";

import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
    container: {
        position: "relative", 
        height: "100vh",
        width: `calc(100% + ${theme.spacing(4)})`,
        margin: theme.spacing(0, -2, 0, -2),
    }
}));

export default function ReadBook({props}) {
    const classes = useStyles();
    React.useEffect(() => {
        console.log(props);
    }, [])
    return (
        <div className={classes.container}>
            <ReactReader
                url={require('../ebook/alices_adventures_in_wonderland_carroll_lewis.epub')}
                title={"alices_adventures_in_wonderland"}
                location={"epubcfi(/6/2[titlepage]!/4/1:0)"}
                locationChanged={epubcifi => console.log(epubcifi)}
            />
        </div>
    );
}