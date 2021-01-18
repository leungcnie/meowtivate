import { useEffect, useReducer, useState } from "react";
import axios from "axios";

export default function useApplicationDate() {
  const [state, setState] = useState({
    collections: []
  });

  useEffect(() => {
    
    axios.get('/collections/1')
      .then((res) => {
        console.log("res.data in cats collection:", res.data)
        setState(prev => ({
          ...prev,
          collections: res.data
        }));
      })
      .catch((err) => {
        console.log(err);
      })

  }, []);

  return { state };

}
