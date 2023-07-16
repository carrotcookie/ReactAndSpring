import logo from "./logo.png";
import "./App.css";

const LogIn = () => {
  console.log(1);
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="logo_btn" onClick={LogIn}>
          <img src={logo} className="App-logo" alt="logo"></img>
          <div className="home-btn"></div>
          <div className="home-name"></div>
        </div>
      </header>
    </div>
  );
}

export default App;
