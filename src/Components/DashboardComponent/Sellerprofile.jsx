const Sellerprofile = ({ dashboard, cities, prov }) => {
    return (
        <>
            <div id="dashboard-seller-info">
                <div className="dashboard-seller-wrap">
                    <img src="" alt="seller-img" width="100%" height="265" />
                </div>
                <div className="dashboard-seller-wrap" style={{marginLeft: "20px"}}>
                    <h1>{dashboard.name}</h1>
                    <h5>{dashboard.address}</h5>
                    <h2>{cities}, {prov}</h2>
                    <h3>Jenis Kuliner : Roti, Minuman</h3>
                    <h3>Range Harga</h3>
                    <h3>Jumlah Favorite</h3>
                </div>
            </div>
        </>
    )
}

export default Sellerprofile