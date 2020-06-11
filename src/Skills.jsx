import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';

import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';

import ListOfSkills from './ListOfSkills';


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 360,
    '& > *': {
        margin: theme.spacing(1),
      },
  },
  title:{
    textAlign: "left",
    marginBottom: theme.spacing(-2)
  },
  action:{
   justifyContent:'center'
  },
  TextField:{
    width:200,
    height:40
  },
  
  
}));

 const Skills = () => {

  const classes = useStyles();
  const initialState = {id: null, name: ''}
  const values = [{id:1,name:"JavaScript"},
                  {id:2,name:"ReactJS"},
                  {id:3,name:"Java"}] 
  const [item, setItem] = useState(initialState)
  const [items,setItems] = useState(values)

  

  const addItem = item =>{
        item.id = items.length + 1
        setItems([...items, item])
  }               

  const handleInputChange = event=>{
    const {name, value} = event.target
    setItem({...item, [name]:value})
  }

  const erase=(value)=>{
    console.log("erase")
    setItems(items.filter(val => val.id !== value))
  }

  return (
    <Card className={classes.root}>
      <CardHeader
        className={classes.title}
        title="Skills"
        subheader="nuevo"
      />
      <CardActions className={classes.action} >
    <form onSubmit={event => {
      event.preventDefault()   
      if (!item.name) return
      addItem(item)
      setItem(initialState)
      
    }}>

      <TextField 
      id="outlined-search" 
      name="name"
      label="Name" 
      type="Input" 
      variant="outlined"
      className={classes.TextField}
      value={item.name}
      inputProps={{
        style:{fontSize: 15}
      }}
      onChange={handleInputChange}
      margin="none"
      />
    <IconButton aria-label="add to favorites" type="submit" >
          <AddCircleRoundedIcon color="primary"  />
    </IconButton>
    </form>
      </CardActions>

      <CardContent>
      <ListOfSkills items={items} erase={erase}/>
      </CardContent>
    </Card>
  )
}
export default Skills;