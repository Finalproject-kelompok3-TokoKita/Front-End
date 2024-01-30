import Footer from "../Components/Footer";
import Filterproduct from "../Components/ProductlistComponent/Filterproduct";
import Listproduct from "../Components/ProductlistComponent/Listproduct";
import Searchbar from "../Components/Searchbar";
import Nav from "../Components/Nav";

import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Cookies from "js-cookie";
import { cityList, provinceList, storeList } from "../Service/api";
import { useParams } from "react-router-dom";

const Productlist = () => {
  const token = Cookies.get("token");
  axios.defaults.withCredentials = true;
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

  const [city, setCity] = useState([]);
  const [cityID, setcityID] = useState('');
  const [province, setProvince] = useState([]);
  const [provID, setProvID] = useState('');
  const [category, setCategory] = useState([]);
  const [product, setProduct] = useState([]);

  useEffect(() => {
    provinceList().then((prov) => {
      setProvince(prov);
    })
  }, [])

  useEffect(() => {
    cityList(provID).then((ct) => {
      setCity(ct);
    })
  }, [provID])

  useEffect(() => {
    storeList(cityID, 2).then((s) => {
      setProduct(s);
    })
  }, [cityID])

  //console.log(product)

  useEffect(() => {
    axios.get("http://localhost:5000/store")
      .then((res) => {
        if (res.data.message === "Succesfully") {
          if (provID === '' || cityID === '') {
            setProduct(res.data.data);
          }
        }
      })
      .then((err) => console.log(err));
  }, []);

  //console.log(product)

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:5000/categories")
  //     .then((res) => {
  //       if (res.data.message === "Succesfully") {
  //         setCategory(res.data.data);
  //       }
  //     })
  //     .then((err) => console.log(err));
  // }, []);



  return (
    <>
      <Nav />
      <div className="container">
        <Searchbar />
      </div>
      <div className="container">
        <div className="two-col-productlist-wrapper">
          <Filterproduct
            province={province}
            setProvID={setProvID}
            city={city}
            setcityID={setcityID}
          />
          <Listproduct product={product} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Productlist;
