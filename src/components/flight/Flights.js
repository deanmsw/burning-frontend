import axios from "axios";
import React, { Component } from "react";
import FlightDisplay from "./FlightDisplay";
import "./flights.css";
const SERVER_URL = "http://http://localhost:3000/flights.json";
export default class Flights extends Component {
  constructor() {
    super();
    this.state = {
      flightnumber: "",
      origin: "",
      destination: "",
      date: "",
      airplane_id: "",
      flightDisplay: [],
    };
    this._handleChange = this._handleChange.bind(this);
    this._handleCreate = this._handleCreate.bind(this);
    this.saveFlights = this.saveFlights.bind(this);
  }
  componentDidMount() {
    const fetchflightDisplay = () => {
      axios(SERVER_URL).then((response) => {
        this.setState({ flightDisplay: response.data });
        setTimeout(fetchflightDisplay, 4000);
      });
    };
    fetchflightDisplay();
  }
  saveFlights(flightnumber, origin, destination, date, airplane_id) {
    axios
      .post(SERVER_URL, {
        flightnumber: flightnumber,
        origin: origin,
        destination: destination,
        date: date,
        airplane_id: airplane_id,
      })
      .then((response) => {
        this.setState({
          flightDisplay: [...this.state.flightDisplay, response.data],
        });
      });
  }

  _handleCreate(event) {
    // console.log("clicked");
    event.preventDefault();
    const renderingData = {
      flightnumber: this.state.flightnumber,
      origin: this.state.origin,
      destination: this.state.destination,
      date: this.state.date,
      airplane_id: this.state.airplane_id,
    };
    this.setState({
      flightDisplay: [...this.state.flightDisplay, renderingData],
    });
  }
  _handleChange(event) {
    // this.setState({ flightnumber: event.target.value });
    // this.setState({ origin: event.target.value });
    // this.setState({ destination: event.target.value });
    // this.setState({ date: event.target.value });
    // this.setState({ airplane_id: event.target.value });
  }
  render() {
    return (
      <>
        <div>
          <h2>Virgin Airlines</h2>
          <form onSubmit={this._handleCreate}>
            <input
              type="text"
              placeholder="Flight number"
              value={this.state.flightnumber}
              onChange={(event) => {
                this.setState({ flightnumber: event.target.value });
              }}
            />
            <input
              type="data"
              placeholder="data"
              value={this.state.date}
              onChange={(event) => {
                this.setState({ date: event.target.value });
              }}
            />
            <input
              type="text"
              placeholder="origin"
              value={this.state.origin}
              onChange={(event) => {
                this.setState({ origin: event.target.value });
              }}
            />
            <input
              type="text"
              placeholder="destination"
              value={this.state.destination}
              onChange={(event) => {
                this.setState({ destination: event.target.value });
              }}
            />
            <input
              type="text"
              placeholder="Plane Number"
              value={this.state.airplane_id}
              onChange={(event) => {
                this.setState({ airplane_id: event.target.value });
              }}
            />
            <input type="submit" value="Create Flight" />
          </form>
        </div>
        <div className="flightDisplay">
          {this.state.flightDisplay?.map((f) => (
            <div>
              <FlightDisplay
                flightNumber={f.flightnumber}
                date={f.date}
                origin={f.origin}
                destination={f.destination}
                planeNumber={f.airplane_id}
              />
            </div>
          ))}
        </div>
      </>
    );
  }
}
