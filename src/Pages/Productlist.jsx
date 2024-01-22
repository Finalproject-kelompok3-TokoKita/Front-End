import Footer from "../Components/Footer";
import Filterproduct from "../Components/ProductlistComponent/Filterproduct";
import Listproduct from "../Components/ProductlistComponent/Listproduct";
import Searchbar from "../Components/Searchbar";
import Nav from "../Components/Nav";
import card1 from "../assets/card.png";
import card2 from "../assets/favorite.png";
import card3 from "../assets/rumah.png";
import card4 from "../assets/orang.png";


const Productlist = () => {
  return (
    <>
      <Nav/>
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
