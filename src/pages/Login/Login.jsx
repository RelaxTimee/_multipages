/* eslint-disable no-unused-vars */
/* eslint-disable no-empty */
import { useRef } from "react";

import Form from "react-bootstrap/Form";

import "./Login.css";
import { verifyUser } from "../../data/users";

// eslint-disable-next-line react/prop-types
function Login({ setToken, setRole }) {
  const usernameRef = useRef();
  const passwordRef = useRef();

  return (
    <div className="login-container ">
      <Form.Label htmlFor="username">username</Form.Label>
      <Form.Control
        type="text"
        id="username "
        placeholder="username"
        style={{ textAlign: "center" }}
        ref={usernameRef}
      />
      <Form.Label htmlFor="password">password</Form.Label>
      <Form.Control
        type="password"
        id="password"
        placeholder="password"
        style={{ textAlign: "center" }}
        ref={passwordRef}
      />
      <button
        className="btn btn-success mt-3"
        onClick={() => {
          const username = usernameRef.current.value.trim();
          const password = passwordRef.current.value.trim();
          usernameRef.current.value = "";
          passwordRef.current.value = "";
          const userInfo = verifyUser(username, password);
          if (userInfo === null) {
            alert("Wrong username or password");
            usernameRef.current.focus();
          } else {
            setToken(userInfo.token);
            setRole(userInfo.role);
          }
        }}
      >
        {" "}
        Login
      </button>
    </div>
  );
}

export default Login;
