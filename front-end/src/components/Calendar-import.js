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
  let dayDates = date.map((item) => item.date_created.substring(8, 10));
  // console.log(dayDates);
  // let dayAray = [].push();
  // console.log("dayAray", dayAray);
  // const year = 2021;
  // const month = 1;
  // const day = 4;

  const parseIntDayArray = dayDates.map((item) => parseInt(item));

  console.log("parseIntDayArray", parseIntDayArray);

  const map = Array.prototype.map;
  const customDaysClassName = map.call(parseIntDayArray, (eachLetter) => {
    return `{ year: 2021, month: 1, day: ${eachLetter}, className: "purpleDay"},`;
  });

  console.log("customDaysClassName", customDaysClassName);

  // [
  // here we add some CSS classes
  //   { year: 2021, month: 1, day: 4, className: "purpleDay" },
  // ]

  // [{ customDaysClassName }]

  console.log("dates", date);
  return (
    <>
      <Calendar
        value={selectedDay}
        onChange={setSelectedDay}
        shouldHighlightWeekends
        customDaysClassName={[
          //here we add some CSS classes
          { year: 2021, month: 1, day: 4, className: "purpleDay" },
          { year: 2021, month: 1, day: 5, className: "purpleDay" },
        ]}
      />
      <p>{customDaysClassName}</p>
    </>
  );
};
