import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LandingPage from './views/LandingPage';

const App = () => {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route path='/' component={LandingPage} exact />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
