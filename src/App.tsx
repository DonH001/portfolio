import React from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Home from "./pages/Home";

const App: React.FC = () => (
  <div className="app-container">
    <Sidebar />
    <div className="main-content">
      <Header />
      <Home />
    </div>
  </div>
);

export default App;