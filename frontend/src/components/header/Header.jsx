import React from "react";
import "./header.css";
import { NavLink } from "react-router-dom";

const Header = ({ isAuth }) => {
  return (
    <header>
      <div className="logo">E-Learning</div>

      <div className="link">
        <NavLink to="/" end className={({ isActive }) => "nav-btn" + (isActive ? " active" : "")}>Home</NavLink>
        <NavLink to="/courses" className={({ isActive }) => "nav-btn" + (isActive ? " active" : "")}>Courses</NavLink>
        <NavLink to="/about" className={({ isActive }) => "nav-btn" + (isActive ? " active" : "")}>About</NavLink>
        {isAuth ? (
          <NavLink to="/account" className={({ isActive }) => "nav-btn" + (isActive ? " active" : "")}>Account</NavLink>
        ) : (
          <NavLink to="/login" className={({ isActive }) => "nav-btn" + (isActive ? " active" : "")}>Login</NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;