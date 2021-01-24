/*
App.js is responsible for containing all the routes and passing state as props
*/

import "./styles/App.css";

import "@fontsource/itim";
import "@fontsource/varela-round";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

// Hooks
import useApplicationData from "../hooks/useApplicationData";
// import useAuth from "../hooks/useAuth";

// Pages imported from src/pages dir
import WelcomePage from "../pages/WelcomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import DashboardPage from "../pages/DashboardPage";
import ListsPage from "../pages/ListsPage";
import CatsPage from "../pages/CatsPage";
import AccountPage from "../pages/AccountPage";
import NotFoundPage from "./404";
import SMSForm from "./SMSForm";

// react-notification
import ReactNotification from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import { store } from "react-notifications-component";

function App() {
  const { state, actionFunctions, catFunctions } = useApplicationData();
  // const { user } = useAuth();
  console.log("app.js is_completed");

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
          <Route exact path="/register" component={RegisterPage}>
            <RegisterPage state={state} />
          </Route>
          <Route exact path="/dashboard" component={DashboardPage}>
            <DashboardPage state={state} />
            <SMSForm />
          </Route>
          <Route exact path="/lists" component={ListsPage}>
            <ReactNotification />

            <ListsPage
              state={state}
              actionFunctions={actionFunctions}
              catFunctions={catFunctions}
            />
          </Route>
          <Route exact path="/cats" component={CatsPage}>
            <CatsPage state={state} />
          </Route>
          <Route exact path="/account" component={AccountPage}>
            <AccountPage state={state} />
          </Route>
          <Route exact path="*" component={NotFoundPage} />
        </Switch>
      </Router>
    </div>
  );
}
export default App;
