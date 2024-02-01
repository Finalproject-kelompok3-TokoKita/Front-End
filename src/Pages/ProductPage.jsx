import Footer from "../Components/Footer";
import FilterProduct from "../Components/ProductlistComponent/FilterProduct";
import ListProduct from "../Components/ProductlistComponent/ListProduct";
import Searchbar from "../Components/Searchbar";
import Nav from "../Components/Nav";

import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Cookies from "js-cookie";
import { cityList, provinceList, storeList } from "../Service/Api";

const ProductPage = () => {
  const token = Cookies.get("token");
  axios.defaults.withCredentials = true;
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

  const [city, setCity] = useState([]);
  const [cityID, setcityID] = useState("");
  const [province, setProvince] = useState([]);
  const [provID, setProvID] = useState("");
  const [category, setCategory] = useState([]);
  const [product, setProduct] = useState([]);

  useEffect(() => {
    provinceList().then((prov) => {
      setProvince(prov);
    });
  }, []);

  useEffect(() => {
    cityList(provID).then((ct) => {
      setCity(ct);
    });
  }, [provID]);

  useEffect(() => {
    storeList(cityID).then((s) => {
      setProduct(s);
    });
  }, [cityID]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/getstore")
      .then((res) => {
        if (res.data.message === "Successfully") {
          if (provID === "" || cityID === "") {
            setProduct(res.data.data);
          }
        }
      })
      .then((err) => console.log(err));
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:5000/categories")
      .then((res) => {
        if (res.data.message === "Succesfully") {
          setCategory(res.data.data);
        }
      })
      .then((err) => console.log(err));
  }, []);

  return (
    <>
      <Nav />
      <div className="flex px-12">
        <div className="w-1/3">
          <FilterProduct
            province={province}
            setProvID={setProvID}
            city={city}
            setcityID={setcityID}
            category={category}
          />
        </div>
        <div className="w-2/3">
          <ListProduct product={product} />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductPage;
