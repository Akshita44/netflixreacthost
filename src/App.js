import React from 'react';
import './App.css';
import {HashRouter as Router,Switch,Route} from "react-router-dom";
import Login from "./loginpage";
import Home from "./home";
import Signin from "./siginpage";
import Profile from "./Profile";
import Signup from "./signup";
import {selectemail} from "./features/user/userSlice";
import {useSelector} from "react-redux";
import PrivateRoute from './private';
export const r=React.createContext("");
function App() {
  const us=useSelector(selectemail);
  console.log(us);
  return (
      <>
    <Router>
      <Switch>
      <PrivateRoute path="/" exact component={Home}></PrivateRoute>
      <PrivateRoute exact path="/home" component={Home} />
      {/* <Route path="/home">{us?<Home/>:<Signin/>}</Route> */}
      <Route path="/login"><Login/></Route>
      <Route path="/signin"><Signin/></Route>
      <Route path="/signup/:id"><Signup/></Route>
      <Route path="/profile"><Profile/></Route>
    </Switch>
    </Router>
    </>
  );
}
export default App;
