import { useEffect, useState } from "react";
import Cartlist from "../Components/CartComponent/Cartlist";
import Checkout from "../Components/CartComponent/Checkout";
import Footer from "../Components/Footer";
import Nav from "../Components/Nav";
import axios from "axios";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";

const Cart = () => {
  const token = Cookies.get("token");
  axios.defaults.withCredentials = true;
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

  const [cartdata, setCartdata] = useState([])
  const [cartproduct, setCartproduct] = useState({})

  useEffect(() => {
    axios.get("http://localhost:5000/cart")
      .then(res => {
        if (res.data.message === "Succesfully") {
          setCartdata(res.data.data)
          //setCartproduct(res.data.data[0].product)
        }
      })
      .then(err => (console.log(err)))
  }, [])


  return (
    <>
      <Nav />
      <h1>Keranjang Belanja</h1>
      {
        cartdata.length === 0 ?
          <h1>Keranjang Belanja Masih Kosong</h1>
          :
          <div className="container">
            <p className="nan" style={{ padding: "15px 0" }}>
              Daftar Pesanan
            </p>
            <div className="cart">
              <Cartlist cartdata={cartdata} />
              <Checkout />
            </div>
          </div>
      }
      <Footer />
    </>
  );
};

export default Cart;
