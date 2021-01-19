import NavBar from "../components/NavBar";
import Button from "@material-ui/core/Button";
// import useApplicationData from "../hooks/useApplicationData";

export default function WelcomePage(props) {
  const { state } = props;
  return (
    <div className="Welcome">
      <NavBar />
      Go to localhost:3006/dashboard! This page is empty right now :^(
      <Button variant="contained" color="primary">
        Sign Up
      </Button>
      <Button variant="contained" color="secondary">
        Login
      </Button>
    </div>
  );
}
