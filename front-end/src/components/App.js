import "./styles/App.css";
import { Header } from "./Header";
import { Weather } from "./Weather";
import { CalendarApp } from "./Calendar-import";

import { Gallery } from "./Gallery";
// import collections from "./collections.json";
import useApplicationData from "../hooks/useApplicationData";

function App() {
  const { state } = useApplicationData();
  console.log("collections:", state.collections)

  return (
    <div className="App">
      <Header />
      <CalendarApp />
      <Weather />
      <Gallery items={state.collections} />
    </div>
  );
}

export default App;
