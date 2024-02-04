import Footer from "../Components/Footer";
import Sellerinfo from "../Components/SellerpageComponent/Sellerinfo";
import Sellermenu from "../Components/SellerpageComponent/Sellermenu";

import Nav from "../Components/Nav";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Sellerpage = () => {
  const { id } = useParams()
  const [seller, setSeller] = useState({})
  const [city, setCity] = useState('')
  const [prov, setprov] = useState('')
  const [categories, setCategories] = useState('')
  const [products, setProducts] = useState([])

  useEffect(() => {
    axios
      .get("http://localhost:5000/store/" + id)
      .then((res) => {
        if (res.data.message === "Scucessfully") {
          setSeller(res.data.data)
          setCity(res.data.data.city.name)
          setprov(res.data.data.province.name)
          setCategories(res.data.data.category.name)
          setProducts(res.data.data.products)
        }
      })
      //.then(res => console.log(res))
      .then((err) => console.log(err));
  }, []);

  console.log(products)

  return (
    <>
      <Nav />
      <Sellerinfo seller={seller} city={city} prov={prov} categories={categories} />
      <Sellermenu products={products} />
      <Footer />
    </>
  );
};

export default Sellerpage;
