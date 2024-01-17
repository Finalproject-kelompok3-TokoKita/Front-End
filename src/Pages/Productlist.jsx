import Footer from "../Components/Footer";
import Filterproduct from "../Components/ProductlistComponent/Filterproduct";
import Listproduct from "../Components/ProductlistComponent/Listproduct";
import Searchbar from "../Components/Searchbar";
import card1 from "../assets/card.png";
import card2 from "../assets/favorite.png";
import card3 from "../assets/rumah.png";
import card4 from "../assets/orang.png";

const Productlist = () => {
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
        <Searchbar />
      </div>
      <div className="container">
        <div className="two-col-productlist-wrapper">
          <Filterproduct />
          <Listproduct />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Productlist;
