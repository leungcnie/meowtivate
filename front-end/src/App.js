import "./App.css";
import { Header } from "./stories/Header";
import { Weather } from "./components/Weather";
import { CalendarApp } from "./components/Calendar-import";

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
