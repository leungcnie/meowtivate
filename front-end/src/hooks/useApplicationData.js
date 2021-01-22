import { useEffect, useReducer, useState } from "react";
import axios from "axios";

export default function useApplicationDate() {
  const [state, setState] = useState({
    collections: [],
    todos: [],
    habits: [],
    actions: [],
    account: [],
  });

  // console.log("useApplicationDate correct is_completed state", state.account);

  // const removeFromHabits = (id) => {
  //   const target = state.habits.filter((obj) => {
  //     obj.id === id
  //   })[0];

  //   const targetIndex = habits.indexOf(target);

  //   const habits = [...state.habits].slice()
  // }

  const addAction = (actionName) => {};

  const deleteAction = (actionId) => {
    // Delete habit/todo with actionId in the current state

    return axios.delete(`/api/actions/${actionId}`).then(() => {
      setState({
        ...state,
      });
    });
  };

  const editAction = (actionId) => {};

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
      axios.get("/api/accounts/1"),
    ])
      .then((res) => {
        console.log("res.data in cats collection:", res.data);
        setState((prev) => ({
          ...prev,
          collections: res[0].data,
          todos: res[1].data,
          habits: res[2].data,
          actions: res[3].data,
          account: res[4].data,
        }));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return { state, deleteAction };
}
