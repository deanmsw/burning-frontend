import React, { Component } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <Link to="/flights">Flights</Link>
        <Link to="/airplanes">Airplanes</Link>
        <Link to="/reservation">Reservation</Link>
        <Link to="/search">Search</Link>
        <Link to="/">Home</Link>
      </div>
    );
  }
}
