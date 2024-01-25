import Footer from "../Components/Footer";
// import image
import card1 from "../assets/card.png";
import card2 from "../assets/favorite.png";
import card3 from "../assets/rumah.png";
import card4 from "../assets/orang.png";
import card5 from "../assets/prof.png";
import Userbio from "../Components/ProfileComponent/Userbio";
import Nav from "../Components/Nav";
import Cookies from "js-cookie";
import axios from "axios";
import { useEffect, useState } from "react";

const Userprofile = () => {
  const token = Cookies.get('token')
  const [userdata, setUserdata] = useState({})
  axios.defaults.withCredentials = true
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`

  useEffect(() => {
    axios.get('http://localhost:5000/user')
      .then(res => {
        if (res.data.message === "Berhasil") {
          setUserdata(res.data.data)
        }
      })
      //.then(res => console.log(res))
      .then(err => console.log(err))
  }, [])

  return (
    <>
      <Nav />
      <Userbio userdata={userdata} />
      <div className="bac"></div>
      <Footer />
    </>
  );
};

export default Userprofile;
