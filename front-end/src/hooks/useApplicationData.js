import { useEffect, useState } from "react";
import axios from "axios";
import {
  removeFromActions,
  addToActions,
  getActionProperty,
  modifyActionWith,
} from "../helpers/stateHelpers";

export default function useApplicationDate() {
  const [state, setState] = useState({
    collections: [],
    todos: [],
    habits: [],
    actions: [],
    account: [],
  });

  useEffect(() => {
    console.log("Current state:", state)
  }, [state])

  // console.log("useApplicationDate correct is_completed state", state.account);

  const addAction = (action_name, categoryID) => {
    console.log("action_name in useApp", action_name);

    if (categoryID === 1) {
      // TODOS
      return axios.post("/api/todos/", { action_name }).then(res => {
        const actions = addToActions(res.data, state); // res.data contains the action obj
        const todos = actions.filter(obj => obj.category_id === 1);

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
      return axios.post("/api/habits/", { action_name }).then(res => {
        const actions = addToActions(res.data, state);
        const habits = actions.filter(obj => obj.category_id === 2);

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

  const deleteAction = actionID => {
    // Get updated actions
    const actions = removeFromActions(actionID, state);
    const habits = actions.filter(obj => obj.category_id === 2);
    const todos = actions.filter(obj => obj.category_id === 1);

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
    const habits = actions.filter(obj => obj.category_id === 2);
    const todos = actions.filter(obj => obj.category_id === 1);

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
      .catch(err => {
        console.log(err);
      });
  };

  // Update state when checkboxes are clicked
  const editCompletedState = (id, is_completed) => {
    // Get the action's current action_name
    const action_name = getActionProperty(id, "action_name", state);

    // Pass to modifyActionWith function
    const actions = modifyActionWith(is_completed, "is_completed", id, state);
    const habits = actions.filter(obj => obj.category_id === 2);
    const todos = actions.filter(obj => obj.category_id === 1);

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

  const actionFunctions = {
    addAction,
    deleteAction,
    editActionName,
    editCompletedState
  };

  useEffect(() => {
    Promise.all([
      axios.get("/api/collections/1"),
      axios.get("/api/todos/1"),
      axios.get("/api/habits/1"),
      axios.get("/api/actions/1"),
      axios.get("/api/accounts/login/1"),
    ])
      .then(res => {
        // console.log("res.data in useAppDate promise.all:", res.data);

        setState(prev => ({
          ...prev,
          collections: res[0].data,
          todos: res[1].data,
          habits: res[2].data,
          actions: res[3].data,
          account: res[4].data,
        }));
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return { state, actionFunctions };
}
