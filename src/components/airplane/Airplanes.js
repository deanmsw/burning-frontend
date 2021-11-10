import React, { Component } from "react";
import "./airplanes.css";
import axios from "axios";

const SERVER_URL = "http://localhost:3000/airplanes.json";

export default class Airplanes extends Component {
  constructor() {
    super();
    this.state = {
      // TODO: replace this via AJAX from the planes server
      planes: [],
    };
    this.savePlane = this.savePlane.bind(this);
  }

  // react component lifecycle:
  componentDidMount() {
    const fetchPlanes = () => {
      axios(SERVER_URL).then((response) => {
        this.setState({ planes: response.data });
        setTimeout(fetchPlanes, 5000);
      });
    };

    fetchPlanes();
  }

  savePlane(content) {
    axios.post(SERVER_URL, { content: content }).then((response) => {
      this.setState({ planes: [...this.state.planes, response.data] });
    });
  }

  render() {
    return (
      <div>
        <div className="plane-container">
          <div>Create a new plane</div>
        </div>
      </div>
    );
  }
}
