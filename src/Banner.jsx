import React,{useState} from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
  mainFeaturedPost: {
    position: 'relative',
    backgroundColor: theme.palette.info.dark,
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(1),
   // backgroundImage: 'url(https://fakeimg.pl/1120x255/)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
   // backgroundColor: 'rgba(0,0,0,.3)',
  },
  mainFeaturedPostContent: {
    position: 'relative',
    padding: theme.spacing(1),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(1),
      paddingRight: 0,
    },
  },
  imageBannerRight:{
    backgroundImage: 'url(https://fakeimg.pl/350x200/)',
  }
}));



export default function Banner(props) {
  const classes = useStyles();
  const [ profile, setProfile ] = useState(true)
  const { post } = props;

  return (
    <Paper className={classes.mainFeaturedPost} >
      <div className={classes.overlay} />
      <Grid container >
        <Grid container item md={6} justify="flex-start"> {/*inicia*/}
          <div className={classes.mainFeaturedPostContent}>
            <Typography component="h2" variant="h4" color="inherit" gutterBottom>
              {/*post.title*/}
              Welcome Back!
            </Typography>
            <Typography component="h2"  variant="h4" color="inherit" gutterBottom>
              {/*post.description*/}
              Annette Watson
            </Typography>
            <p variant="subtitle1" >
              {/*post.linkText*/}
              Student
            </p>
          </div>
        </Grid> {/* Termina */}

       <Grid item md={2}> {/*inicia*/}
          <div className={classes.mainFeaturedPostContent}>
          {profile ? (
            <div>
            <Typography component="h1" variant="h3" color="inherit" gutterBottom>
              {/*post.title*/}
              Info1
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
              {/*post.description*/}
              Info2
            </Typography>
            <Link variant="subtitle1" href="#">
              {/*post.linkText*/}
              Info3
            </Link>
            </div>) : (
              <div>
               </div>
               )}

          </div>
        </Grid>{/* Termina */}

        <Grid  item md={4}  > {/*inicia*/}
          <div className={classes.mainFeaturedPostContent} >
            <img src={'https://fakeimg.pl/200x130/'}/>
          </div>
        </Grid> {/* Termina */}
      </Grid>
    </Paper>
  );
}

Banner.propTypes = {
  post: PropTypes.object,
};