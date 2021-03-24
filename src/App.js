import { Route, Switch } from 'react-router-dom';

import './App.css';
import Signup from './AuthPages/Signup';
import Login from './AuthPages/Login';
import Dashboard from './Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <Route path="/" component={Dashboard} />
      </Switch>

    </div>
  );
}

export default App;
