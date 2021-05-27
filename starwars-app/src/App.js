import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import logo from './starwars-logo-1.png';
import StarWarsHome from './StarWarsHome';
import StarWarsCharacter from './StarWarsCharacter';

function App() {
  return (
    <div className="App">
      <h1>
        <img id='StarWarsLogo' alt='Star Wars Logo' src={logo}/>
        Star Wars Characters
        <img id='StarWarsLogo' alt='Star Wars Logo' src={logo}/>
      </h1>
      <Router>
        <Link to="/">Home</Link>

        <Switch>
          <Route exact path="/">
            <StarWarsHome />
          </Route>
          <Route path="/people/:idx" component={StarWarsCharacter} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
