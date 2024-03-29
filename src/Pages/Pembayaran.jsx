import { useEffect, useState } from "react";
import Nav from "../Components/Nav";
import silang from "../assets/silang.png";
import axios from "axios";
import Cookies from "js-cookie";
import { Link, useNavigate } from "react-router-dom";
import { bca, bri } from "../utils/images";

const Pembayaran = () => {

  const token = Cookies.get("token");
  axios.defaults.withCredentials = true;
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

  const [payment, setPayment] = useState([])
  const [total, setTotal] = useState('')
  const [getID, setgetID] = useState()
  const redirect = useNavigate()

  useEffect(() => {
    axios.get("http://localhost:5000/items")
      .then(res => {
        if (res.data.message === "Succesfully") {
          setPayment(res.data.data)
          setTotal(res.data.data[0].order)
        }
      })
      .then(err => (console.log(err)))
  }, [])

  // console.log(payment[0].order.payment)

  useEffect(() => {
    axios.get("http://localhost:5000/orders")
      .then(res => {
        if (res.data.message === "Succesfully") {
          setgetID(res.data.data[0].id)
        }
      })
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
                <div className="metode">Pilih Rekening Tujuan</div>
                <span className="metode1">Lihat Semua</span>
              </div>
              <div className="inputBox1">
                <img className="bca" src={bca} alt />
                <div className="bcaa">BCA Virtual Account<span style={{marginLeft:"190px"}}>8098098890</span></div>
              </div>
              <div className="inputBox1">
                <img className="bca" src={bri} alt />
                <div className="bcaa">BRI Virtual Account<span style={{marginLeft:"190px"}}>5454644654</span></div>
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
                <p>TOTAL : 
                  <span className="metode3">{total.payment}</span>
                </p>
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
