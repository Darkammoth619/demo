import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import SchoolRoundedIcon from '@material-ui/icons/SchoolRounded';

const useStyles = makeStyles((theme) => ({
    root: {
      verticalAlign: 'middle',  
      display: 'inline-flex',
      '& > *': {
        margin: theme.spacing(7),
        
      },
    },
    large: {
      width: theme.spacing(20),
      height: theme.spacing(20),
    },
    icon:{
        width: theme.spacing(10),
        height: theme.spacing(10),
    }
  }));

  export default function ImgTypeof(){
    const classes = useStyles();
    return(
        <div className={classes.root} >
                     <Avatar className={classes.large}>
                        <SchoolRoundedIcon className={classes.icon} />
                     </Avatar>
        </div>
    );

}

  