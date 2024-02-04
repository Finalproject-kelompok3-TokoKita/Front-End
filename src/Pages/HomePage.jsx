import HomeHeader from "../Components/HomeComponent/HomeHeader";
import Footer from "../Components/Footer";
import Anekakuliner from "../Components/HomeComponent/Anekakuliner";
import Tokodisekitar from "../Components/HomeComponent/Tokodisekitar";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const token = Cookies.get("token");
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/getstore")
      .then((res) => {
        if (res.data.message === 'Successfully') {
          setProduct(res.data.data);
        }
      })
      .then((err) => console.log(err))
  }, [])

  //console.log(product.slice(0, 5))

  return (
    <>
      <HomeHeader />
      <Tokodisekitar product={product}/>
      <Footer />
    </>
  );
};

export default Home;
