import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { green } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';
import CheckIcon from '@material-ui/icons/Check';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
  },
  wrapper: {
    margin: theme.spacing(1),
    position: 'relative',
  },
  ButtonProgress: {
    position: 'absolute',
    top: -100,
    left: 20,
    zIndex: 1,
  },
  buttonProgress: {
    color: green[500],
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
}));

export default function CircularIntegration({click}) {
  const classes = useStyles();
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const timer = React.useRef();



  React.useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  const handleButtonClick = () => {
    if (!loading) {
      setSuccess(false);
      setLoading(true);
      timer.current = window.setTimeout(() => {
        setSuccess(true);
        setLoading(false);
      }, 2000);
    document.getElementById('wrapper').style.pointerEvents = 'none'
    }
    document.getElementById('wrapper').style.pointerEvents = 'none'
  };

  return (
    <div className={classes.root} flex onClick={click}>
      <div className={classes.wrapper} id="wrapper">
        <Button
          aria-label="save"
          color="primary"
          onClick={handleButtonClick}
          variant="contained"
        >
          {success ? 
          <div   style={{ height: "100vh", width: "100vw", display: "flex", justifyContent: "center", alignItems: "center", pointerEvents: "none", flexDirection:'column'}} >
            <h1>MERCI &#128079;</h1>
                <CheckIcon style={{ fontSize: "10rem", margin:'0px' }}/>
          </div> : "Soumettre Le Formulaire"}
        </Button>
        {loading && <CircularProgress size={200} className={classes.ButtonProgress} style={{ marginBottom: "100px"}}/>}
      </div>
    </div>
  );
}