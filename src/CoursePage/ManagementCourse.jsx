import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Course from './CourseItem/Course';
import GridList from '@material-ui/core/GridList';
import CourseForm from './CreateCourse/CourseForm';

const useStyle = makeStyles((theme)=>({
    root:{
        flexGrow: 1,
        padding: "10px",
        backgroundColor: "#fafafa",
    },
    item:{
         padding: 'auto',
         marginTop: 5,
        // marginRight: 5,
         display: 'inline'
    },
    item2:{
       // padding: theme.spacing(1),
        backgroundColor: "#ffffff", // #fafafa"
        marginTop: 5,
        //marginRight: 5,
        borderRadius:"1%",
    },
 
   
}));

const ManagementCourse =()=>{
    const classes = useStyle();
    return(
      <div className={classes.root}> 
        <Grid container direction="row" spacing={1}>
            <Grid container item xs={3}  className={classes.item} spacing={2}>
               <Grid item xs >
                    <Course/>
               </Grid>     
               <Grid item xs >
                    <Course/>
               </Grid> 
               <Grid item xs >
                    <Course/>
               </Grid> 
            </Grid>
            <Grid container item xs={3}  className={classes.item} spacing={2}>
              <Grid item xs >
                    <Course/>
               </Grid>     
               <Grid item xs >
                    <Course/>
               </Grid> 
               <Grid item xs >
                    <Course/>
               </Grid> 
              
            </Grid>
            <Grid container item xs={6} justify="space-evenly" className={classes.item2} spacing={1}>

                    <CourseForm/>
               
            </Grid>
        </Grid>
      </div> 
    );
}
export default ManagementCourse;

/*
    <div className={classes.root}> 
        <Grid container direction="row" spacing={3}>
            <Grid item xs={7} className={classes.item}>
                <Course/>
            </Grid>
            <Grid  item xs className={classes.item2}>
                <CourseForm/>
            </Grid>
        </Grid>
      </div> 
 */