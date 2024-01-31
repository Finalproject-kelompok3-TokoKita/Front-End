import { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

const Sellerinfo = ({ seller, city, prov, categories }) => {

    const token = Cookies.get('token')
    axios.defaults.withCredentials = true
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`

    const likeStore = (event) => {
        const storeId = event.target.dataset.id
        event.preventDefault()
        axios.post('http://localhost:5000/like', { storeId })
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
            <div id="seller-title">
                <div className="container">
                    <div className="seller-title-detail">
                        <img src={`http://localhost:5000/static/stores/${seller.photo}`} alt="seller-img" srcset="" width="225" height="200" />
                    </div>
                    <div className="seller-title-detail seller-info">
                        <h1>{seller.name}</h1>
                        <h3>Jenis Kuliner : {categories}</h3>
                        <h3>Lokasi : {city}, {prov}</h3>
                        <h3>Alamat : {seller.address}</h3>
                        <h3>Harga : 10.000 - 20.000</h3>
                        <button onClick={likeStore} data-id={seller.id}>Favorite</button>
                    </div>
                    <div className="clear"></div>
                </div>
            </div>
        </>
    )
}

export default Sellerinfo