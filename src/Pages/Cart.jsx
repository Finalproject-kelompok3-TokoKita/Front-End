import Cartlist from "../Components/CartComponent/Cartlist";
import Checkout from "../Components/CartComponent/Checkout";
import Footer from "../Components/Footer";
// import image
import card1 from "../assets/card.png";
import card2 from "../assets/favorite.png";
import card3 from "../assets/rumah.png";
import card4 from "../assets/orang.png";

// import Nav from "../Components/Nav";

const Cart = () => {
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

      <div className="container">
        <p className="nan" style={{ padding: "15px 0" }}>
          Pesanan
        </p>
        <h1 style={{ padding: "20px 0", fontSize: "20px" }}>
          Rumah Makan Sederhana - Semarang
        </h1>
        <div className="cart">
          <Cartlist />
          <Checkout />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
