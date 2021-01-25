import { useEffect, useState } from "react";
import axios from "axios";
import {
  removeFromActions,
  addToActions,
  getActionProperty,
  modifyActionWith,
  modifyStreakActionWith,
  addToLogDatas,
  getNewUnlockedCat,
} from "../helpers/stateHelpers";

export default function useApplicationDate() {
  const [state, setState] = useState({
    unlocked: [],
    todos: [],
    habits: [],
    actions: [],
    allCats: [],
    // logDatas: [],
    // streaks: [],

    shopInventory: [],
    userInventory: [],
  });

  // User/day picker state
  const [day, setDay] = useState(1);
  console.log("app, appliction", day);
  // Log current state for debugging
  useEffect(() => {
    console.log("Current state:", state);
  }, [state]);

  //--------------------
  // ACTION FUNCTIONS //
  //--------------------
  const addAction = (action_name, categoryID) => {
    console.log("action_name in useApp", action_name);

    if (categoryID === 1) {
      // TODOS
      return axios.post("/api/todos/", { action_name }).then((res) => {
        const actions = addToActions(res.data, state); // res.data contains the action obj
        const todos = actions.filter((obj) => obj.category_id === 1);

        console.log("updatedActions", actions);
        // console.log("updatedHabits", habits);
        console.log("updatedTodos", todos);

        setState({
          ...state,
          actions,
          todos,
        });
      });
    } else if (categoryID === 2) {
      // HABITS
      return axios.post("/api/habits/", { action_name }).then((res) => {
        const actions = addToActions(res.data, state);
        const habits = actions.filter((obj) => obj.category_id === 2);

        console.log("updatedActions", actions);
        console.log("updatedHabits", habits);
        // console.log("updatedTodos", todos);

        setState({
          ...state,
          actions,
          habits,
        });
      });
    }
  };

  const deleteAction = (actionID) => {
    // Get updated actions
    const actions = removeFromActions(actionID, state);
    const habits = actions.filter((obj) => obj.category_id === 2);
    const todos = actions.filter((obj) => obj.category_id === 1);

    // Delete action in db and update state
    return axios.delete(`/api/actions/${actionID}`).then(() => {
      setState({
        ...state,
        todos,
        habits,
        actions,
      });
    });
  };

  const editActionName = (id, action_name) => {
    // Get the action's current is_completed bool
    const is_completed = getActionProperty(id, "is_completed", state);

    // Pass to modifyActionWith function
    const actions = modifyActionWith(action_name, "action_name", id, state);
    const habits = actions.filter((obj) => obj.category_id === 2);
    const todos = actions.filter((obj) => obj.category_id === 1);

    console.log("updatedActions", actions);
    console.log("updatedHabits", habits);
    console.log("updatedTodos", todos);

    // Update action_name of action in db and update state
    return axios
      .put(`/api/actions/${id}`, { id, action_name, is_completed })
      .then(() => {
        setState({
          ...state,
          actions,
          habits,
          todos,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Update state when checkboxes are clicked
  const editCompletedState = (id, is_completed) => {
    // Get the action's current action_name
    const action_name = getActionProperty(id, "action_name", state);

    // Pass to modifyActionWith function
    const actions = modifyActionWith(is_completed, "is_completed", id, state);
    const habits = actions.filter((obj) => obj.category_id === 2);
    const todos = actions.filter((obj) => obj.category_id === 1);

    console.log("updatedActions", actions);
    console.log("updatedHabits", habits);
    console.log("updatedTodos", todos);

    // Update is_completed of action in db and update state
    return axios
      .put(`/api/actions/${id}`, { id, action_name, is_completed })
      .then(() => {
        setState({
          ...state,
          actions,
          habits,
          todos,
        });
      });
  };

  //post a completed into logdate
  const postLogData = (id, date_created) => {
    return axios
      .post(`/api/streaks/logdata/${id}`, { date_created })
      .then((res) => {
        const logDatas = addToLogDatas(res.data, state);
        setState({
          ...state,
          logDatas,
        });
      });
  };

  // update the streak
  const updateStreak = (id, val) => {
    const streaks = modifyStreakActionWith(
      val,
      "current_streak",
      "streak",
      id,
      state
    );
    const updatedStreak = streaks[0].streak;
    const updatedCurrent = streaks[0].current_streak;

    return axios
      .put(`/api/streaks/${id}`, { id, updatedStreak, updatedCurrent })
      .then((res) => {
        setState({
          ...state,
          streaks,
        });
      });
  };

  const actionFunctions = {
    addAction,
    deleteAction,
    editActionName,
    editCompletedState,
    postLogData,
    updateStreak,
  };

  //---------------------------
  // UNLOCKED CATS FUNCTIONS //
  //---------------------------

  const addUnlocked = (cat_id, user_id) => {
    return axios
      .post("/api/collections/unlocked", { cat_id, user_id })
      .then((res) => {
        // Get newly unlocked cat and add to 'unlocked'
        const unlocked = getNewUnlockedCat(cat_id, res.data, state);

        setState({
          ...state,
          unlocked,
        });
      });
  };

  // Store all cat functions
  const catFunctions = {
    addUnlocked,
  };

  useEffect(() => {
    Promise.all([
      //   axios.get("/api/collections/1"),
      //   axios.get("/api/todos/1"),
      //   axios.get("/api/habits/1"),
      //   axios.get("/api/actions/1"),
      //   axios.get("/api/collections"),
      //   axios.get("/api/streaks/logdata/1"),
      //   axios.get("/api/streaks/1"),
      // ])
      //   .then((res) => {
      // console.log("res.data in useAppDate promise.all:", res.data);
      axios.get(`/api/collections/${day}`),
      axios.get(`/api/todos/${day}`),
      axios.get(`/api/habits/${day}`),
      axios.get(`/api/actions/${day}`),
      axios.get(`/api/accounts/${day}`),
      axios.get(`/api/collections`),
      axios.get(`/api/shop/${day}`),
      axios.get(`/api/inventory/${day}`),
      // axios.get("/api/collections/1"),
      // axios.get("/api/todos/1"),
      // axios.get("/api/habits/1"),
      // axios.get("/api/actions/1"),
      // axios.get("/api/accounts/1"),
      // axios.get("/api/collections"),
    ])
      .then((res) => {
        // console.log("shop", res[6].data);

        setState((prev) => ({
          ...prev,
          unlocked: res[0].data,
          todos: res[1].data,
          habits: res[2].data,
          actions: res[3].data,
          // allCats: res[4].data,
          // logDatas: res[5].data,
          // streaks: res[6].data,
          account: res[4].data,
          allCats: res[5].data,
          shopInventory: res[6].data,
          userInventory: res[7].data,
        }));
      })
      .catch((err) => {
        console.log(err);
      });
  }, [day]);

  return { state, actionFunctions, catFunctions, setDay, day };
}
