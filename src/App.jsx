import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";

import NoMatch from "./pages/NoMatch";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Stories from "./pages/Stories";

function App() {
  return (
    <div className="App flex flex-col min-h-screen justify-between">
      <Router>
        <Header />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Navigate to="/top" />} />
            <Route path="/top" element={<Stories />} />
            <Route path="/new" element={<Stories />} />
            <Route path="/best" element={<Stories />} />
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}
export default App;
