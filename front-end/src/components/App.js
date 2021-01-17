import "./styles/App.css";
import { Header } from "./Header";
import { Weather } from "./Weather";
import { CalendarApp } from "./Calendar-import";

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
