import { useEffect } from "react";
import Dashboardnav from "../Components/DashboardComponent/Dashboardnav";
import Footer from "../Components/Footer";
import Nav from "../Components/Nav";
import Orderlist from "../Components/StatusorderComponent/Orderlist";
import axios from "axios";
import Cookies from "js-cookie";

const Statusorder = () => {

  const token = Cookies.get("token");
  axios.defaults.withCredentials = true;
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

  useEffect(() => {
    axios.get("http://localhost:5000/daftarpesanan")
      // .then(res => {
      //   if (res.data.message === "Succesfully") {
      //     setCartdata(res.data.data)
      //     //setCartproduct(res.data.data[0].product)
      //   }
      // })
      .then(res => (console.log(res)))
      .then(err => (console.log(err)))
  }, [])

  return (
    <>
      <Nav />
      <div id="dashboard-main">
        <div className="container">
          <Orderlist />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Statusorder;
