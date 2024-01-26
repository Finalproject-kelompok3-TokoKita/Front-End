import Dashboardnav from "../Components/DashboardComponent/Dashboardnav";
import Footer from "../Components/Footer";
import Orderlist from "../Components/StatusorderComponent/orderlist";
import Nav from "../Components/Nav";

const Statusorder = () => {
  return (
    <>
      <Nav />
      <div id="dashboard-main">
        <div className="container">
          <div className="two-col-dashboard-wrapper">
            <Dashboardnav />
            <Orderlist />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Statusorder;
