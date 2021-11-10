import React, { Component } from "react";
import "./airplanes.css";
import axios from "axios";

const SERVER_URL = "http://localhost:3000/airplanes.json";

export default class Airplanes extends Component {
  constructor() {
    super();
    this.state = {
      airplanes: [],
    };
    this.savePlane = this.savePlane.bind(this);
  }

  // react component lifecycle:
  componentDidMount() {
    const fetchPlanes = () => {
      axios(SERVER_URL).then((response) => {
        this.setState({ airplanes: response.data });
        // setTimeout(fetchPlanes, 5000);
      });
    };

    fetchPlanes();
  }

  // send object with 3 fields back:
  savePlane(name, rows, cols) {
    axios.post(SERVER_URL, { name: name, rows: rows, cols: cols }).then((response) => {
      this.setState({ airplanes: [...this.state.airplanes, response.data] });
    });
  }

  deletePlane(id) {
    axios.delete(SERVER_URL, { id: id }).then((response) => {
      console.log(response);
    });
  }

  render() {
    return (
      <div className="main-content">
        <div className="plane-container">
          <div className="plane-header">
            <h1>Create a new plane</h1>
          </div>
          <div className="add-plane-form">
            <PlaneForm onSubmit={this.savePlane} />
          </div>
          <div className="delete-form">
            <DeletePlane onSubmit={this.deletePlane} />
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
      id: "",
      name: "",
      rows: "",
      cols: "",
    };
    this._handleChange = this._handleChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
  }

  // _handleChange for multiple inputs:
  _handleChange(event) {
    const value = event.target.value;
    // dynamic key name in the object - [ ]:
    this.setState({ ...this.state, [event.target.name]: value });
  }

  _handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(this.state.name, this.state.rows, this.state.cols); //TODO
    this.setState({ name: " ", rows: "", cols: "" });
  }

  render() {
    return (
      <div className="plane-form">
        <div className="enter-field">
          <form onSubmit={this._handleSubmit}>
            <p>
              <label className="field-label">Model name: </label>
              <input
                type="text"
                name="name"
                placeholder="e.g. 747"
                onChange={this._handleChange}
                value={this.state.name}
              />
            </p>
            <p>
              <label className="field-label"># of seat rows: </label>
              <input
                type="text"
                name="rows"
                placeholder="Rows"
                onChange={this._handleChange}
                value={this.state.rows}
              />
            </p>
            <p>
              <label className="field-label"># of seat cols: </label>
              <input
                type="text"
                name="cols"
                placeholder="Columns"
                onChange={this._handleChange}
                value={this.state.cols}
              />
            </p>
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    );
  }
}

class DeletePlane extends Component {
  constructor() {
    super();
    this.state = {
      id: "",
      name: "",
      rows: "",
      cols: "",
    };
  }

  //TODO: currently not working:
  _handleDelete(event) {
    event.preventDefault();
    this.onSubmit(this.state.id); //TODO???
    this.setState({ id: "", name: " ", rows: "", cols: "" });
  }

  render() {
    return (
      <div className="delete-field">
        <form onSubmit={this._handleDelete}>
          <label>Delete Plane ID: </label>
          <input
            type="search"
            name="id"
            placeholder="ID #"
            onChange={this._handleChange}
            // value={this.state.id}
          />
          <button>Delete Plane</button>
        </form>
      </div>
    );
  }
}

// Always expect to receive props.
const PlanesList = (props) => {
  return (
    <div>
      <div className="plane">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Rows of Seats</th>
              <th>Seat Columns</th>
            </tr>
          </thead>
          <tbody>
            {props.planes.map((s) => (
              <tr key={s.id}>
                <td>{s.id}</td>
                <td>{s.name}</td>
                <td>{s.rows}</td>
                <td>{s.cols}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
