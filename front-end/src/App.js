import "./App.css";
import { Header } from "./stories/Header";
import { Weather } from "./stories/Weather";
import { CalendarApp } from "./stories/Calendar-import";

function App() {
  return (
    <div className="App">
      <Header />
      <CalendarApp />
      <Weather />
    </div>
  );
}

export default App;
