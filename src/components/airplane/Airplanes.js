import React, { Component } from "react";
import "./airplanes.css";
import axios from "axios";

const SERVER_URL = "http://localhost:3000/airplanes.json";

export default class Airplanes extends Component {
  constructor() {
    super();
    this.state = {
      // TODO: replace this via AJAX from the airplanes server
      airplanes: [],
    };
    this.savePlane = this.savePlane.bind(this);
  }

  // react component lifecycle:
  componentDidMount() {
    const fetchPlanes = () => {
      axios(SERVER_URL).then((response) => {
        this.setState({ airplanes: response.data });
        setTimeout(fetchPlanes, 5000);
      });
    };

    fetchPlanes();
  }

  savePlane(content) {
    axios.post(SERVER_URL, { content: content }).then((response) => {
      this.setState({ airplanes: [...this.state.airplanes, response.data] });
    });
  }

  render() {
    return (
      <div>
        <div className="plane-container">
          <div className="plane-header">
            <h1>Create a new plane</h1>
          </div>
          <div className="plane-search-box">
            <PlaneForm onSubmit={this.savePlane} />
          </div>
          <div className="plane-list">
            <PlanesList planes={this.state.airplanes} />
          </div>
        </div>
      </div>
    );
  }
}

class PlaneForm extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      rows: "",
      cols: "",
    };
    this._handleChange = this._handleChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  _handleChange(event) {
    this.setState({ name: event.target.value });
  }

  _handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(this.state.name);
    this.setState({ name: " " });
  }

  render() {
    return (
      <form onSubmit={this._handleSubmit}>
        <textarea onChange={this._handleChange} value={this.state.content}></textarea>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

// Always expect to receive props.
const PlanesList = (props) => {
  return (
    <div>
      {props.planes.map((s) => (
        <div className="plane">
          <p>
            Name: {s.name} Rows: {s.rows} Columns: {s.cols}
          </p>
        </div>
      ))}
    </div>
  );
};
