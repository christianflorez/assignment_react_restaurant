import React from 'react';
import ReservationForm from './ReservationForm';
import GoogleMap from './GoogleMap';
import './Reservations.css';
import data from '../data.js';

const Reservations = () => {
  return (
    <div id="reservations" className="Reservations">
      <div className="jumbotron jumbotron-alternating">
        <div className="container">
          <h1>{ data.reservations.title }n</h1>
          <div className="col-md-8">
            <p>{ data.reservations.description }</p>
            <h3>{ data.reservations.subtitle }</h3>
            <GoogleMap iframe='iframe' src={ data.reservations.mapUrl }/>
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