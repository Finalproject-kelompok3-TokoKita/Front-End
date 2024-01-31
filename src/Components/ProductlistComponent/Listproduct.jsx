import { Link } from "react-router-dom";

const Listproduct = ({ product }) => {
  return (
    <>
      <div id="product-list-item" style={{ marginTop: "30px" }}>
        <div className="three-col-wrapper">
          {
            product.map((prod) => (

              <div className="product-list-content shadow" key={prod.id}>
                <img src={`http://localhost:5000/static/stores/${prod.photo}`} alt="" />
                <div className="container">
                  <h4 className="jaj" style={{textAlign:"center"}}>
                    {prod.name}
                    <br />
                  </h4>
                  <div
                    className="product-list-details"
                    style={{ textAlign: "center" }}
                  >
                    Kategori : Warung
                  </div>
                  <div
                    className="product-list-details"
                    style={{ textAlign: "center" }}
                  >
                    Kota, Provinsi 
                  </div>
                  <br />
                  <Link to={`/seller/${prod.id}`} className="product-list-button-link">Kunjungi Toko</Link>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </>
  );
};

export default Listproduct;
