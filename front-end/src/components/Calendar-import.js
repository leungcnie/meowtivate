import React, { useState, useEffect } from "react";

import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar } from "react-modern-calendar-datepicker";
import "./styles/calendar.css";
import getCurrentDate from "../helpers/getCurrentDate";
import EcoRoundedIcon from '@material-ui/icons/EcoRounded';
import { responsiveFontSizes } from "@material-ui/core";

export const CalendarApp = (props) => {
  // const defaultValue = {
  //   year: 2021,
  //   month: 1,
  //   day: 1,
  // };
  // const [selectedDay, setSelectedDay] = useState(defaultValue);
  // console.log("calender", props.items);

  // const logDatas = { props };
  // console.log("logDatas", logDatas);
  // const date = props.items.filter((item) => item.is_completed === true);
  // let dayDates = date.map((item) => item.date_created.substring(8, 10));
  // const parseIntDayArray = dayDates.map((item) => parseInt(item));

  // // [
  // // here we add some CSS classes
  // //   { year: 2021, month: 1, day: 4, className: "purpleDay" },
  // // ]

  // let dayObject = parseIntDayArray.map((item) => ({
  //   year: 2021,
  //   month: 1,
  //   day: item,
  //   className: "purpleDay",
  // }));

  // return (
  //   <>
  //     <Calendar
  //       value={selectedDay}
  //       onChange={setSelectedDay}
  //       shouldHighlightWeekends
  //       customDaysClassName={dayObject}
  //     />
  //   </>

  // Show different streak length depending on user id
  const { state, day } = props;
  // console.log("state in calendar", state);
  const { account, unlocked } = state;
  // console.log("account", account)
  const id = day ? day : 0;
  // const id = 4;

  const streak1 = {
    from: {
      year: 2021,
      month: 1,
      day: 25,
    },
    to: {
      year: 2021,
      month: 1,
      day: 27,
    },
  };
  const streak1Add = {
    from: {
      year: 2021,
      month: 1,
      day: 25,
    },
    to: {
      year: 2021,
      month: 1,
      day: 28,
    },
  };
  const streak2 = {
    from: {
      year: 2021,
      month: 1,
      day: 25,
    },
    to: {
      year: 2021,
      month: 1,
      day: 28,
    },
  };
  const streak3 = [];
  const streaksArray = [streak1, streak2, streak3, streak1Add];
  const initialStreak = streaksArray[id - 1];

  // Show different today selection depending on user id
  const today1 = { year: 2021, month: 1, day: 28, className: "todaySelect" };
  const today2 = { year: 2021, month: 1, day: 29, className: "todaySelect" };
  const today3 = { year: 2021, month: 1, day: 30, className: "todaySelect" };
  const todayArray = [today1, today2, today3];
  const initialToday = todayArray[id - 1];

  useEffect(() => {
    setSelectedDayRange(streaksArray[id - 1]);
    setToday(todayArray[id - 1]);
    // console.log("id in useEffect", id);
  }, [account]);

  const [selectedDayRange, setSelectedDayRange] = useState(initialStreak);
  const [today, setToday] = useState(initialToday);

  useEffect(() => {
    const today = getCurrentDate();
    const currentUnlocked = unlocked.map((obj) =>
      obj.date_unlocked.slice(0, 10)
    );
    const todayUnlockExists = currentUnlocked.includes(today);

    // console.log("calendar id", id === 1);
    // console.log("calendar todayUnlockExists", todayUnlockExists);
    if (id === 1 && todayUnlockExists) {
      setSelectedDayRange(streak1Add);
    }
  }, [unlocked]);

  return (
    <Calendar
      value={selectedDayRange}
      onChange={setSelectedDayRange}
      // colorPrimary="#0fbcf9" // Range start and end
      // colorPrimaryLight="rgba(75, 207, 250, 0.4)" // Range middle
      calendarTodayClassName="custom-today-day"
      calendarClassName="responsive-calendar"
      shouldHighlightWeekends
      customDaysClassName={[
        // here we add some CSS classes
        today,
      ]}
      renderFooter={() => (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "1rem 2rem",
          }}
          className="footer"
        >
          <EcoRoundedIcon/> CURRENT STREAK
        </div>
      )}
    />
  );
};
