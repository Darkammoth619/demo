import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LensIcon from '@material-ui/icons/Lens';
import IconButton from '@material-ui/core/IconButton';
import { green,lightBlue,orange,red,purple,blue } from '@material-ui/core/colors';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme)=>({
  list: {
    width:'100%',
  },
  text: {
    fontSize:15,
    textAlign:'left',
    paddingLeft: theme.spacing(4)
  }
 
}));

 const ColorSelector= () => {
  const classes = useStyles();
 

  return (
    <div className={classes.list}>
     <Typography color="textSecondary" className={classes.text}>
          Select a color 
     </Typography>
      {[lightBlue['A400'], green[500],orange[500],red[500],purple[500],blue[500]].map((color) => (
        <React.Fragment key={color}>
        <IconButton edge="end"  >
            <LensIcon style={{color:color}} fontSize="small" />  
        </IconButton> 
        </React.Fragment>
      ))}
    </div>
  );
}
export default ColorSelector;