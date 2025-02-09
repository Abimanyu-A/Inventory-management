import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="bg-gray-600 p-4 m-4 text-white">
      <ul className="flex space-x-4">
        <li>
          <NavLink to="/" className={({ isActive }) => isActive ? "font-bold" : ""}>Dashboard</NavLink>
        </li>
        <li>
          <NavLink to="/sales" className={({ isActive }) => isActive ? "font-bold" : ""}>Sales</NavLink>
        </li>
        <li>
          <NavLink to="/purchases" className={({ isActive }) => isActive ? "font-bold" : ""}>Purchases</NavLink>
        </li>
        <li>
          <NavLink to="/stock" className={({ isActive }) => isActive ? "font-bold" : ""}>Stock</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
