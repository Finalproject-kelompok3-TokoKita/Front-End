import { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

const Sellerinfo = ({ seller, city, prov, categories }) => {
  const token = Cookies.get("token");
  axios.defaults.withCredentials = true;
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

  const likeStore = (event) => {
    const storeId = event.target.dataset.id;
    event.preventDefault();
    axios
      .post("http://localhost:5000/like", { storeId })
      // .then(res => {
      //   if (res.data.message === "Log In success") {
      //     redirect('/')
      //   }
      // })
      .then((res) => console.log(res))
      .then((err) => console.log(err));
  };

  return (
    <>
      <div className="p-12">
        <h1 className="font-bold text-xl mb-4">Profil Toko</h1>
        <div className="shadow p-8 rounded-lg flex items-center gap-12">
          <div className="h-[130px] w-[130px] rounded-lg bg-primarybg">
            <img
              src={`http://localhost:5000/static/stores/${seller.photo}`}
              alt="seller-img"
              className="object-cover w-full h-full rounded-lg"
            />
          </div>
          <div className="font-bold">
            <h1 className="">{seller.name}</h1>
            <h3>Jenis Kuliner : {categories}</h3>
            <h3>
              Lokasi : {city}, {prov}
            </h3>
            <h3>Alamat : {seller.address}</h3>
            <h3>Harga : 10.000 - 20.000</h3>
            <button onClick={likeStore} data-id={seller.id}>
              Favorite
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sellerinfo;
