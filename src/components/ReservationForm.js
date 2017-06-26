import React from 'react';

const ReservationForm = () => {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="reservation_date">Date</label>
        <input type="date" name="reservation[date]" id="reservation_date" value="" className="form-control" />
      </div>
      <div className="form-group">
        <label htmlFor="reservation_time">Time</label>
        <input type="time" name="reservation[time]" id="reservation_time" className="form-control" />
      </div>
      <div className="form-group">
        <label htmlFor="reservation_guests">Number of Guests</label>
        <input type="number" name="reservation[guests]" min="1" max="9" id="reservation_guests" className="form-control" />
      </div>
      <button className="btn btn-primary">Make a Reservation</button>
    </form>
  );
};

export default ReservationForm;