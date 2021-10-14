import './App.css';
import Home from './components/Home/Home/Home';
import { BrowserRouter,Switch, Route } from 'react-router-dom';
import Abouts from './components/About/Abouts';
import Header from './components/Home/Headers/Header'
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import NotFound from './components/NotFound/NotFound';
import Booking from './components/Booking/Booking/Booking';
import Survices from './components/Home/Survices/Survices';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div>
      <AuthProvider>
      <BrowserRouter>
      <Header></Header>
      <Switch>

        <Route exact path="/">
        <Home></Home>
        </Route>

        <Route  path="/home">
        <Home></Home>
        </Route>

        <Route  path="/about">
         <Abouts></Abouts>
        </Route>

        <Route  path="/login">
         <Login></Login>  
        </Route>

        <Route  path="/register">
         <Register></Register> 
        </Route>

        <Route  path="/survice">
         <Survices></Survices>
         </Route>

        <PrivateRoute  path="/booking/:bookingId">
         <Booking></Booking>
        </PrivateRoute>

        <Route  path="*">
        <NotFound></NotFound>
        </Route>

      </Switch>
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
