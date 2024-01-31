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
import { useNavigate, useParams } from "react-router-dom";

const Dashboard = () => {
  const token = Cookies.get('token')
  axios.defaults.withCredentials = true
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
  const [dashboard, setDashboard] = useState({})
  const [cities, setCities] = useState('')
  const [prov, setProv] = useState('')
  const [categories, setCategories] = useState('')
  const [product, setProduct] = useState([])
  const back = useNavigate()

  useEffect(() => {
    axios.get("http://localhost:5000/dashboard")
      .then(res => {
        if (res.data.message === "Succesfully") {
          if (res.data.data != 0) {
            setDashboard(res.data.data[0])
            setCities(res.data.data[0].city.name)
            setProv(res.data.data[0].province.name)
            setCategories(res.data.data[0].category.name)
            setProduct(res.data.data[0].products)
          } else {
            back('/seller-register')
          }
        }
      })
      //.then(res => console.log(res))
      .then(err => console.log(err))
  }, [])

  // const x = Object.keys(product).length
  // console.log(x)

  return (
    <>
      <Nav />
      <div id="dashboard-main">
        <div className="container">
          <div className="two-col-dashboard-wrapper">
            <Dashboardnav />
            <div className="">
              <Sellerprofile dashboard={dashboard} cities={cities} prov={prov} categories={categories}/>
              <Sellercardinfo product={product} />
              <Sellermenulist product={product} />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Dashboard;
