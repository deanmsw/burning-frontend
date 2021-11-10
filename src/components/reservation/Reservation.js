import React, { Component } from "react";



export default class Reservation extends Component {
  render() {
    return (
    <div>
      <div>
        <h1> Burning Airlines</h1>
        <h2> Reservations Page </h2>
        <h3> Book your Seat </h3>
      </div>

      <div>
        <Seats />
        <FlightNumber />
        <Origin />
        <Destination />
        <Date />

      </div>



      <div display="grid" >



      </div>


    </div>
  )
  }
}

class Seats extends Component {
    render() {
      return (
        <h3>Seats coming soon</h3>
      )
    }
  }


class FlightNumber extends Component {
  render() {
    return (
      <h3>flight number coming soon</h3>
    );
  }
}

class Origin extends Component {
  render() {
    return (
      <h3>origin coming soon</h3>
    )
  }
}

class Destination extends Component {
  render() {
    return (
      <h3>Destination coming soon</h3>
    );
  }
}

class Date extends Component {
  render() {
    return (
      <h3>Date coming soon</h3>
    );
  }
}
