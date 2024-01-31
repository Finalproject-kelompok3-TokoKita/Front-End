import axios from "axios";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

const Sellermenu = ({ products }) => {
  const token = Cookies.get('token')
  axios.defaults.withCredentials = true
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`

  const addtocart = (event) => {
    //console.log(event.target.dataset)
    const productId = event.target.dataset.id
    event.preventDefault()
    axios.post('http://localhost:5000/cart', {productId})
      // .then(res => {
      //   if (res.data.message === "Log In success") {
      //     redirect('/')
      //   }
      // })
      .then(res => console.log(res))
      .then(err => console.log(err))
  }


  return (
    <>
      <div id="seller-page-menu">
        <div className="seller-page-product">
          <div
            style={{
              backgroundColor: "rgb(226, 226, 226)",
              width: "100%",
              height: "40px",
              marginTop: "30px",
              marginBottom: "30px",
            }}
          ></div>
          <div className="container">
            <h1>Daftar Menu</h1>
            {
              products.map((data) => (
                <div className="seller-page-category-wrapper" key={data.id}>
                  <hr />
                  <div className="two-col-sellerpage-wrapper seller-page-product-list">
                    <div id="seller-page-menu-info">
                      <h2>{data.name}</h2>
                      <p>{data.description}</p>
                      <h3>{data.price}</h3>
                      <button type="submit" id="seller-page-addtocart" data-id={data.id}
                        onClick={addtocart}
                      >
                        <b>Pesan Sekarang</b>
                      </button>
                    </div>
                    <div id="seller-page-menu-img">
                      <img src={`http://localhost:5000/static/products/${data.photo}`} alt="seller-menu-img" height="200" />
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default Sellermenu;
