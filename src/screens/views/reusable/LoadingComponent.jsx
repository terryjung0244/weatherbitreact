import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  loadingContainer: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    zIndex: 9999,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  circularProgress: {
    color: '#fff'
  }
}));

const LoadingComponent = () => {

  const classes = useStyles();

  return(
    <div className={classes.loadingContainer}>
      <CircularProgress className={classes.circularProgress} size={45} thickness={4} />
    </div>
  )
};

export default LoadingComponent;