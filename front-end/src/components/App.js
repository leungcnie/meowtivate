import "./styles/App.css";
import { Weather } from "./Weather";
import { CalendarApp } from "./Calendar-import";
import ListsContainer from "./ListsContainer";
import GalleryContainer from "./GalleryContainer";
import useApplicationData from "../hooks/useApplicationData";

function App() {
  const { state } = useApplicationData();
  console.log("collections:", state.collections);

  return (
    <div className="App">
      <ListsContainer tasks={state.tasks} habits={state.habits} />
      <CalendarApp />
      <Weather />
      <GalleryContainer items={state.collections} />
    </div>
  );
}
export default App;
