import React, { useState } from "react";

import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar } from "react-modern-calendar-datepicker";
import "./styles/calendar.css";

export const CalendarApp = () => {
  const defaultFrom = {
    year: 2021,
    month: 1,
    day: 20,
  };
  const defaultTo = {
    year: 2021,
    month: 1,
    day: 23,
  };
  const defaultValue = {
    from: defaultFrom,
    to: defaultTo,
  };

  const [selectedDayRange, setSelectedDayRange] = useState(
    defaultValue
  );

  return (
    <Calendar
      value={selectedDayRange}
      onChange={setSelectedDayRange}
      // colorPrimary="#0fbcf9" // Range start and end
      // colorPrimaryLight="rgba(75, 207, 250, 0.4)" // Range middle
      calendarTodayClassName="custom-today-day"
      shouldHighlightWeekends
      // customDaysClassName={[
        // here we add some CSS classes
        // { year: 2021, month: 1, day: 4, className: "purpleDay" },
        // { year: 2021, month: 1, day: 12, className: "orangeDay" },
        // { year: 2021, month: 1, day: 18, className: "yellowDay" },
        // { year: 2021, month: 1, day: 26, className: "navyBlueDay" },
      // ]}
      renderFooter={() => (
        <div 
          style={{ display: 'flex', justifyContent: 'center', padding: '1rem 2rem' }}
          className="footer">
          🌱 CURRENT STREAK
        </div>
      )}
    />
  );
};
