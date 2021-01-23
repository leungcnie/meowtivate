import React, { useState } from "react";

import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar } from "react-modern-calendar-datepicker";
import "./styles/calendar.css";

export const CalendarApp = (props) => {
  const defaultValue = {
    year: 2021,
    month: 1,
    day: 1,
  };
  const [selectedDay, setSelectedDay] = useState(defaultValue);
  // console.log("calender", props.items);

  // const logDatas = { props };
  // console.log("logDatas", logDatas);
  const date = props.items.filter((item) => item.is_completed === true);
  let dayDates = date.map((item) => item.date_created.substring(8, 10));
  const parseIntDayArray = dayDates.map((item) => parseInt(item));

  // [
  // here we add some CSS classes
  //   { year: 2021, month: 1, day: 4, className: "purpleDay" },
  // ]

  let dayObject = parseIntDayArray.map((item) => ({
    year: 2021,
    month: 1,
    day: item,
    className: "purpleDay",
  }));

  return (
    <>
      <Calendar
        value={selectedDay}
        onChange={setSelectedDay}
        shouldHighlightWeekends
        customDaysClassName={dayObject}
      />
    </>
  );
};
