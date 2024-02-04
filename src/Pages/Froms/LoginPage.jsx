import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [logindata, setLogindata] = useState({
    username: "",
    password: "",
  });

  const redirect = useNavigate();
  axios.defaults.withCredentials = true;
  const handleLogin = (e) => {
    e.preventDefault();

    if (logindata.password == "" || logindata.username == "") {
      alert("Please Insert data");
    } else {
      axios
        .post("http://localhost:5000/login", logindata)
        .then((res) => {
          if (res.data.message === "Log In success") {
            redirect("/");
          }
        })
        //.then(res => console.log(res))
        .then((err) => console.log(err));
    }
  };

  return (
    <div className="flex justify-center min-h-screen items-center font-inter">
      <div className="w-full max-w-xs">
        <h1 className="font-bold text-primary text-[32px] flex justify-center">
          Tokokita
        </h1>
        <form className="" onSubmit={handleLogin}>
          <label
            htmlFor="username"
            className="block text-slate-700 text-sm font-bold mb-2">
            Email
          </label>
          <input
            className="text-sm border border-gray-300 rounded w-full py-2 px-3 text-slate-700 mb-6"
            type="text"
            placeholder="Username or Email"
            id="username"
            name="username"
            onChange={(e) =>
              setLogindata({ ...logindata, username: e.target.value })
            }
          />
          <label
            htmlFor="password"
            className="block text-slate-700 text-sm font-bold mb-2">
            Password
          </label>
          <input
            className="text-sm border border-gray-300 rounded w-full py-2 px-3 text-slate-700 mb-6"
            type="password"
            placeholder="******"
            id="password"
            name="password"
            onChange={(e) =>
              setLogindata({ ...logindata, password: e.target.value })
            }
          />
          <button
            className="h-10 px-6 font-bold rounded-md bg-primary text-white w-full"
            type="submit">
            Login
          </button>
        </form>
        <p className="text-sm text-center">
          Baru di Tokokita?{" "}
          <Link to={"/signup"} className="text-secondary font-bold">
            Daftar
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
