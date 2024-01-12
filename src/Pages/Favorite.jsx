import Nav from "../Components/Nav";

const Favorite = () => {
  return (
    <>
      <div className="container">
        <Nav />
      </div>
      <div>
        <div className="container-favorite">
          <p className="nan1">Favorite</p>
          <div className="cart">
            <div className="products2">
              <div className="product3">
                <div className="product-info4">
                  <div className="menu-favorite">
                    <span>Menu</span> <span className="resto">Restoran</span>
                  </div>
                  <h3 className="product-name">Makanan Tradisional</h3>
                  <p className="khas">Makanan Khas Indonesia</p>
                  <h4 className="product-offer">10k</h4>
                  <img src="./assets/images/love.png" alt />
                  <p className="product-remove"></p>
                </div>
                <div className="favorite-gambar">
                  <img src="./assets/images/makanan.jpg" alt />
                  <div className="favorite-gambar-tambah">
                    <button>Tambah</button>
                  </div>
                </div>
              </div>
              <div className="product3">
                <div className="product-info4">
                  <div className="menu-favorite">
                    <span>Menu</span> <span className="resto">Restoran</span>
                  </div>
                  <h3 className="product-name">Makanan Tradisional</h3>
                  <p className="khas">Makanan Khas Indonesia</p>
                  <h4 className="product-offer">10k</h4>
                  <img src="./assets/images/love.png" alt />
                </div>
                <div className="favorite-gambar">
                  <img src="./assets/images/ayam.jpg" alt />
                  <div className="favorite-gambar-tambah">
                    <button>Tambah</button>
                  </div>
                </div>
              </div>
              <div className="total-pesanan">
                <span>Total Pesanan : 0</span>{" "}
                <span className="tambah-pesan">Tambah Pesanan</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Favorite;
