import React from "react";
import Main from "./components/main.js";
import Wrapper from "./components/Wrapper";
import Header from "./components/header.js";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Header />
        <Main />
      </Wrapper>
    </div>
  );
}

export default App;


