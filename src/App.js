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
import Pay from './components/Pay/Pay';
import MyOrders from './components/MyOrders/MyOrders';
import AddProducts from './components/AddProduct/AddProduct';
import Details from './components/Details/Details';
import ManageAllOrder from './components/ManageAllOrders/ManageAllOrders';
import MakeAdmin from './components/MakeAdmin/MakeAdmin';

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
          <Route path="/pay">
            <Pay/>
          </Route>
          <Route exact path="/products/:productId">
            <Details></Details>
          </Route>
          <Route path="/myOrders">
            <MyOrders />
          </Route>
          <Route path="/addProduct">
            <AddProducts />
          </Route>
          <Route path="/manageAllOrder">
            <ManageAllOrder />
          </Route>
          <Route path="/makeAdmin">
            <MakeAdmin />
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
