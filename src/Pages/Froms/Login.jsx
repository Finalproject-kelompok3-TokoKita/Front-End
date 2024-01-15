import { useState } from "react";
import "./form.css";

const Login = () => {
  const [Loginemail, setLoginemail] = useState("");
  const [Loginpassword, setLoginpassword] = useState("");

  return (
    <>
      <body id="body">
        <div className="login-container">
          <h1 className="title">Tokokita</h1>
          <form id="form">
            <input
              className="form-input-ezer"
              type="text"
              placeholder="Username or Email address"
              required
            />
            <a href="" style={{ textAlign: "right" }}>
              Lupa Password
            </a>
            <input
              className="form-input-ezer"
              type="password"
              placeholder="Password"
              required
            />
            <button className="form-btn-ezer" type="submit">
              Login
            </button>
          </form>
          <p style={{ textAlign: "center" }}>
            Baru di Tokokita
            <a
              href={"/signup"}
              className="a-link-ezer"
              style={{ fontWeight: "bold" }}
            >
              Daftar
            </a>
          </p>
        </div>
      </body>
    </>
  );
};

export default Login;
