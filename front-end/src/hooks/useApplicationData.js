import { useEffect, useReducer, useState } from "react";
import axios from "axios";

export default function useApplicationDate() {
  const [state, setState] = useState({
    collections: [],
    todos: [],
    habits: [],
  });

  useEffect(() => {
    Promise.all([
      axios.get("/collections/1"),
      axios.get("/todos/1"),
      axios.get("/habits/1"),
    ])
      .then((res) => {
        console.log("res.data in cats collection:", res.data);
        setState((prev) => ({
          ...prev,
          collections: res[0].data,
          todos: res[1].data,
          habits: res[2].data,
        }));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return { state };
}
