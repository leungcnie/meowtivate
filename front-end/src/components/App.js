import "./styles/App.css";
import { Header } from "./Header";
import { Weather } from "./Weather";
import { CalendarApp } from "./Calendar-import";

import { Gallery } from "./Gallery";
import collections from "./collections.json";

function App() {
  return (
    <div className="App">
      <Header />
      <CalendarApp />
      <Weather />
      <Gallery items={collections} />
    </div>
  );
}

export default App;
