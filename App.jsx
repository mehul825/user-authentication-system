import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RegistrationForm from './components/RegistrationForm';
import LoginForm from './components/LoginForm';
import Profile from './components/Profile';
import LogoutButton from './components/LogoutButton';

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/register" component={RegistrationForm} />
          <Route path="/login" component={LoginForm} />
          <Route path="/profile" component={Profile} />
          <Route path="/logout" component={LogoutButton} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
