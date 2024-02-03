// nav
import Footer from "../Components/Footer";
import Nav from "../Components/Nav";
import Cookies from "js-cookie";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Favorite = () => {
  const token = Cookies.get("token");
  const [stores, setStores] = useState([]);
  axios.defaults.withCredentials = true;
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

  useEffect(() => {
    axios
      .get("http://localhost:5000/like")
      .then((res) => {
        if (res.data.message === "Succesfully") {
          setStores(res.data.data);
        }
      })
      .then((err) => console.log(err));
  }, []);

  return (
    <>
      <Nav />
      {stores.length === 0 ? (
        <h1 className="lanja3">
          Anda Belum Memiliki Toko Favorite, Silahkan Explore
        </h1>
      ) : (
        <div>
          <div className="">
            <div className="cart">
              <div className="container">
                <h3 style={{ paddingBottom: "20px", paddingTop: "50px" }}>
                  Toko Yang Kamu Sukai
                </h3>
                <div className="three-col-wrapper">
                  {stores.map((list) => (
                    <div className="index-product-list" key={list.id}>
                      <img
                        src={`http://localhost:5000/static/stores/${list.store.photo}`}
                        alt=""
                      />
                      <div className="container">
                        <h3 className="yase" style={{ textAlign: "center" }}>
                          {list.store.name}
                          <br />
                        </h3>
                        <h4></h4>
                        <br />
                        <Link
                          to={`/seller/${list.store.id}`}
                          className="index-product-button-link"
                        >
                          Kunjungi Toko
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};

export default Favorite;
