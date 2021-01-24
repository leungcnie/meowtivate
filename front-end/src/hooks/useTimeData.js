// import { useEffect, useState } from "react";
// import { format } from "date-fns";

// export default function useTimeData() {
//   let nd = new Date();

//   const [date, setDate] = useState({
//     date: {
//       day: format(nd, "dd"),
//       dayDisplay: format(nd, "d"),
//       month: format(nd, "MM"),
//       monthDisplay: format(nd, "MMM"),
//       year: format(nd, "y"),
//       weekday: format(nd, "EEEE"),
//     },
//   });

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setDate((date) => ({ ...date }));
//     }, 1000);
//     return () => clearInterval(interval);
//   }, []);
//   return { date };
// }
