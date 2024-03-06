import logo from "./logo.svg";
import "./App.css";
import LoginForm from "./components/Login-Form";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <LoginForm></LoginForm>
    </div>
  );
}

export default App;
