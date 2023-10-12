import "./App.css";
import { Header } from "./components/Header";
import { BrowserRouter } from "react-router-dom";
import React from "react";

function App() {
  return (
    <BrowserRouter basename="/">
      <div className="max-w-[50%] mx-auto font-display">
        <Header />
      </div>
    </BrowserRouter>
  );
}

export default App;
