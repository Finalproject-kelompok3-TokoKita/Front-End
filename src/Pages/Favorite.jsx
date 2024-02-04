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

  console.log(stores)
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
                    <div className="index-product-list" style={{height:"450px"}} key={list.id}>
                      <img
                        src={`http://localhost:5000/static/stores/${list.store.photo}`}
                        alt=""
                      />
                      <div className="bg-primarybg flex flex-col gap-4 h-[178px] p-4 rounded-b-xl">
                        <div>
                          <h3
                            style={{textAlign:"center"}} 
                            className="tokonya overflow-hidden whitespace-nowrap overflow-ellipsis">
                            {list.store.name}
                          </h3>
                        </div>
                        <button
                          style={{marginTop:"40px"}}
                          className="h-10 px-6 font-bold rounded-md bg-primary text-white w-full"
                          type="submit"
                        >
                          <Link to={`/seller/${list.store.id}`} className="">
                            Kunjungi Toko
                          </Link>
                        </button>
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
