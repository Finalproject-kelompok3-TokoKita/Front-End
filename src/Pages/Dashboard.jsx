import Footer from "../Components/Footer";
import Dashboardnav from "../Components/DashboardComponent/Dashboardnav";
import Sellermenulist from "../Components/DashboardComponent/Sellermenulist";
import Sellerprofile from "../Components/DashboardComponent/Sellerprofile";
import Sellercardinfo from "../Components/DashboardComponent/sellercardinfo";
import Nav from "../Components/Nav";
import Cookies from "js-cookie";
import axios from "axios";
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { useParams } from "react-router-dom";

const Dashboard = () => {
  const token = Cookies.get('token')
  axios.defaults.withCredentials = true
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
  const decoded = jwtDecode(token)
  // const id = decoded.uid
  // const { id } = useParams()

  // useEffect(() => {
  //   axios.get(`http://localhost:5000/store/${id}`)
  //   // .then(res => {
  //   //   if (res.data.message === "Berhasil") {
  //   //     setUserdata(res.data.data)
  //   //   }
  //   // })
  //   .then(res => console.log(res))
  //   .then(err => console.log(err))
  // }, [])

  return (
    <>
      <Nav />
      <div id="dashboard-main">
        <div className="container">
          <div className="two-col-dashboard-wrapper">
            <Dashboardnav />
            <div className="">
              <Sellerprofile />
              <Sellercardinfo />
              <Sellermenulist />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Dashboard;
