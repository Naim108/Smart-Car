import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Explore from './components/Explore/Explore';
import Found from './components/NotFound/Found';
import Login from './components/Login/Login/Login';
import Register from './components/Login/Register/Register';
import AuthProvider from './contexts/AuthProvider';
import Review from './components/Review/Review';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
      <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/explore">
            <Explore />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/review">
            <Review />
          </Route>
          <Route path="*">
            <Found
             />
          </Route>
        </Switch>
    </Router>
    </AuthProvider>
    </div>
  );
}

export default App;
