import { Weather } from "../components/Weather";
import { CalendarApp } from "../components/Calendar-import";
import ListsContainer from "../components/ListsContainer";
import GalleryContainer from "../components/GalleryContainer";

export default function DashboardPage(props) {
  const { state } = props;

  return (
    <div className="Dashboard">
      <ListsContainer todos={state.todos} habits={state.habits} />
      <CalendarApp />
      <Weather />
      <GalleryContainer items={state.collections} />
    </div>
  )
}