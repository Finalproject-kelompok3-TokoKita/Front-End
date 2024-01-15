import { useState } from "react";
import axios from "axios";
import "./form.css";

const Register = () => {
  const [Regisname, setRegisname] = useState("");
  const [Regisemail, setRegisemail] = useState("");
  const [Regispassword, setRegispassword] = useState("");
  const [Regispasswordcheck, setRegispasswordcheck] = useState("");

  const handleRegister = (event) => {
    event.preventDefault();
    axios
      .post("", {
        name: Regisname,
        EMail: Regisemail,
        password: Regispassword,
      })
      .then((res) => console.log(response))
      .catch((er) => console.log(er));
  };

  return (
    <>
      <div id="body">
        <div className="register-container">
          <h1 className="title">Daftar</h1>
          <form id="form" onSubmit={handleRegister}>
            <input
              className="form-input-ezer"
              type="text"
              placeholder="Username"
              onChange={(e) => setRegisname(e.target.value)}
            />

            <input
              className="form-input-ezer"
              type="email"
              placeholder="Email"
              onChange={(e) => setRegisemail(e.target.value)}
            />

            <input
              className="form-input-ezer"
              type="password"
              id="password"
              placeholder="Password"
              onChange={(e) => setRegispassword(e.target.value)}
            />

            <input
              className="form-input-ezer"
              type="password"
              id="confirm-password"
              placeholder="Ulangi Password"
              onChange={(e) => setRegispasswordcheck(e.target.value)}
            />
            <div className="show-password">
              <input type="checkbox" id="show-password-checkbox" />
              <label htmlFor="show-password-checkbox" className="show">
                Tampilkan Password
              </label>
            </div>
            <button className="form-btn-ezer" type="submit">
              Daftar
            </button>
          </form>
          <p style={{ marginTop: "1rem" }}>
            Sudah punya akun?
            <a
              href={"/login"}
              className="a-link-ezer"
              style={{ fontWeight: "bold" }}
            >
              Login disini
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;
