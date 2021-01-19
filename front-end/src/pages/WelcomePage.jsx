import NavBar from '../components/NavBar';

export default function WelcomePage(props) {
  const { state } = props;
  return (
    <div className="Welcome">
      <NavBar />
      Go to localhost:3006/dashboard! This page is empty right now :^(
    </div>
  )
};