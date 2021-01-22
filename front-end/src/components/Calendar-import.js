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
  console.log("calender", props.items);

  // const logDatas = { props };
  // console.log("logDatas", logDatas);
  const date = props.items.filter((item) => item.is_completed === true);
  let dayAray = date.map((item) => item.date_created.substring(0, 10));
  console.log(dayAray);
  // let dayAray = [].push();
  // console.log("dayAray", dayAray);
  // const year = 2021;
  // const month = 1;
  // const day = 4;

  console.log("dates", date);
  return (
    <Calendar
      value={selectedDay}
      onChange={setSelectedDay}
      shouldHighlightWeekends
      customDaysClassName={[
        // here we add some CSS classes
        { year: 2021, month: 1, day: 4, className: "purpleDay" },
      ]}
    />
  );
};
