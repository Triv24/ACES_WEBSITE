import React from "react";
import "../css/Calendar.css"; // Make sure to import the CSS if needed

const Calendar = () => {
  return (
    <section id="calendar-schedule" className="calendar-section-with-bg">
      <div className="calendar-container wow fadeInUp">
        <div className="calendar-section-header">
          <h2>Upcoming Events</h2>
        </div>

        <div className="tab-content row justify-content-center">
          <img
            src="Assets\\Calendar\\Calendar1.png"
            alt="Event 1"
            className="calendar"
          />
          <img
            src="Assets\\Calendar\\Calendar2.png"
            alt="Event 2"
            className="calendar-toright"
          />
          <img
            src="Assets\\Calendar\\Calendar3.png"
            alt="Event 3"
            className="calendar"
          />
        </div>
      </div>
    </section>
  );
};

export default Calendar;
