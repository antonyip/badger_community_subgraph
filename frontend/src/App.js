import logo from './logo.svg';
import './App.css';
import {
  Grid, 
} from '@material-ui/core'

import Dashboard from './components/dashboard/Dashboard'
 

function App() {
  return (
    <Grid container className="App">
      <Dashboard />
    </Grid>    
  );
}

export default App;
