import Footer from "../Components/Footer";
import Sellerinfo from "../Components/SellerpageComponent/Sellerinfo";
import Sellermenu from "../Components/SellerpageComponent/Sellermenu";
// import image
import card1 from "../assets/card.png";
import card2 from "../assets/favorite.png";
import card3 from "../assets/rumah.png";
import card4 from "../assets/orang.png";
import Nav from "../Components/Nav";

const Sellerpage = () => {
  return (
    <>
      <Nav/>
      <Sellerinfo />
      <Sellermenu />
      <Footer />
    </>
  );
};

export default Sellerpage;
