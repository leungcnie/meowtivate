import { Weather } from "../components/Weather";
import { CalendarApp } from "../components/Calendar-import";
import NavBar from '../components/NavBar';

export default function DashboardPage(props) {
  const { state } = props;

  return (
    <div className="Dashboard">
      <NavBar />
      <CalendarApp />
      <Weather />
    </div>
  )
}