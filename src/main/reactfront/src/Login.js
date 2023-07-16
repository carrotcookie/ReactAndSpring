import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    // 간단히 입력값이 비어있지 않은지만 확인합니다.
    if (username.trim() !== "" && password.trim() !== "") {
      setLoggedIn(true);
    } else {
      alert("입력해주세요");
    }
  };

  return (
    <>
      {loggedIn ? (
        <>
          <div className="main_title">
            <div>Welcome, {username}!</div>
            <div className="logout_btn">
              <button onClick={() => setLoggedIn(false)}>Logout</button>
            </div>
          </div>
          {/* <App /> */}
        </>
      ) : (
        <div className="login-container">
          <h2>Login</h2>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={handleUsernameChange}
          />
          <br></br>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
          />
          <br></br>
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </>
  );
};

export default Login;
