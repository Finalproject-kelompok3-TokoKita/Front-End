import { useEffect } from "react"

const likeStore = () => {
    useEffect(() => {

    }, [])
}

const Sellerinfo = ({seller, city, prov, categories}) => {
    return (
        <>
            <div id="seller-title">
                <div className="container">
                    <div className="seller-title-detail">
                        <img src="" alt="seller-img" srcset="" width="225" height="200"/>
                    </div>
                    <div className="seller-title-detail seller-info">
                        <h1>{seller.name}</h1>
                        <h3>Jenis Kuliner : {categories}</h3>
                        <h3>Lokasi : {city}, {prov}</h3>
                        <h3>Alamat : {seller.address}</h3>
                        <h3>Harga : 10.000 - 20.000</h3>
                        <button onClick={likeStore}>Favorite</button>
                    </div>
                    <div className="clear"></div>
                </div>
            </div>
        </>
    )
}

export default Sellerinfo