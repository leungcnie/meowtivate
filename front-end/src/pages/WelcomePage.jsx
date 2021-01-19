import NavBar from "../components/NavBar";
import Button from "@material-ui/core/Button";
import axios from "axios";
import { Redirect } from "react-router";
// import useApplicationData from "../hooks/useApplicationData";

export default function WelcomePage(props) {
  const login = () => {
    axios.get("/api/login/1").then((res) => {
      console.log(res);
      res.redirect("/dashboard");
    });
  };

  return (
    <div className="Welcome">
      <NavBar />
      Go to localhost:3006/dashboard! This page is empty right now :^(
      <Button variant="contained" color="primary">
        Sign Up
      </Button>
      <Button variant="contained" color="secondary" onClick={login}>
        Login
        {/* <Redirect to="/dashboard" />; */}
      </Button>
    </div>
  );
}
