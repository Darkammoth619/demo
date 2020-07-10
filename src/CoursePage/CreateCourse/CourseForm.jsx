import React,{useState} from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Grid } from "@material-ui/core";
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import ColorForm from './ColorSelector';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import SchoolOutlinedIcon from '@material-ui/icons/SchoolOutlined';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
        },
       
    },
    button: {
        float: 'right',
        width: '40%',
    },
    TextField: {
        maxWidth: 800
    },
    formControl: {
        margin: theme.spacing(1),
        width: '100%',
      },
      selectEmpty: {
        marginTop: theme.spacing(2),
      },
    title:{
        fontSize:20,
        textAlign:'left',
        paddingBottom: theme.spacing(1)
    },
    icon:{
        marginLeft: 'auto',
    },
    back:{
        backgroundColor:'white'
    }
   
}));

const CourseForm = ()=>{
    const classes = useStyles();

  const [mentor, setMentor] = useState('');
  const handleChange = event => {
      const{value}= event.target
    setMentor(value);
  };
   return(<>
    <form className={classes.root}>
    <Grid container direction='row'>
    <Typography color="textPrimary"   className={classes.title} >
                Create A Course 
    </Typography>
    <SchoolOutlinedIcon fontSize="small" className={classes.icon}/>
    </Grid>
    <Divider/>
    <br/>
        <Grid container direction='row' spacing ={1}>
            <Grid item xs sm={6}>
                <TextField fullWidth id="standard-required" name="name" label="Title" variant="outlined" className={classes.TextField} />
            </Grid>
            <Grid item xs sm={6}>
            <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="sample">Select a Mentor</InputLabel>
            <Select
             labelId="sample"
             id="sample"
             value={mentor}
             onChange={handleChange}
             label="Select a Mentor"
             >
            <MenuItem value="">
                 <em>None</em>
            </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
            </Select>
            </FormControl>
            </Grid>
        </Grid>
        <Grid container direction='row' spacing ={1}>
            <Grid item xs sm={6}>
                <TextField fullWidth required id="outlined-required" name="name" label="Description" multiline rows={4} variant="outlined" className={classes.TextField}/>
            </Grid>
            <Grid item xs sm={6}>
                <div>
                    <ColorForm/>
                </div>
            </Grid>
        </Grid>
        <br />
        <>
        <Button variant="contained" color="primary" className={classes.button}>
                Create Course
        </Button>
        </>
    </form>

</>)
}
export default CourseForm;