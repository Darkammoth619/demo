import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import LensIcon from '@material-ui/icons/Lens';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';

const useStyles = makeStyles((theme)=>({
    root: {
       width:'91%',
       display:'flex'
    },
    title: {
      fontSize: 10,
    },
    sub:{
      fontSize: 8,
      textAlign:'left'  
    },
    deletebutton:{
        marginLeft:'auto',
    },
    content:{
        display:'inline-flex'
    },
    text:{
        display:'block',
        marginLeft: 'auto',
        paddingTop: theme.spacing(.5)
    },
    icon:{
        paddingTop:theme.spacing(1),
        paddingRight:theme.spacing(1)
    }

  
  }));

const Course = ({CourseTitle, CourseSubTitle, color})=> {
    const classes = useStyles();
    return(
     <Card  className={classes.root}>
     <Grid container direction='row' spacing={2}>   
      <CardContent className={classes.content} >
      <Grid item xs={1}>  
        <LensIcon style={{fill:"red"}} fontSize="small" className={classes.icon}/>  
        </Grid>
        <div className={classes.text}>
        <Typography className={classes.title} color="textPrimary" >
          React BootCamp
        </Typography>
        <Typography className={classes.sub} color="textSecondary">
          JohnDoe 
        </Typography>
        </div>
      </CardContent>
    <CardActions>
    <Grid item xs={1}>
      <IconButton edge="end" className={classes.deletebutton} >
        <DeleteRoundedIcon  fontSize="small" color="secondary"/>
       </IconButton> 
     </Grid>  
    </CardActions> 
    </Grid> 
    </Card>
    );
}
export default Course;
