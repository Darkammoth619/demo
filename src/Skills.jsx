import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';

import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    '& > *': {
        margin: theme.spacing(1),
      },
  },
  
}));

export default function Skills() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        title="Skills"
        subheader="nuevo"
      />
      <CardActions>

      <TextField 
      id="outlined-search" 
      label="Search field" 
      type="search" 
      variant="outlined" 
      />
    <IconButton aria-label="add to favorites">
          <AddCircleRoundedIcon color="primary"  />
    </IconButton>
      </CardActions>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook together with your
          guests. Add 1 cup of frozen peas along with the mussels, if you like.
        </Typography>
      </CardContent>
    </Card>
  )
}
