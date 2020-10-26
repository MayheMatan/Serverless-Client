import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Login from './views/Login';
import Users from './views/Users'
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    width: '100%',
    maxWidth: 900,
    textAlign: 'center',
    margin: '0 auto',
    marginTop: '50px'
  },
});

function App() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <Typography variant="h3" component="h3" gutterBottom>
          Welcome to Amazing Serverless API!
        </Typography>
        <Typography variant="h5" component="h5" gutterBottom>
          This is a simple demonstration of a serverless app, using Lambda functions
        </Typography>
      </div>
      <Router>
        <Route exact path="/" render={() => <Login />}/>
        <Route exact path="/users" render={() => <Users />}/>
      </Router>
    </>
  );
}

export default App;
