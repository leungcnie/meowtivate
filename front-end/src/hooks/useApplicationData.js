import { useEffect, useReducer, useState } from "react";
import axios from "axios";

export default function useApplicationDate() {
  const [state, setState] = useState({
    collections: [],
    todos: [],
    habits: [],
  });

  //

  const login = () => {
    const loginURL = `'/api/login/1'`;
    return axios.get(loginURL).then(() => {
      setState(() => ({ ...state }));
    });
  };

  // const addlist = () => {
  //   const loginURL = `/api/login/1`;
  //   return axios.get(loginURL).then(() => {
  //     setState(() => ({ ...state }));
  //   });
  // };

  // const login = () => {
  //   const loginURL = `/api/login/1`;
  //   return axios.get(loginURL).then((res) => {
  //     res.data;
  //   });
  // };

  useEffect(() => {
    Promise.all([
      axios.get("/api/collections/1"),
      axios.get("/api/todos/1"),
      axios.get("/api/habits/1"),
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

  return { state, login };
}
