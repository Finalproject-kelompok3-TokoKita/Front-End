import Footer from "../Components/Footer";
import Sellerinfo from "../Components/SellerpageComponent/Sellerinfo";
import Sellermenu from "../Components/SellerpageComponent/Sellermenu";

import Nav from "../Components/Nav";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Sellerpage = () => {
  const { id } = useParams();
  const [seller, setSeller] = useState({});
  useEffect(() => {
    axios
      .get("http://localhost:5000/store/" + id)
      .then((res) => {
        if (res.data.message === "Scucessfully") {
          setSeller(res.data.data);
        }
      })
      //.then(res => console.log(res))
      .then((err) => console.log(err));
  }, []);

  return (
    <>
      <Nav />
      <Sellerinfo />
      <Sellermenu />
      <Footer />
    </>
  );
};

export default Sellerpage;
