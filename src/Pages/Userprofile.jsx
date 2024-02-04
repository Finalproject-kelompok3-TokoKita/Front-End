import Footer from "../Components/Footer";
import Userbio from "../Components/ProfileComponent/Userbio";
import Nav from "../Components/Nav";
import Cookies from "js-cookie";
import axios from "axios";
import { useEffect, useState } from "react";

const Userprofile = () => {
  const token = Cookies.get("token");
  const [userdata, setUserdata] = useState({});
  axios.defaults.withCredentials = true;
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

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

  return (
    <>
      <Nav />
      <Userbio userdata={userdata} />
      <Footer />
    </>
  );
};

export default Userprofile;
