// import image
import card1 from "../assets/card.png";
import card2 from "../assets/favorite.png";
import card3 from "../assets/rumah.png";
import card4 from "../assets/orang.png";
import card5 from "../assets/menu.png";
import Cookies from "js-cookie";
import { Link, useNavigate } from "react-router-dom";
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


  const logout = () => {
    Cookies.remove("token");
    Cookies.remove("refreshToken");
    back("/");
    // axios.post("http://localhost:5000/logout")
    // .then(res => console.log(res))
    // .then(err => console.log(err))
  };
  return (
    <>
      <header>
        <div className="logo">
          <a href="#">Tokokita</a>
        </div>
        <nav className="navbar-header">
          <a href={"/"}>Home</a>
          <a href={"/productlist"}>Shop</a>
          <a href={"/contact"}>Contact</a>
        </nav>
        {key ? (
          <ul className="items">
            <a href={"/cart"}>
              <img src={card1} />
            </a>
            <a href={"/favorite"}>
              <img src={card2} />
            </a>
            <a href={"/dashboard"}>
              <img src={card3} />
            </a>
            <a href={"/userprofile"}>
              <img src={`http://localhost:5000/static/users/${userdata.photo}`}  />
            </a>
            <a onClick={logout}>
              <img src={card4} />
            </a>
            <a href="#" id="mobile">
              <img src={card5} />
            </a>
          </ul>
        ) : (
          <ul className="items">
            <a href={"/login"} className="use">
              Sign in
            </a>
            <a href={"/signup"} className="uses">
              Sign up
            </a>
          </ul>
        )}
      </header>
    </>
  );
};

export default Nav;
