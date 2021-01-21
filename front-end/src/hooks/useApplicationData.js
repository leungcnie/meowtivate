import { useEffect, useReducer, useState } from "react";
import axios from "axios";

export default function useApplicationDate() {
  const [state, setState] = useState({
    collections: [],
    todos: [],
    habits: [],
    actions: [],
  });

  const addAction = (actionName) => {};

  const deleteAction = (actionId) => {};

  const editAction = (actionId) => {};

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

  return { state };
}
