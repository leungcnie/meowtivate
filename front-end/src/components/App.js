/*
App.js is responsible for containing all the routes and passing state as props
*/

import "./styles/App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

// Hooks
import useApplicationData from "../hooks/useApplicationData";

// Pages imported from src/pages dir
import WelcomePage from "../pages/WelcomePage";
import LoginPage from "../pages/LoginPage";
import DashboardPage from "../pages/DashboardPage";
import ListsPage from "../pages/ListsPage";
import CatsPage from "../pages/CatsPage";
import AccountPage from "../pages/AccountPage";

function App() {
  const { state } = useApplicationData();

  return (
    <div className="App">
      <Router>
        <Switch>
          {/* Define route paths and nest page components inside */}
          <Route exact path="/" component={WelcomePage}>
            <WelcomePage state={state} />
          </Route>
          <Route exact path="/login" component={LoginPage}>
            <LoginPage state={state} />
          </Route>
          <Route exact path="/dashboard" component={DashboardPage}>
            <DashboardPage state={state} />
          </Route>
          <Route exact path="/lists" component={ListsPage}>
            <ListsPage state={state} />
          </Route>
          <Route exact path="/cats" component={CatsPage}>
            <CatsPage state={state} />
          </Route>
          <Route exact path="/account" component={AccountPage}>
            <AccountPage state={state} />
          </Route>
        </Switch>
      </Router>
      {/* <ListsContainer todos={state.todos} habits={state.habits} />
      <CalendarApp />
      <Weather />
      <GalleryContainer items={state.collections} /> */}
    </div>
  );
}
export default App;
