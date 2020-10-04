import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, useHistory } from "react-router-dom";
import { RootNavigator } from "./routes/RootNavigator";
import "./App.css";
import { Provider } from "react-redux";
import { ConfigureStore } from "./redux/configureStore";
import jwt from 'jsonwebtoken';

const store = ConfigureStore();
// const history = useHistory();

class App extends Component {


  checkLogin(){
    const token = localStorage.getItem("token");
    if(token){
        let parsedToken = JSON.parse(token);
        console.log(parsedToken);
        let decoded = jwt.decode(parsedToken);
        console.log(decoded);
    }

  }


  componentDidMount(){
    this.checkLogin()
  }


  render() {
    return (
      <div>
        <Provider store={store}>
          <BrowserRouter>
            <RootNavigator />
          </BrowserRouter>
        </Provider>
      </div>
    );
  }
}

export default App;
