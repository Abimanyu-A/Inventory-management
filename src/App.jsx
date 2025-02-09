import { Provider } from "react-redux";
import React from "react";

import store from "./app/store";
import Navigation from "./components/Navigation";
import Dashboard from "./components/Dashboard";
import Sales from "./components/Sales";
import Purchases from "./components/Purchases";
import Stock from "./components/Stock";
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="min-h-screen  bg-gray-100 p-4">
          <Navigation />
          <h1 className="text-3xl font-bold text-center mb-6">
            Inventory Management
          </h1>
          <div className="flex justify-center items-center w-xl mx-auto">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/sales" element={<Sales />} />
              <Route path="/purchases" element={<Purchases />} />
              <Route path="/stock" element={<Stock />} />
            </Routes>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;