import { useState } from "react";
import axios from "axios";
import "./form.css";
import { Link, useNavigate } from "react-router-dom";
//import Signupvalidation from "../../Service/Validation/Signupvalidation"

const RegisterPage = () => {
  const [regisdata, setRegisdata] = useState({
    username: "",
    fullName: "",
    email: "",
    password: "",
  });

  const [passcheck, setPasscheck] = useState("");
  const redirect = useNavigate();

  const handleRegister = (event) => {
    event.preventDefault();

    if (regisdata.password != passcheck) {
      alert("pass not match");
    } else {
      axios
        .post("http://localhost:5000/register", regisdata)
        .then((res) => {
          if (res.data.message === "Berhasil Registrasi") {
            redirect("/login");
          }
        })
        .then((err) => console.log(err));
    }
  };

  return (
    <>
      <div className="flex justify-center min-h-screen items-center font-inter">
        <div className="w-full max-w-xs">
          <h1 className="font-bold text-primary text-[32px] flex justify-center">
            Tokokita
          </h1>
          <form onSubmit={handleRegister}>
            <label
              htmlFor="username"
              className="block text-slate-700 text-sm font-bold mb-2">
              Username
            </label>
            <input
              className="text-sm border border-gray-300 rounded w-full py-2 px-3 text-slate-700 mb-2"
              type="text"
              placeholder="Username"
              id="username"
              name="username"
              onChange={(e) =>
                setRegisdata({ ...regisdata, username: e.target.value })
              }
            />
            <label
              htmlFor="fullname"
              className="block text-slate-700 text-sm font-bold mb-2">
              Fullname
            </label>
            <input
              className="text-sm border border-gray-300 rounded w-full py-2 px-3 text-slate-700 mb-2"
              type="text"
              placeholder="Fullname"
              id="fullname"
              name="fullname"
              onChange={(e) =>
                setRegisdata({ ...regisdata, fullName: e.target.value })
              }
            />
            <label
              htmlFor="email"
              className="block text-slate-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              className="text-sm border border-gray-300 rounded w-full py-2 px-3 text-slate-700 mb-2"
              type="email"
              placeholder="example@mail.com"
              id="email"
              name="email"
              onChange={(e) =>
                setRegisdata({ ...regisdata, email: e.target.value })
              }
            />
            <label
              htmlFor="password"
              className="block text-slate-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              className="text-sm border border-gray-300 rounded w-full py-2 px-3 text-slate-700 mb-2"
              type="password"
              id="password"
              placeholder="******"
              name="password"
              onChange={(e) =>
                setRegisdata({ ...regisdata, password: e.target.value })
              }
            />
            <label
              htmlFor="confirm-password"
              className="block text-slate-700 text-sm font-bold mb-2">
              Confirm Password
            </label>
            <input
              className="text-sm border border-gray-300 rounded w-full py-2 px-3 text-slate-700 mb-6"
              type="password"
              id="confirm-password"
              placeholder="******"
              name="confirm-password"
              onChange={(e) => setPasscheck(e.target.value)}
            />
            {/* <div className="show-password">
                                <input type="checkbox" id="show-password-checkbox" />
                                <label htmlFor="show-password-checkbox" className="show"
                                >Tampilkan Password</label>
                            </div> */}
            <button
              className="h-10 px-6 font-bold rounded-md bg-primary text-white w-full"
              type="submit">
              Daftar
            </button>
          </form>
          <p className="text-sm text-center">
            Sudah Punya Akun?{" "}
            <Link to={"/login"} className="text-secondary font-bold">
              Login
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
