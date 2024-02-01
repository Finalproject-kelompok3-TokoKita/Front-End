import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  redirect,
} from "react-router-dom";
import "./App.css";
import "./style.css";
// import HomePage from "./Pages/HomePage";
import Productlist from "./Pages/Productlist";
import Sellerpage from "./Pages/Sellerpage";
import Userprofile from "./Pages/Userprofile";
import Contact from "./Pages/Contact";
import Cart from "./Pages/Cart";
import Favorite from "./Pages/Favorite";
import Dashboard from "./Pages/Dashboard";
import Statusorder from "./Pages/Statusorder";
import Sellersignup from "./Pages/Froms/Sellersignup";
import Useredit from "./Pages/Froms/Useredit";
import Postmenu from "./Pages/Froms/Postmenu";
import Putmenu from "./Pages/Froms/Putmenu";
import Pembayaran from "./Pages/Pembayaran";
import Pesanan from "./Pages/Pesanan";
import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";
import { HomePage, ContactPage } from "./Pages/index.jsx";
import { LoginPage, RegisterPage } from "./Pages/Froms/index.jsx";

function App() {
  //const [count, setCount] = useState(0)
  const key = Cookies.get("token");
  const login = <Navigate to="/login" />;
  return (
    <Router>
      <Routes>
        {/* Auth */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<RegisterPage />} />
        <Route path="/logout" />
        {/* Main */}
        <Route path="/" element={<HomePage />} />
        <Route path="/productlist" element={<Productlist />} />
        <Route path="/cart" element={key ? <Cart /> : login} />
        <Route path="/contact" element={key ? <ContactPage /> : login} />
        <Route path="/favorite" element={key ? <Favorite /> : login} />
        {/* Seller */}
        <Route
          path="/seller-register"
          element={key ? <Sellersignup /> : login}
        />
        <Route path="/add-menu" element={key ? <Postmenu /> : login} />
        <Route path="/edit-menu" element={key ? <Putmenu /> : login} />
        <Route path="/seller/:id" element={key ? <Sellerpage /> : login} />
        {/* <Route path="/dashboard" element={key ? <Dashboard /> : login} /> */}
        <Route path="/dashboard" element={key ? <Dashboard /> : login} />
        <Route path="/orderlist" element={key ? <Statusorder /> : login} />
        {/* User */}
        <Route path="/editprofile/:id" element={key ? <Useredit /> : login} />
        <Route path="/userprofile" element={key ? <Userprofile /> : login} />
        {/* <Route path="/userprofile/:id" element={key ? <Userprofile /> : login} /> */}
        <Route path="/pembayaran" element={key ? <Pembayaran /> : login} />
        <Route path="/pesanan" element={key ? <Pesanan /> : login} />
      </Routes>
    </Router>
  );
}

export default App;
