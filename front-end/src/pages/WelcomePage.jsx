import NavBar from "../components/NavBar";
import Button from "@material-ui/core/Button";
import axios from "axios";
import { useHistory } from "react-router-dom";

export default function WelcomePage() {
  let history = useHistory();

  const login = () => {
    axios.get("/api/login/1").then((res) => {
      console.log(res);
      history.push("/dashboard");
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
