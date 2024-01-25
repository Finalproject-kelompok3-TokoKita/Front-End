import { Link } from "react-router-dom";

const Listproduct = ({ product }) => {
  return (
    <>
      <div id="product-list-item" style={{ marginTop: "30px" }}>
        <div className="three-col-wrapper">
          {
            product.map((prod) => (

              <div className="product-list-content shadow" key={prod.id}>
                <img src="" alt="" />
                <div className="container">
                  <h4 className="jaj">
                    {prod.name}
                    <br />
                    <small></small>
                  </h4>
                  <div
                    className="product-list-details"
                    style={{ textAlign: "center" }}
                  >
                    <span> 10 Rb - 20 Rb </span>
                    <span
                      style={{
                        borderLeft: "2px solid black",
                        borderRight: "2px solid black",
                      }}
                    >
                      10 Km
                    </span>
                    <span> 5⭐ </span>
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
