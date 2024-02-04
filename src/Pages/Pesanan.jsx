import { Link, useNavigate } from "react-router-dom";
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
                  <div className="pem" style={{}}>
                    <h4>Pesanan</h4>
                    {
                      payment.map((pay) => (
                        <div key={pay.id} style={{ marginLeft: "20px" }}>
                          {pay.product.name}
                          <span style={{ marginLeft: "70px" }}>{pay.product.price}</span>
                        </div>
                      ))
                    }
                    <hr style={{ marginTop: "30px" }}/>
                    <h4 style={{textAlign:"center", marginTop:"5px"}}>Informasi :</h4>
                    <h5 style={{textAlign:"center"}}>Pembayaran berhasil! Pesanan telah diproses.
                    </h5>
                    <Link to={'/productlist'}><button className="btn-pesanan"> Pesan Lagi</button></Link>
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
