import Cookies from "js-cookie";
import axios from "axios";
import { useEffect, useState } from "react";
//import { useParams } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";

const Checkout = () => {
  const token = Cookies.get('token')
  axios.defaults.withCredentials = true
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
  const redirect = useNavigate()

  const order = (event) => {
    event.preventDefault()
    axios.post("http://localhost:5000/orders")
      .then(res => {
        if (res.data.message === "Created") {
          redirect('/pembayaran')
        }
      })
      //.then(res => console.log(res))
      .then(err => console.log(err))
  }

  return (
    <>
      <div className="cart-total">
        <a onClick={order}>Check Out</a>
      </div>
    </>
  );
};

export default Checkout;
