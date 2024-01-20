// import image
import silang from "../assets/silang.png";
import card1 from "../assets/card.png";
import card2 from "../assets/favorite.png";
import card3 from "../assets/rumah.png";
import card4 from "../assets/orang.png";

const Pesanan = () => {
  return (
    <>
      <header>
        <div className="logo">
          <a href="#">Tokokita</a>
        </div>
        <nav className="navbar-header">
          <a href={"/"}>Home</a>
          <a href={"/productlist"}>Shop</a>
          <a href={"/contact"}>Contact</a>
        </nav>
        <ul className="items">
          <a href={"/cart"}>
            <img src={card1} alt />
          </a>
          <a href={"/favorite"}>
            <img src={card2} alt />
          </a>
          <a href={"/dashboard"}>
            <img src={card3} alt />
          </a>
          <a href={"/userprofile"}>
            <img src={card4} alt />
          </a>
        </ul>
      </header>
      <div className="container-pesanan">
        <form action>
          <div className="row">
            <div className="col">
              <img className="silang" src={silang} alt />
              <div className="silang-bayar">Yey kamu berhasil membayar</div>
              <p className="silang-bayar2">9 Desember 2023, 15:50:20 WIB</p>
            </div>
          </div>
          <div className="transaksi">
            <h3>Total Transaksi</h3>
            <p className="tran">4000</p>
            <div className="pem">
              <h4>Pesanan</h4>
              <p>
                Nasi Goreng (1)
                <span className="metode3">20.000</span>
              </p>
              <p>
                Es Jeruk (1)
                <span className="metode4">20.000</span>
              </p>
              <h4>Informasi :</h4>
              <h5>Tunjukkan Bukti Pembayaran Kepada Penjual</h5>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Pesanan;
