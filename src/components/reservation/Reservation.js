import React, { Component } from "react";
import './reservation.css'
import axios from 'axios';

const SERVER_URL = 'http://localhost:3000/reservations.json';

export default class Reservation extends Component {

  constructor(){
    super();
    this.state = {
      reservation: []
    };
    this.saveReservation = this.saveReservation.bind(this);
  }

  // react component lifecycle:
  componentDidMount() {
    const fetchReservations = () => {
      axios(SERVER_URL).then((response) => {
        this.setState({ reservation: response.data });
        // setTimeout(fetchPlanes, 5000);
      });
    };

    fetchReservations();
  }

  saveReservation(seatnumber, resorigin, resdestination, resdate){
    const reservation = {
      seatnumber: seatnumber,
      resorigin: resorigin,
      resdestination: resdestination,
      resdate: resdate
    };
    this.setState({ reservation: [...this.state.reservation, reservation]  } );
    axios.post(SERVER_URL, {reservation}).then((result) => {
      console.log(result)
    });
  }


  render() {
    return (
    <div>
      <div>
        <h1> Burning Airlines</h1>
        <h2> Reservations Page </h2>

      </div>

      <div className="info">
        <FlightNumber />
        <Origin />
        <Destination />
        <Date />
      </div>

      <div className="reservation-container">
        <ReservationForm onSubmit={this.saveReservation}/>
      </div>

      <div>
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
        seatnumber: '',
        resorigin: '',
        resdestination: '',
        resdate: '',


    };
    this._handleChange = this._handleChange.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
    }

    _handleChange(event){
      const value = event.target.value;
      this.setState( { ...this.state, [event.target.name]: value } );
  };



    _handleSubmit(event){
      event.preventDefault();
      this.props.onSubmit(this.state.seatnumber, this.state.resorigin, this.state.resdestination, this.state.resdate );
      this.setState( { seatnumber: '', resorigin: '', resdestination: '', resdate: '' });
      // seats();
    }

    render() {
//
//     seatsChoice = (seat) => {
//
//      let rows = 10;
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
            <input type="text" name="seatnumber" placeholder="31B" onChange={ this._handleChange } value={ this.state.seatnumber }/>

            <h3>Origin</h3>
            <input type="text" name="resorigin" placeholder="LON" onChange={ this._handleChange } value={this.state.resorigin}/>

            <h3>Destination</h3>
            <input type="text" name="resdestination" placeholder="SYD" onChange={ this._handleChange } value={this.state.resdestination}/>

            <h3>Date</h3>
            <input type="text" name="resdate" placeholder="2021-12-02" onChange={ this._handleChange } value={this.state.resdate}/>


            <div className="submit">
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
        {// <div>
        //    {props.reservation.map( (r) => <p key={ r.id }>{r.seats}</p>)}
        // </div>

      }
        <div >
          <table>
            <thead>
                <tr>
                  <th>Seatnumber</th>
                  <th>Origin</th>
                  <th>Destination</th>
                  <th>Date</th>
                </tr>
              </thead>

              <tbody>
                {props.reservation.map((r) => (
                  <tr key={r.id}>
                    <td>{r.seatnumber}</td>
                    <td>{r.resorigin}</td>
                    <td>{r.resdestination}</td>
                    <td>{r.resdate}</td>
                  </tr>))}
              </tbody>

          </table>




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
