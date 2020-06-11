import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';

import Grid from '@material-ui/core/Grid';
import DeleteIcon from '@material-ui/icons/Delete';
import LensIcon from '@material-ui/icons/Lens';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 2,
    
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
    width:'100%',
    maxWidth: 360
    
    //margin: theme.spacing(1),
   
  },
  item:{
    paddingRight: 60,
    backgroundColor: '#eceff1',
    marginBottom:5
    
  }

}));


const ListOfSkills = props => {
  const classes = useStyles();
  const {items, erase} = props
  const generate = () =>{
  
    return items.map((value) =>
   
  <ListItem key={value.id} className={classes.item}>
    <ListItemAvatar>
        <LensIcon style={{fill:"white"}}/>
    </ListItemAvatar>
    <ListItemText 
      primary={value.name} 
    />
    <ListItemSecondaryAction>
      <IconButton edge="end" aria-label="delete" onClick={()=>{erase(value.id)}}  >
        <DeleteIcon color="secondary"/>
      </IconButton>
    </ListItemSecondaryAction>
  </ListItem>
    );
  }
  
  return (

      <Grid container spacing={2}>   
        <Grid>
          <div className={classes.demo}>
            <List style={{maxHeight:200, overflow:'auto'}}>
              {generate()}
            </List>
          </div>
        </Grid>
      </Grid>

  );
}
export default ListOfSkills;