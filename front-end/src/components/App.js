/*
App.js is responsible for containing all the routes and passing state as props
*/
import React, { useEffect, useState } from "react";

import "./styles/App.css";
import "@fontsource/itim";
import "@fontsource/varela-round";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import getCurrentDate from "../helpers/getCurrentDate";

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
import InventoryPage from "../pages/InventoryPage";
import ShopPage from "../pages/ShopPage";

import NotFoundPage from "./404";

function App() {
  const {
    state,
    actionFunctions,
    catFunctions,
    day,
    setDay,
    addPot,
    potFunctions
   } = useApplicationData();
  const { unlocked, account } = state;
  const id = day ? day : 0;
  // const id = 1;

  const [streak, setStreak] = useState(3); // Hardcode initial streak value
  const [coins, setCoins] = useState(streak * 100);


  // Add 1 to current streak if a cat was unlocked today
  useEffect(() => {
    const today = getCurrentDate();
    // Get array of unlocked dates in "yyyy-mm-dd"
    const currentUnlocked = unlocked.map((obj) =>
      obj.date_unlocked.slice(0, 10)
    );
    if (currentUnlocked.includes(today)) {
      setStreak((prev) => prev + 1);
    }
  }, [unlocked]);

  // Change streak depending on user
  useEffect(() => {
    if (id === 2) {
      setStreak(4);
    } else if (id === 3) {
      setStreak(0);
    }
  }, [state]);

  // Update streak whenever reloading
  useEffect(() => {
    setCoins(streak * 100);
  }, [streak])

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
            {/* <DashboardPage state={state} /> */}
            <DashboardPage
              state={state}
              streak={streak}
              day={day}
              setDay={setDay}
              id={id}
              coins={coins}
              setCoins={setCoins} />
          </Route>
          <Route exact path="/lists" component={ListsPage}>
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
          <Route exact path="/inventory" component={InventoryPage}>
            <InventoryPage 
              state={state}
              potFunctions={potFunctions} />
          </Route>
          <Route exact path="/shop" component={ShopPage}>
            <ShopPage 
              state={state}
              coins={coins}
              setCoins={setCoins}
              addPot={addPot} />
          </Route>
          <Route exact path="*" component={NotFoundPage} />
        </Switch>
      </Router>
    </div>
  );
}
export default App;
