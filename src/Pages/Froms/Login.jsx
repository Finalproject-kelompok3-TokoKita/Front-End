import { useState } from "react";
import "./form.css";
import axios from "axios"
import { useNavigate } from "react-router-dom"

const Login = () => {
  const [logindata, setLogindata] = useState({
    username: '',
    password: ''
  })

  const redirect = useNavigate()
  axios.defaults.withCredentials = true
  const handleLogin = (e) => {
    e.preventDefault()

    if (logindata.password == "" || logindata.username == "") {
      alert("Please Insert data")
    } else {
      axios.post('http://localhost:5000/login', logindata)
        .then(res => {
          if (res.data.message === "Log In success") {
            redirect('/')
          }
        })
        //.then(res => console.log(res))
        .then(err => console.log(err))
    }
  }

  return (
    <>
      <div id="body">
        <div className="login-container">
          <h1 className="title">Tokokita</h1>
          <form id="form" onSubmit={handleLogin}>
            <input
              className="form-input-ezer"
              type="text"
              placeholder="Username or Email address"
              name="username"
              onChange={e => setLogindata({ ...logindata, username: e.target.value })}
            />
            <a href="" style={{ textAlign: "right" }}>
              Lupa Password
            </a>
            <input
              className="form-input-ezer"
              type="password"
              placeholder="Password"
              name="password"
              onChange={e => setLogindata({ ...logindata, password: e.target.value })}
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
      </div>
    </>
  );
};

export default Login;
