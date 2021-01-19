import "./styles/App.css";
import { Weather } from "./Weather";
import { CalendarApp } from "./Calendar-import";
import ListsContainer from "./ListsContainer";
import GalleryContainer from "./GalleryContainer";
import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

// Hooks
import useApplicationData from "../hooks/useApplicationData";

// Pages
import DashboardPage from "../pages"

function App() {
  const { state } = useApplicationData();
  console.log("collections:", state.collections);

  return (
    <div className="App">
      <ListsContainer todos={state.todos} habits={state.habits} />
      <CalendarApp />
      <Weather />
      <GalleryContainer items={state.collections} />
    </div>
  );
}
export default App;
