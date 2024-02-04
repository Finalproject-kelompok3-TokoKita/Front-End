import axios from "axios";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

const Sellermenu = ({ products }) => {
  const token = Cookies.get("token");
  axios.defaults.withCredentials = true;
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

  const addtocart = (event) => {
    const productId = event.target.dataset.id;
    event.preventDefault();
    axios
      .post("http://localhost:5000/cart", { productId })
      .then((res) => {
        if (res.data.message === "Created") {
          location.reload();
        }
      })
      //.then(res => console.log(res))
      .then((err) => console.log(err));
  };

  

  return (
    <>
      <div id="seller-page-menu">
        <div className="seller-page-product">
          <div className="container">
            <h1 style={{fontWeight:"bold", fontSize:"30px"}}>Daftar Menu</h1>
            {products.map((data) => (
              <div className="seller-page-category-wrapper" key={data.id}>
                <hr />
                <div className="two-col-sellerpage-wrapper seller-page-product-list">
                  <div id="seller-page-menu-info">
                    <h2 style={{paddingTop:"25px",fontWeight:"bold"}}>{data.name}</h2>
                    <p>{data.description}</p>
                    <h3 style={{fontWeight:"bold",paddingBottom:"10px"}}>Harga : {data.price}</h3>
                    <button
                      type="submit"
                      id="seller-page-addtocart"
                      data-id={data.id}
                      onClick={addtocart}
                    >
                      Pesan Sekarang
                    </button>
                  </div>
                  <div id="seller-page-menu-img">
                    <img
                      src={`http://localhost:5000/static/products/${data.photo}`}
                      style={{paddingTop:"25px",height:"180px",borderRadius:"10px"}}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sellermenu;
