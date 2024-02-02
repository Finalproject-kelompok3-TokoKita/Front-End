// nav
import Footer from "../Components/Footer";
import Nav from "../Components/Nav";
import Cookies from "js-cookie";
import axios from "axios";
import { useEffect, useState } from "react";

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

  console.log(stores);

  return (
    <>
      <Nav />
      <div>
        <div className="">
          <div className="cart">
            <div className="container">
              <h3 style={{ paddingBottom: "20px", paddingTop: "50px" }}>
                Toko Yang Kamu Sukai
              </h3>
              <div className="three-col-wrapper">
                {stores.map((list) => (
                  <div className="index-product-list">
                    <img src="" alt="" />
                    <div className="container">
                      <h3 style={{ textAlign: "center" }}>
                        {list.store.name}
                        <br />
                      </h3>
                      <h4>{list.store.category}</h4>
                      <br />
                      <a
                        href={"/sellerpage"}
                        className="index-product-button-link">
                        Kunjungi Toko
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Favorite;
