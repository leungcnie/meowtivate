import { useEffect, useReducer, useState } from "react";
import axios from "axios";
import { removeFromActions, addToActions } from '../helpers/stateHelpers';

export default function useApplicationDate() {
  const [state, setState] = useState({
    collections: [],
    todos: [],
    habits: [],
    actions: [],
  });

  // console.log("useApplicationDate correct is_completed state", state.actions);

  const addAction = (action_name, categoryID) => {
    console.log("action_name in useApp", action_name);
    if (categoryID === 1) {
      return axios.post('/api/todos/', { action_name })
        .then((res) => {
          const actions = addToActions(res.data, state); // res.data contains the action obj
          const todos = actions.filter(obj => obj.category_id === 1);

          console.log("updatedActions", actions);
          // console.log("updatedHabits", habits);
          console.log("updatedTodos", todos);

          setState({
            ...state,
            actions,
            todos
          })
        })
    } else if (categoryID === 2) {
      return axios.post('/api/habits/', { action_name })
      .then((res) => {
        const actions = addToActions(res.data, state);
        const habits = actions.filter(obj => obj.category_id === 2);

        console.log("updatedActions", actions);
        console.log("updatedHabits", habits);
        // console.log("updatedTodos", todos);

        setState({
          ...state,
          actions,
          habits
        })
      })    
    }
  };

  const deleteAction = (actionID) => {
    // Get updated actions
    const actions = removeFromActions(actionID, state);
    const habits = actions.filter(obj => obj.category_id === 2);
    const todos = actions.filter(obj => obj.category_id === 1);

    // Delete action in db and update state
    return axios.delete(`/api/actions/${actionID}`).then(() => {
      setState({
        ...state,
        todos: todos,
        habits: habits,
        actions: actions
      });
    });
  };

  const editAction = (actionID) => {};

  const listFunctions = {
    addAction,
    deleteAction,
    editAction,
  };

  useEffect(() => {
    Promise.all([
      axios.get("/api/collections/1"),
      axios.get("/api/todos/1"),
      axios.get("/api/habits/1"),
      axios.get("/api/actions/1"),
    ])
      .then((res) => {
        console.log("res.data in cats collection:", res.data);
        setState((prev) => ({
          ...prev,
          collections: res[0].data,
          todos: res[1].data,
          habits: res[2].data,
          actions: res[3].data,
        }));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return { state, deleteAction, addAction };
}
