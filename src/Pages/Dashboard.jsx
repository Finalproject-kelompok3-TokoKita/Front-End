import Footer from "../Components/Footer"
import Nav from "../Components/Nav"
import Dashboardnav from "../Components/DashboardComponent/Dashboardnav"
import Sellermenulist from "../Components/DashboardComponent/Sellermenulist"
import Sellerprofile from "../Components/DashboardComponent/Sellerprofile"
import Sellercardinfo from "../Components/DashboardComponent/sellercardinfo"

const Dashboard = () => {
    return (
        <>
            <div className="container">
                <Nav />
            </div>
            <div id="dashboard-main">
                <div className="container">
                    <div className="two-col-dashboard-wrapper">
                        <Dashboardnav />
                        <div className="">
                            <Sellerprofile/>
                            <Sellercardinfo/>
                            <Sellermenulist/>
                        </div>
                    </div>
                </div>
            </div>
            
            <Footer/>
        </>
    )
}

export default Dashboard