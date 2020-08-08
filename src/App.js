import React from "react";
// import Home from "./Components/Home/Home";
import Routes from './Components/Routes/Routes';

import "./App.css";
import configureStore from "./store";
import { Provider } from "react-redux";

const store = configureStore();


function App() {
  return (
    <Provider store={store}>
      {/* <Home />  */}
      <Routes /> 
    </Provider>
  );
}

export default App;
