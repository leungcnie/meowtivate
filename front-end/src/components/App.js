import React from "react";
import Grid from "./GridContainer"
import "./styles/App.css";
// import { Header } from "./Header";
import { Weather } from "./Weather";
import { CalendarApp } from "./Calendar-import";

import { Gallery } from "./Gallery";
import useApplicationData from "../hooks/useApplicationData";

function App() {
  const { state } = useApplicationData();
  console.log("collections:", state.collections)

  return (
    <div className="App">
      {/* <Header /> */}
      <CalendarApp />
      <Weather />
      <Grid/>
      <Gallery items={state.collections} />
    </div>
  );
}

// ReactDOM.render(<App />, document.querySelector("#app"));


// import "./styles/App.css";
// import { Header } from "./Header";
// import { Weather } from "./Weather";
// import { CalendarApp } from "./Calendar-import";

// import { Gallery } from "./Gallery";
// import collections from "./collections.json";

// function App() {
//   return (
//     <div className="App">
//       <Header />
//       <CalendarApp />
//       <Weather />
//       <Gallery items={collections} />
//     </div>
//   );
// }

export default App;
