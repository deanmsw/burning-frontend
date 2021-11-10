import React, { Component } from "react";
import "./flights.css";

export default class FlightDisplay extends Component {
  render() {
    return (
      <div className="flightsDisplay">
        <div>{this.props.flightNumber}</div>
        <div>{this.props.date}</div>
        <div>{this.props.origin}</div>
        <div>{this.props.destination}</div>
        <div>{this.props.planeNumber}</div>
      </div>
    );
  }
}
