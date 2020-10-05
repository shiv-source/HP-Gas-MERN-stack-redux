import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter,Router ,
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
import history from "./config/history";
const store = ConfigureStore();
//console.log(store.getState().userLogin.isLoggedIn);





// const authentication = {
//   // isLoggedIn: store.getState().userLogin.isLoggedIn,
//   isLoggedIn : store.getState().userLogin.isLoggedIn,
//   getLoginStatus() {
//     console.log(this.props);
//     return this.isLoggedIn;
//   },
// };

// function SecureRoute({component: Component ,path, ...data}){
//   return (
//     <Route {...data} path={path} render={ data => authentication.getLoginStatus() ? 
//     ( < Component {...data} > </Component> ) :
//     ( <Redirect to={{pathname : '/'}}  />  )
    
//     }>
//     </Route>
//   )
// }




class App extends Component {
  constructor(props){
    super(props);
    this.state = {
     
    }
  //this.checkLogin = this.checkLogin.bind(this);
    
  }


  // checkLogin() {
  //   const token = localStorage.getItem("token");
  //   if (token) {
  //     let parsedToken = JSON.parse(token);
  //     console.log(parsedToken);
  //     let decoded = jwt.decode(parsedToken);
  //     let exp = decoded.exp
  //     console.log(decoded);
  //     if (Date.now() >= exp * 1000) {
  //       history.push("/");
  //     }
  //     else{
  //       history.push("/dashboard");
  //     }
  //   }
  
  // }
  



  // componentDidMount(){
  //   this.checkLogin()
  // }

  render() {
   
    return (
     
      <div>
        
        <Provider store={store}>
          <Router history={history} >
            <Switch>
              <Route exact path="/" component={Login}  />
              <Route path="/dashboard" component={Dashboard} />
              <Redirect to="/" />
            </Switch>
          </Router >
        </Provider>
      </div>
    );
  }
}

export default App;
