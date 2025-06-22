import React from "react";
import MarketingApp from "./components/MarketingApp";
import Header from "./components/header";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <hr />
        <MarketingApp />
      </div>
    </BrowserRouter>
  );
}

export default App;
