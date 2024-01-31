import Homeheader from "../Components/HomeComponent/Homeheader";
import Footer from "../Components/Footer";
import Anekakuliner from "../Components/HomeComponent/Anekakuliner";
import Tokodisekitar from "../Components/HomeComponent/Tokodisekitar";
import Cookies from "js-cookie";
import { useEffect } from "react";
import axios from "axios";

const Home = () => {
  const token = Cookies.get('token')
  
  return (
    <>
      <Homeheader />
      <Tokodisekitar />
      <Footer />
    </>
  );
};

export default Home;
