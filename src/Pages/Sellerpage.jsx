import Footer from "../Components/Footer";
import Sellerinfo from "../Components/SellerpageComponent/Sellerinfo";
import Sellermenu from "../Components/SellerpageComponent/Sellermenu";
// import image
import card1 from "../assets/card.png";
import card2 from "../assets/favorite.png";
import card3 from "../assets/rumah.png";
import card4 from "../assets/orang.png";

const Sellerpage = () => {
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

      <Sellerinfo />
      <Sellermenu />
      <Footer />
    </>
  );
};

export default Sellerpage;
