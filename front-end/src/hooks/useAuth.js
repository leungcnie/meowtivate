import { useEffect, useState } from "react";
import axios from "axios";

export default function useAuth() {
  const [user, setUser] = useState({
    accounts: [],
  });
  useEffect(() => {
    console.log("Current user:", user);
  }, [user]);

  useEffect(() => {
    Promise.all([axios.get("/api/accounts/1")])
      .then((res) => {
        // console.log("res.data in useAppDate promise.all:", res.data);

        setUser((prev) => ({
          ...prev,
          accounts: res[0].data,
        }));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return { user };
}
