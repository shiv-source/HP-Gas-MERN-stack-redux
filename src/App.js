import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, useHistory } from "react-router-dom";
import { RootNavigator } from "./routes/RootNavigator";
import "./App.css";
import { Provider } from "react-redux";
import { ConfigureStore } from "./redux/configureStore";

const store = ConfigureStore();
// const history = useHistory();

class App extends Component {
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
