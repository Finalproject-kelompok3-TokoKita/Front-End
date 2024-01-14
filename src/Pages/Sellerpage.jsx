import Nav from "../Components/Nav";
import Footer from "../Components/Footer";
import Sellerinfo from "../Components/SellerpageComponent/Sellerinfo";
import Sellermenu from "../Components/SellerpageComponent/Sellermenu";

const Sellerpage = () => {
  return (
    <>
      <div className="container">
        <Nav />
      </div>
      <Sellerinfo />
      <Sellermenu />
      <Footer />
    </>
  );
};

export default Sellerpage;
