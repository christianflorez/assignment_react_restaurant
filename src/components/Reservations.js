import React from 'react';
import ReservationForm from './ReservationForm';
import GoogleMap from './GoogleMap';
import './Reservations.css';

const Reservations = () => {
  return (
    <div id="reservations" className="Reservations">
      <div className="jumbotron jumbotron-alternating">
        <div className="container">
          <h1>Make a Reservation</h1>
          <div className="col-md-8">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium sint laborum veniam earum iste incidunt ipsa, asperiores ipsum repellat sapiente quam nulla pariatur, soluta! Nemo vel necessitatibus odit voluptatem in!</p>
            <h3>Our Location</h3>
            <GoogleMap iframe='iframe'/>
          </div>
          <div className="col-md-4">
            <ReservationForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reservations;