import { useEffect, useState } from "react";
import Nav from "../Components/Nav";
import silang from "../assets/silang.png";
import axios from "axios";
import Cookies from "js-cookie";
import { Link, useNavigate } from "react-router-dom";

const Pembayaran = () => {

  const token = Cookies.get("token");
  axios.defaults.withCredentials = true;
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

  const [payment, setPayment] = useState([])
  const [getID, setgetID] = useState()
  const redirect = useNavigate()

  useEffect(() => {
    axios.get("http://localhost:5000/items")
      // .then(res => {
      //   if (res.data.message === "Succesfully") {
      //     setPayment(res.data.data)
      //   }
      // })
      .then(res => (console.log(res)))
      .then(err => (console.log(err)))
  }, [])

  useEffect(() => {
    axios.get("http://localhost:5000/order")
      .then(res => {
        if (res.data.message === "Succesfully") {
          setgetID(res.data.data[0].id)
        }
      })
      //.then(res => (console.log(res)))
      .then(err => (console.log(err)))
  }, [])

  const pay = (event) => {
    event.preventDefault()
    axios.put('http://localhost:5000/bayar/' + getID)
      .then(res => {
        if (res.data.message === "Pembayaran berhasil. Order telah diproses.") {
          redirect('/pesanan')
        }
      })
      //.then(res => console.log(res))
      .then(err => console.log(err))
  }

  return (
    <>
      <Nav />
      <div className="container-pembayaran">
        <form action>
          <div className="row">
            <div className="col">
              <a href="">
                <img className="silang1" src={silang} alt />
              </a>
              <div className="silang-bayar">Pembayaran</div>
              <div className="inputBox">
                <div className="metode">Pilih Metode Pembayaran</div>
                <span className="metode1">Lihat Semua</span>
              </div>
              <div className="inputBox1">
                <img className="bca" src="./assets/bca.png" alt />
                <div className="bcaa">BCA Virtual Account</div>
                <input type="checkbox" className="metode2" />
              </div>
              <div className="inputBox1">
                <img className="bca" src="./assets/bri.png" alt />
                <div className="bcaa">BRI Virtual Account</div>
                <input type="checkbox" className="metode2" />
              </div>
              <div className="pem">
                <h4>Daftar Pesanan</h4>
                {
                  payment.map((pay) => (
                    <p key={pay.id}>
                      {pay.product.name}
                      <span className="metode3">{pay.product.price}</span>
                    </p>
                  ))
                }
              </div>
            </div>
          </div>
          <a className="submit-btn" onClick={pay}>
            Bayar Sekarang
          </a>
        </form>
      </div>
    </>
  );
};

export default Pembayaran;
