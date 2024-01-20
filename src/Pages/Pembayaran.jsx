// import image
import silang from "../assets/silang.png";
import card1 from "../assets/card.png";
import card2 from "../assets/favorite.png";
import card3 from "../assets/rumah.png";
import card4 from "../assets/orang.png";

const Pembayaran = () => {
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
      <div className="container-pembayaran">
        <form action>
          <div className="row">
            <div className="col">
              <a href="">
                <img className="silang1" src={silang} alt />
              </a>
              <div className="silang-bayar">Pembayaran</div>
              <div className="inputBox">
                <div className="metode">Pilih Metode Pembayaran</div>
                <span className="metode1">Lihat Semua</span>
              </div>
              <div className="inputBox1">
                <img className="bca" src="./assets/bca.png" alt />
                <div className="bcaa">BCA Virtual Account</div>
                <input type="checkbox" className="metode2" />
              </div>
              <div className="inputBox1">
                <img className="bca" src="./assets/bri.png" alt />
                <div className="bcaa">BRI Virtual Account</div>
                <input type="checkbox" className="metode2" />
              </div>
              <div className="pem">
                <h4>Detail Pembayaran</h4>
                <p>
                  Nasi Goreng (1)
                  <span className="metode3">20.000</span>
                </p>
                <p>
                  Es Jeruk (1)
                  <span className="metode4">20.000</span>
                </p>
              </div>
              <p>
                Total
                <span className="metode5">40.000</span>
              </p>
            </div>
          </div>
          <a href={"/pesanan"} className="submit-btn">
            Submit
          </a>
        </form>
      </div>
    </>
  );
};

export default Pembayaran;
