import Dashboardnav from "../Components/DashboardComponent/Dashboardnav"
import Footer from "../Components/Footer"
import Nav from "../Components/Nav"
import Orderlist from "../Components/StatusorderComponent/orderlist"

const Statusorder = () => {
    return (
        <>
            <div className="container">
                <Nav />
            </div>
            <div id="dashboard-main">
                <div className="container">
                    <div className="two-col-dashboard-wrapper">
                        <Dashboardnav />
                        <Orderlist/>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Statusorder