
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Users from './components/Users';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import ErrorPage from './components/ErrorPage';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/"> Home</Link>
                </li>
                <li>
                  <Link to="/about"> About</Link>
                </li>
                <li>
                  <Link to="/users"> Users</Link>
                </li>
                <li>
                  <Link to ="/error">Error Page</Link>
                </li>
              </ul>
            </nav>

            <Switch>
              <ErrorBoundary>
                <Route exact path="/about">
                  <About />
                </Route>
                <Route exact path="/users">
                  <Users />
                </Route>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route exact path="/error">
                  <ErrorPage />
                </Route>
              </ErrorBoundary>
            </Switch>

          </div>
        </Router>
      </header>
    </div>
  );
}

export default App;
