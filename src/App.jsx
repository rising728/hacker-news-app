import React from "react";

import "./App.css";

import NoMatch from "./pages/NoMatch";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App flex flex-col min-h-screen justify-between">
      <Header />
      <div>Home Page</div>
      <Footer />
    </div>
  );
}
export default App;
