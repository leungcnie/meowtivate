import "./styles/App.css";
import { Weather } from "./Weather";
import { CalendarApp } from "./Calendar-import";
import ListsContainer from "./ListsContainer";

import { Gallery } from "./Gallery";
import useApplicationData from "../hooks/useApplicationData";

function App() {
  const { state } = useApplicationData();
  console.log("collections:", state.collections);

  return (
    <div className="App">
      <ListsContainer todos={state.todos} habits={state.habits} />
      <CalendarApp />
      <Weather />
      <Gallery items={state.collections} />
    </div>
  );
}
export default App;
