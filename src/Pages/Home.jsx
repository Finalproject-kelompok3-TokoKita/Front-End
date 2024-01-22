import Homeheader from "../Components/HomeComponent/Homeheader";
import Footer from "../Components/Footer";
import Anekakuliner from "../Components/HomeComponent/Anekakuliner";
import Tokodisekitar from "../Components/HomeComponent/Tokodisekitar";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import Login from "./Froms/Login";

const Home = () => {

  const key = Cookies.get('token')
  return (
    <>
      {/* {key ?
        <div>
          
        </div>
        : <Login />} */}
      <Homeheader />
      <Anekakuliner />
      <Tokodisekitar />
      <Footer />
    </>
  );
};

export default Home;
