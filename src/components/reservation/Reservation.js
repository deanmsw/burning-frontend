import React, { Component } from "react";
import './reservation.css'
import axios from 'axios';

const SERVER_URL = 'http://localhost:3000/reservations.json';

export default class Reservation extends Component {

  constructor(){
    super();
    this.state = {
      reservation: []
    }
    this.saveReservation = this.saveReservation.bind(this);
  }


  saveReservation(content){ this.setState( { reservation: [...this.state.reservation, content]  } );
  }


  render() {
    return (
    <div>
      <div>
        <h1> Burning Airlines</h1>
        <h2> Reservations Page </h2>

      </div>

      <div class="info">
        <FlightNumber />
        <Origin />
        <Destination />
        <Date />
      </div>

      <div class="reservation-container">
        <ReservationForm onSubmit={this.saveReservation}/>
        <ReservationList reservation={ this.state.reservation }/>
      </div>



    </div>
  )
  }
}

class ReservationForm extends Component {
    constructor(){
      super();
      this.state = {
        seats: '',
        origin: '',
        destination: '',
        date: '',


    };
    this._handleChange = this._handleChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
    }

    _handleChange(event){
      this.setState( { content: event.target.value } )
    }
    _handleSubmit(event){
      event.preventDefault();
      this.props.onSubmit(this.state.content)
      this.setState( { content: '' });
      // seats();
    }

    render() {

//     seatsChoice = (seat) => {
//
//      let rows = ;
//      let cols = 6;
//      let table = [];
//
//      for (let r = 0; r < rows; r++){
//        const cells = [];
//        for (let c = 0; c < cols; c++){
//          cells.push(<td><input type="submit" value={ `${ r } ${ c }`  }/></td>);
//        }
//        table.push(<tr>{ cells }</tr>);
//      }
// }

      return (
        <div>
          <h3> Book your Reservation </h3>
          <form onSubmit={ this._handleSubmit }>

            <h3>Seat</h3>
            <input placeholder="31B" onChange={ this._handleChange } value={this.state.seats}/>

            <h3>Origin</h3>
            <input placeholder="London" onChange={ this._handleChange } value={this.state.origin}/>

            <h3>Destination</h3>
            <input placeholder="Hong Kong" onChange={ this._handleChange } value={this.state.destination}/>

            <h3>Date</h3>
            <input placeholder="2021-12-02" onChange={ this._handleChange } value={this.state.date}/>

            <div class="submit">
              <input type="submit" value="Reservation" />
            </div>

          </form>
        </div>
      );
    }
  }





const ReservationList = (props) => {

    return (

      <div>
        <div>
           {props.reservation.map( (r) => <p>{r}</p>)}
        </div>

        <div>

        </div>
      </div>
    );

}




class FlightNumber extends Component {
  constructor(){
    super();
    this.state = {
      // TODO: replace this via AJAX from the flights server
      flightnumbers: '',
    };
  }

  render() {
    return (
      <div></div>
    );
  }
}



class Origin extends Component {
  constructor() {
    super();
    this.state = {
      // TODO: replace this via AJAX from the flights server
      originName: '',
    };
  }
  render() {
    return (
      <h3>origin coming soon</h3>
    )
  }
}


class Destination extends Component {
  constructor() {
    super();
    this.state = {
      // TODO: replace this via AJAX from the destination server
      destinationName: '',
    };
  }


  render() {
    return (
      <h3>Destination coming soon</h3>
    );
  }
}

class Date extends Component {
  constructor() {
    super();
    this.state = {
      // TODO: replace this via AJAX from the server
      date: '',
    };
  }
  render() {
    return (
      <h3>Date coming soon</h3>
    );
  }
}
