import { Link, useNavigate, useParams } from "react-router-dom";
import Nav from "../Components/Nav";
// import image
import silang from "../assets/silang.png";
import axios from "axios";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";

const Pesanan = () => {
  const token = Cookies.get("token");
  axios.defaults.withCredentials = true;
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  const [payment, setPayment] = useState([])
  const [getOrder, setGetOrder] = useState([])
  const [status, setStatus] = useState('')
  const back = useNavigate()

  useEffect(() => {
    axios.get("http://localhost:5000/order")
      .then(res => {
        if (res.data.message === "Succesfully") {
          setGetOrder(res.data.data[0])
          setStatus(res.data.data[0].status)
        }
      })
      //.then(res => (console.log(res)))
      .then(err => (console.log(err)))
  }, [])

  useEffect(() => {
    axios.get("http://localhost:5000/items")
      .then(res => {
        if (res.data.message === "Succesfully") {
          setPayment(res.data.data)
        }
      })
      //.then(res => (console.log(res)))
      .then(err => (console.log(err)))
  }, [])


  return (
    <>
      {
        status === "PENDING" ?
          back('/')
          :
          <>
            <Nav />
            <div className="container-pesanan">
              <form action>
                <div className="row">
                  <div className="col">
                    <img className="silang" src={silang} alt />
                    <div className="silang-bayar">Yey kamu berhasil membayar</div>
                    <p className="silang-bayar2">{getOrder.createdAt}</p>
                  </div>
                </div>
                <div className="transaksi">
                  <h3>Total Transaksi</h3>
                  <p className="tran">{getOrder.payment}</p>
                  <div className="pem">
                    <h4>Pesanan</h4>
                    {
                      payment.map((pay) => (
                        <p key={pay.id}>
                          {pay.product.name}
                          <span className="metode3">{pay.product.price}</span>
                        </p>
                      ))
                    }
                    <h4>Informasi :</h4>
                    <h5>Pembayaran berhasil. Order telah diproses.</h5>
                    <Link to={'/productlist'}><button>Pesan Lagi</button></Link>
                  </div>
                </div>
              </form>
            </div>
          </>
      }

    </>
  );
};

export default Pesanan;
