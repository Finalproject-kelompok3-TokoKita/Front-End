import { cart, favorite, store, logout_icon, profile } from "../utils/images";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const Nav = ({ userData }) => {
  const key = Cookies.get("token");
  const [userdata, setUserdata] = useState({});
  axios.defaults.withCredentials = true;
  axios.defaults.headers.common["Authorization"] = `Bearer ${key}`;
  const back = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:5000/user")
      .then((res) => {
        if (res.data.message === "Berhasil") {
          setUserdata(res.data.data);
        }
      })
      //.then(res => console.log(res))
      .then((err) => console.log(err));
  }, []);

  const photo = userdata.photo;

  const logout = () => {
    Cookies.remove("token");
    Cookies.remove("refreshToken");
    back("/");
    // axios.post("http://localhost:5000/logout")
    // .then(res => console.log(res))
    // .then(err => console.log(err))
  };
  return (
    <div>
      <header className="font-inter h-[80px] flex items-center justify-between">
        <div>
          <a href="/" className="text-primary font-bold text-[32px]">
            Tokokita
          </a>
        </div>
        <div className="w-[281px]">
          <nav className="text-black text-[20px] font-normal flex justify-between">
            <a href="/" className="hover:text-primary">
              Home
            </a>
            <a href="/productlist" className="hover:text-primary">
              Shop
            </a>
            <a href="/contact" className="hover:text-primary">
              Contact
            </a>
          </nav>
        </div>
        {key ? (
          <div className="flex justify-center items-center gap-8">
            <a href={"/cart"}>
              <img src={cart} className="w-[18px]" />
            </a>
            <a href={"/favorite"}>
              <img src={favorite} className="w-[18px]" />
            </a>
            <a href={"/dashboard"}>
              <img src={store} className="w-[18px]" />
            </a>
            <a href={"/userprofile"}>
              {photo ? (
                <img
                  src={`http://localhost:5000/static/users/${userdata.photo}`}
                  className="w-[36px] rounded-full"
                />
              ) : (
                <img src={profile} className="w-[18px]" />
              )}
            </a>
            <a onClick={logout}>
              <img src={logout_icon} className="w-[24px] cursor-pointer" />
            </a>
          </div>
        ) : (
          <div className="flex justify-between items-center text-[20px] font-bold gap-2">
            <a
              href="/login"
              className="bg-primary text-white px-[8px] py-[4px] rounded-[10px] w-[100px] flex justify-center hover:bg-white hover:text-primary hover:border hover:border-solid hover:border-primary"
            >
              Sign In
            </a>
            <a
              href="/signup"
              className="bg-secondary text-white px-[8px] py-[4px] rounded-[10px] w-[100px] flex justify-center hover:bg-white hover:text-secondary hover:border hover:border-solid hover:border-secondary"
            >
              Sign Up
            </a>
          </div>
        )}
      </header>
    </div>
  );
};

export default Nav;
