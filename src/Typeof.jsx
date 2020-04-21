import React, { Fragment } from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import { makeStyles } from '@material-ui/core/styles';
import ListTypeof from './ListTypeof';
import ImgTypeof from './ImgTypeof';

const useStyle = makeStyles((theme)=>({
    Container:{
        backgroundColor: theme.palette.background.paper,
        height: '100vh',
    },
    title:{
        margin: theme.spacing(4, 0, 2),
    },
})); 


function ContainerTypeof(){
    const classes = useStyle(); 
    return(
        <Fragment>
        <CssBaseline />
            <Container maxWidth="sm">
            <div className={classes.Container}>
                <Typography variant="h4"  className={classes.title} >
                  Title
                </Typography>
            <Divider/>
                <ImgTypeof/>
                <ListTypeof/>
            </div>  
             </Container>
              
        </Fragment>
    );
}
export default ContainerTypeof;