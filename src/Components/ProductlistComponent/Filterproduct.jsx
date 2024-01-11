const Filterproduct = () => {
    return(
        <>
            <div id="product-list-filter-form">
                <div className="product-list-filter-form-detail shadow">
                    <h2>Harga</h2>
                    <span>Range : </span>
                    <span><b>10.000 - 20.000</b></span>
                    <br/>
                    <input type="range" style={{marginTop: "15px"}}/>
                </div>
                <div className="product-list-filter-form-detail shadow">
                    <h2>Jenis Kuliner</h2>
                    <div>Jajanan (value from databse)</div>
                    <div>Jajanan (value from databse)</div>
                    <div>Jajanan (value from databse)</div>
                    <div>Jajanan (value from databse)</div>
                    <div>Jajanan (value from databse)</div>
                    <div>Jajanan (value from databse)</div>
                    <div>Jajanan (value from databse)</div>
                    <div>Jajanan (value from databse)</div>
                    <div>Jajanan (value from databse)</div>
                </div>
                <div className="product-list-filter-form-detail shadow">
                    <h2>Urutkan</h2>
                    <div>Terdekat</div>
                    <div>Terlaris</div>
                    <div>Promo</div>
                </div>
            </div>
        </>
    )
}

export default Filterproduct