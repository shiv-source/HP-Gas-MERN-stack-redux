import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter,
  useHistory,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import "./App.css";
import { Provider } from "react-redux";
import { ConfigureStore } from "./redux/configureStore";
import jwt from "jsonwebtoken";
import Login from "./components/login";
import Dashboard from "./components/dashboard";
import { connect } from "react-redux";
const store = ConfigureStore();
//console.log(store.getState().userLogin.isLoggedIn);


const authentication = {
  // isLoggedIn: store.getState().userLogin.isLoggedIn,
  isLoggedIn : store.getState().userLogin.isLoggedIn,
  getLoginStatus() {
    console.log(this.props);
    return this.isLoggedIn;
  },
};

function SecureRoute({component: Component ,path, ...data}){
  return (
    <Route {...data} path={path} render={ data => authentication.getLoginStatus() ? 
    ( < Component {...data} > </Component> ) :
    ( <Redirect to={{pathname : '/'}}  />  )
    
    }>
    </Route>
  )
}

class App extends Component {
  constructor(props){
    super(props);
  }
  // checkLogin() {
  //   const token = localStorage.getItem("token");
  //   if (token) {
  //     let parsedToken = JSON.parse(token);
  //     console.log(parsedToken);
  //     let decoded = jwt.decode(parsedToken);
  //     console.log(decoded);
  //   }
  // }


  render() {

  

   
    return (
     
      <div>
        <Provider store={store}>
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Login} />
              <SecureRoute path="/dashboard" component={Dashboard} />
              <Redirect to="/" />
            </Switch>
          </BrowserRouter>
        </Provider>
      </div>
    );
  }
}

export default App;
