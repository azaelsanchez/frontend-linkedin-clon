import React from "react";
import RegisterPage from "./LoginRegister/RegisterPage";
import Navbar from "../components/Navbar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />

      <RegisterPage />
      <header className="App-header"></header>
    </div>
  );
}

export default App;
