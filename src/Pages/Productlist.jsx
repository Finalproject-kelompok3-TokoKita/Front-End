import Footer from "../Components/Footer";
import Filterproduct from "../Components/ProductlistComponent/Filterproduct";
import Listproduct from "../Components/ProductlistComponent/Listproduct";
import Searchbar from "../Components/Searchbar";
import Nav from "../Components/Nav";

import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Cookies from "js-cookie";

const Productlist = () => {
  const token = Cookies.get("token");
  axios.defaults.withCredentials = true;
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

  const [category, setCategory] = useState([]);
  const [city, setCity] = useState([]);
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/categories")
      .then((res) => {
        if (res.data.message === "Succesfully") {
          setCategory(res.data.data);
        }
      })
      //.then(res => console.log(res))
      .then((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:5000/store")
      .then((res) => {
        if (res.data.message === "Succesfully") {
          setProduct(res.data.data);
        }
      })
      //.then(res => console.log(res))
      .then((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:5000/cities")
      .then((res) => {
        if (res.data.message === "Succesfully") {
          setCity(res.data.data);
        }
      })
      .then((err) => console.log(err));
  }, []);

  return (
    <>
      <Nav />
      <div className="container">
        <Searchbar />
      </div>
      <div className="container">
        <div className="two-col-productlist-wrapper">
          <Filterproduct
            setCategory={setCategory}
            category={category}
            city={city}
          />
          <Listproduct product={product} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Productlist;
